import Ember from 'ember';
import layout from '../templates/components/ol-layer-tree-group';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  setup: Ember.on('init', function () {
    const layers = this.get('layers');
    const exclusiveLayers = layers.filter(layer => layer.get('exclusive'));
    const onExlusiveLayerVisibilityChange = layer => {
      const visible = layer.get('visible');
      if (visible) {
        exclusiveLayers.filter(e => layer !== e)
          .forEach(e => e.set('visible', false));
      }
    };
    exclusiveLayers.forEach(layer => layer.addObserver('visible', onExlusiveLayerVisibilityChange));
  })
});
