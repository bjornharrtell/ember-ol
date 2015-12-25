import Ember from 'ember'
import layout from '../templates/components/ol-layer-tree'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-layer-tree'],
  init () {
    this._super()
    this.set('layers', this.get('map').getLayers().getArray())
  }
})
