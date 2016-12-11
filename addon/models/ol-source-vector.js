import DS from 'ember-data';

export default DS.Model.extend({
  ready () {
    console.debug('ol-source-vector:ready:call')

    this.__updating = false

    const source = this.get('source')

    if (!source) {
      return
    }

    source.getFeatures().forEach(f => this.addFeature(f))

    source.on('addfeature', e => {
      if (!this.__updating) {
        const feature = e.feature
        this.addFeature(e.feature)
      }
    })

    this.get('features').addArrayObserver({
      arrayWillChange() {

      },
      arrayDidChange: (observedObj, start, removeCount, addCount) => {
        const feature = this.get('features').objectAt(start).get('feature')
        this.__updating = true
        if (source.getFeatures().indexOf(feature) === -1) {
          source.addFeature(feature)
        }
        this.__updating = false
      }
    })
    console.debug('ol-source-vector:ready:return')
  },
  addFeature (feature) {
    console.debug('ol-source-vector:addFeature:call')
    const r = this.store.createRecord('ol-feature', {
      feature,
      geometry: feature.getGeometry()
    })
    feature._emberRecord = r
    this.get('features').pushObject(r)
    // f.on('ready', () => this.get('features').pushObject(f))
    console.debug('ol-source-vector:addFeature:return')
  },
  addFeatures (features) {
    features.forEach(f => this.addFeature(feature))
  },
  features: DS.hasMany('ol-feature')
});
