import DS from 'ember-data';

import uuid from 'npm:uuid/v4'

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
        if (!feature.getId()) {
          feature.setId(uuid())
        }
        this.addFeature(e.feature)
      }
    })

    this.get('features').addArrayObserver({
      arrayWillChange() {

      },
      arrayDidChange: (observedObj, start, removeCount, addCount) => {
        const feature = this.get('features').objectAt(start)
        const id = feature.get('feature').getId()
        this.__updating = true
        if (!source.getFeatureById(feature.get('feature').getId())) {
          source.addFeature(feature.get('feature'))
        }
        this.__updating = false
      }
    })
    console.debug('ol-source-vector:ready:return')
  },
  addFeature (feature) {
    console.debug('ol-source-vector:addFeature:call')
    const f = this.store.createRecord('ol-feature', {
      feature,
      fid: feature.getId(),
      geometry: feature.getGeometry()
    })
    this.get('features').pushObject(f)
    // f.on('ready', () => this.get('features').pushObject(f))
    console.debug('ol-source-vector:addFeature:return')
  },
  addFeatures (features) {
    features.forEach(f => this.addFeature(feature))
  },
  features: DS.hasMany('ol-feature')
});
