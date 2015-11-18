import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ol-layer-switcher', 'Integration | Component | ol layer switcher', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ol-layer-switcher}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ol-layer-switcher}}
      template block text
    {{/ol-layer-switcher}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
