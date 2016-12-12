// components/my-table.js
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  wkt: computed('value', function() {
    const geometry = this.get('value');
    const format = new ol.format.WKT();
    const wkt = format.writeGeometry(geometry);
    return wkt;
  })
});
