import Ember from 'ember'
import ol from 'npm:openlayers'

export default Ember.Controller.extend({
  init () {
    const vector = new ol.layer.Vector({
      title: 'Vector',
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Polygon([[[2, 2], [98, 2], [2, 98], [2, 2]]])
          })
        ]
      })
    })

    const map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          title: 'OpenStreetMap',
          exclusive: true,
          source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
          title: 'MapQuest sat',
          exclusive: true,
          visible: false,
          source: new ol.source.MapQuest({layer: 'sat'})
        }),
        new ol.layer.Group({
          title: 'Layer group',
          layers: [
            vector
          ]
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

    map.addControl(new ol.control.MousePosition({
      coordinateFormat: c => parseInt(c[0], 10) + ', ' + parseInt(c[1], 10)
    }))

    this.set('map', map)
    this.set('initialExtent', vector.getSource().getExtent())
  }
})
