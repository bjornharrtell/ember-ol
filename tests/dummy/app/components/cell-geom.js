// components/my-table.js
import Ember from 'ember';
import Table from 'ember-light-table';

const { computed } = Ember;

export default Ember.Component.extend({
  wkt: Ember.computed('value', function() {
    const geometry = this.get('value')
    const format = new ol.format.WKT()
    const wkt = format.writeGeometry(geometry)
    console.log(wkt)
    return wkt
  })
});
