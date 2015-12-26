import Ember from 'ember'
import layout from '../templates/components/ol-map-panel'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-map-panel'],
  didInsertElement () {
    const map = this.get('map')
    map.setTarget(this.element)
    const vector = map.getLayers().item(1).getLayers().item(0)
    map.getView().fit(vector.getSource().getExtent(), map.getSize())
  }
})
