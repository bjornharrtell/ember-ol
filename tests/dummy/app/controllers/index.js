import Controller from "@ember/controller";

export default Controller.extend({
  init () {
    this._super(...arguments);

    const store = this.get('store');

    const f1 = new ol.Feature({
      geometry: new ol.geom.Polygon([[[2, 2], [98, 2], [2, 98], [2, 2]]])
    });

    const source = new ol.source.Vector({
      features: [
        f1
      ]
    });

    const sourceRecord = this.get('store').createRecord('ol-source-vector', {
      source
    });

    this.set('sourceRecord', sourceRecord);

    const vector = new ol.layer.Vector({
      title: 'Vector',
      source: source
    });

    const map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          title: 'OpenStreetMap',
          exclusive: true,
          source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
          title: 'Stamen',
          exclusive: true,
          visible: false,
          source: new ol.source.Stamen({layer: 'watercolor'})
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
    });

    map.addControl(new ol.control.MousePosition({
      coordinateFormat: c => parseInt(c[0], 10) + ', ' + parseInt(c[1], 10)
    }));

    this.set('map', map);
    this.set('initialExtent', vector.getSource().getExtent());

    const f2 = new ol.Feature({
      geometry: new ol.geom.Polygon([[[20, 20], [98, 20], [20, 98], [20, 20]]])
    });
    source.addFeature(f2);

    const draw = new ol.interaction.Draw({ source, type: 'LineString' });
    map.addInteraction(draw);

    const layers = map.getLayers().getArray().concat().reverse()
      .map(layer => store.createRecord('ol-layer', { layer }));
    this.set('layers', layers);
  }
});
