import Ember from 'ember'
import layout from '../templates/components/ol-layer-tree-item'

const { computed } = Ember

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  id: computed('layer', function () {
    return 'ol-layer-item-' + this.get('layer.id')
  })
})
