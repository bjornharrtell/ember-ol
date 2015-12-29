import Ember from 'ember'
import layout from '../templates/components/ol-layer-tree-item'

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  id: Ember.computed('layer', function () {
    return 'item-' + this.get('layer.id')
  })
})
