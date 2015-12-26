import Ember from 'ember'
import layout from '../templates/components/ol-layer-tree'
import OlLayer from '../models/ol-layer'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-layer-tree'],
  init () {
    this._super()
    const layer = OlLayer.create({ layer: this.get('map').getLayerGroup() })
    this.set('layer', layer)
  }
})
