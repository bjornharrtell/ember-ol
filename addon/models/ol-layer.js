import Ember from 'ember';

export default Ember.Object.extend({
  title: null,
  visible: null,
  group: null,
  exclusive: false,
  init: function() {
    const layer = this.get('layer');
    this.title = layer.get('title');
    this.visible = layer.get('visible');
    this.group = layer.get('group');
    this.exclusive = layer.get('exclusive');
    this.addObserver('visible', layer, function(evt) {
        this.set('visible', evt.get('visible'));
    });
    layer.on('change:title', function(evt) {
        this.set('title', evt.target.get('title'));
    }, this);
    layer.on('change:visible', function(evt) {
        this.set('visible', evt.target.get('visible'));
    }, this);
    delete this.layer;
  }
});