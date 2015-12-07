import Ember from 'ember'
import layout from '../templates/components/ol-layer-switcher'
import OlLayer from '../models/ol-layer'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-layer-switcher'],
  layers: Ember.computed('map', function () {
    return this.get('map').getLayers().getArray().map(layer => OlLayer.create({
      layer: layer
    }))
  })
})
