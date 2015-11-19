import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import map from '../../helpers/map';

moduleForComponent('ol-layer-switcher', 'Integration | Component | ol layer switcher', {
  integration: true
});

test('it renders', function(assert) {
  this.set('map', map)
  
  this.render(hbs`{{ol-layer-switcher map=map}}`)
  assert.equal(this.$().text().trim(), 'OpenStreetMap')
  
  this.render(hbs`
    {{#ol-layer-switcher map=map}}
      template block text
    {{/ol-layer-switcher}}
  `)
  assert.equal(this.$().text().trim(), 'OpenStreetMap')
});
