import Ember from 'ember'
import DS from 'ember-data'

const { Model, attr, hasMany } = DS
const { guidFor } = Ember

export default Model.extend({
  ready () {
    if (!this.get('id')) {
      this.set('id', guidFor(this))
    }

    const layer = this.get('layer')
    layer._modelRecord = this
    this.set('title', layer.get('title'))
    this.set('visible', layer.get('visible'))
    this.set('exclusive', layer.get('exclusive'))
    this.addObserver('visible', function () {
      layer.set('visible', this.get('visible'))
    })
    layer.on('change:visible', () => this.set('visible', layer.get('visible')))

    if (layer.getLayers) {
      this.set('isGroup', true)
      const layersArray = layer.getLayers().getArray()
      const layers = layersArray.map(layer => this.store.createRecord('ol-layer', { layer }))
      this.set('layers', layers)
    }
  },
  isGroup: attr('boolean', { defaultValue: false }),
  title: attr('string'),
  visible: attr('boolean'),
  exclusive: attr('exclusive'),
  layers: hasMany('ol-layer', { inverse: null })
})
