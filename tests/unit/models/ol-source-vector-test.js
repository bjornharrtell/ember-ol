import { moduleForModel, test } from 'ember-qunit'

moduleForModel('ol-source-vector', 'Unit | Model | ol source vector', {
  // Specify the other units that are required for this test.
  needs: ['model:ol-feature']
})

test('it exists', function(assert) {
  let model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
