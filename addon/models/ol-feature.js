import DS from 'ember-data';

export default DS.Model.extend({
  fid: DS.attr('string'),
  geometry: DS.attr('ol-geometry')
});
