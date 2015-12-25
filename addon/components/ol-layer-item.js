import Ember from 'ember'
import layout from '../templates/components/ol-layer-item'

export default Ember.Component.extend({
  layout: layout,
  init () {
    this._super()
    const layer = this.get('layer')
    this.set('title', layer.get('title'))
    this.set('visible', layer.get('visible'))
    this.addObserver('visible', function () {
      layer.set('visible', this.get('visible'))
    })
    layer.on('change:visible', function () {
      this.set('visible', layer.get('visible'))
    }, this)
  }
})
