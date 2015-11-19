import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import map from '../../helpers/map';

moduleForComponent('ol-map-panel', 'Integration | Component | ol map panel', {
  integration: true
});

test('it renders', function(assert) {
  this.set('map', map)
  this.render(hbs`{{ol-map-panel map=map}}`);
  assert.equal(this.$('div').hasClass('ol-viewport'), true);
});
