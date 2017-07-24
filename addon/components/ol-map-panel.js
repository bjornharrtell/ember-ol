import Component from "@ember/component";
import layout from '../templates/components/ol-map-panel'

export default Component.extend({
  layout: layout,
  classNames: ['ol-map-panel'],
  didInsertElement () {
    const map = this.get('map')
    map.setTarget(this.element)
    const initialExtent = this.get('initialExtent')
    if (initialExtent) map.getView().fit(initialExtent, map.getSize())
  }
})
