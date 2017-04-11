import DS from 'ember-data'

const format = new ol.format.GeoJSON()

export default DS.Transform.extend({
  deserialize (serialized) {
    return format.readGeometry(serialized)
  },
  serialize (deserialized) {
    return format.writeGeometry(deserialized)
  }
})
