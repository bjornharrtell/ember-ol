import Ember from 'ember'

const OlLayer = Ember.Object.extend({
  init () {
    const layer = this.get('layer')
    this.set('title', layer.get('title'))
    this.set('visible', layer.get('visible'))
    this.set('exclusive', layer.get('exclusive'))
    this.addObserver('visible', function () {
      layer.set('visible', this.get('visible'))
    })
    layer.on('change:visible', function () {
      this.set('visible', layer.get('visible'))
    }, this)
    if (layer.getLayers) {
      const layers = layer.getLayers().getArray().map(layer => OlLayer.create({ layer }))
      this.set('layers', layers)
    }
  }
})

export default OlLayer
