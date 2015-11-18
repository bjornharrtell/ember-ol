import Ember from 'ember';
import layout from '../templates/components/ol-map-panel';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ol-map-panel'],
  didInsertElement() {
    this.get('map').setTarget(this.element)
  }
});
