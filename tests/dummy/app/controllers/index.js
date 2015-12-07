import Ember from 'ember'
import ol from 'npm:openlayers'

export default Ember.Controller.extend({
  init () {
    const map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          title: 'OpenStreetMap',
          source: new ol.source.OSM()
        })
      ],
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }),
      target: 'map',
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    })

    this.set('map', map)
  }
})
