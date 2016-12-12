import DS from 'ember-data';

export default DS.Model.extend({

  ready () {
    const feature = this.get('feature');
    if (!feature) {
      const newFeature = new ol.Feature({
        geometry: this.get('geometry')
      });
      newFeature._emberRecord = this;
      this.set('feature', newFeature);
    }
  },
  geometry: DS.attr('ol-geometry')
});
