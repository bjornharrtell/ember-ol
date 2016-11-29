import Ember from 'ember'
import layout from '../templates/components/ol-map-panel'

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  classNames: ['ol-map-panel'],
  didInsertElement () {
    const map = this.get('map')
    map.setTarget(this.element)
    const initialExtent = this.get('initialExtent')
    if (initialExtent) map.getView().fit(initialExtent, map.getSize())
  }
})
