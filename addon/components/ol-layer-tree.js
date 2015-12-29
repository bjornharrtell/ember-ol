import Ember from 'ember'
import layout from '../templates/components/ol-layer-tree'
import OlLayer from '../models/ol-layer'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-layer-tree'],
  setup: Ember.on('init', function () {
    const layer = OlLayer.create({
      layer: this.get('map').getLayerGroup(),
      title: 'Root'
    })
    this.set('layer', layer)
    const olLayers = this.get('map').getLayers().getArray().concat().reverse()
    const layers = olLayers.map(layer => OlLayer.create({ layer }))
    this.set('layers', layers)
  })
})
