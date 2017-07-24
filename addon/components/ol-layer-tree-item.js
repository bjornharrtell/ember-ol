import Component from '@ember/component'
import layout from '../templates/components/ol-layer-tree-item'

import { computed } from '@ember/object'

export default Component.extend({
  layout: layout,
  tagName: 'li',
  id: computed('layer', function () {
    return 'ol-layer-item-' + this.get('layer.id')
  })
})
