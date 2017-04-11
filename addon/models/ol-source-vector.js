import DS from 'ember-data'

const { Model, hasMany } = DS

export default Model.extend({
  ready () {
    // console.debug('ol-source-vector:ready:call');

    this.__updating = false

    const source = this.get('source')

    if (!source) {
      return
    }

    source.getFeatures().forEach(f => this.addFeature(f))

    source.on('addfeature', e => {
      if (!this.__updating) {
        const feature = e.feature
        this.addFeature(feature)
      }
    })

    source.on('removefeature', e => {
      if (!this.__updating) {
        const feature = e.feature
        this.get('features').removeObject(feature._emberRecord)
      }
    })

    this.get('features').addArrayObserver({
      arrayWillChange: (observedObj, start, removeCount) => {
        if (removeCount === 1) {
          this.__updating = true
          const feature = this.get('features').objectAt(start).get('feature')
          if (source.getFeatures().indexOf(feature) !== -1) {
            source.removeFeature(feature)
          }
          this.__updating = false
        }
      },
      arrayDidChange: (observedObj, start, removeCount, addCount) => {
        if (addCount === 1) {
          this.__updating = true
          const feature = this.get('features').objectAt(start).get('feature')
          if (source.getFeatures().indexOf(feature) === -1) {
            source.addFeature(feature)
          }
          this.__updating = false
        }
      }
    })

    // console.debug('ol-source-vector:ready:return');
  },
  addFeature (feature) {
    // console.debug('ol-source-vector:addFeature:call');
    const r = this.store.createRecord('ol-feature', {
      feature,
      geometry: feature.getGeometry()
    })
    feature._emberRecord = r
    this.get('features').pushObject(r)
    // f.on('ready', () => this.get('features').pushObject(f))
    // console.debug('ol-source-vector:addFeature:return');
    return r
  },
  features: hasMany('ol-feature')
})
