
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ol-layer', 'Unit | Model | ol layer', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject({
    layer: new ol.layer.Tile({
      title: 'OpenStreetMap',
      source: new ol.source.OSM()
    })
  });
  // let store = this.store();
  assert.ok(!!model);
});
