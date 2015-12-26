import Ember from 'ember'
import layout from '../templates/components/ol-layer-item'

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  init () {
    this._super()
  }
})
