// components/my-table.js
import Ember from 'ember';
import Table from 'ember-light-table';

const { computed } = Ember;

export default Ember.Component.extend({
  model: null,
  classNames: 'feature-table',
  columns: computed(function() {
    return [{
      label: 'FID',
      valuePath: 'fid',
      sortable: false,
      cellComponent: 'cell-fid',
      width: '30px'
    }, {
      label: 'Geometry',
      valuePath: 'geometry',
      cellComponent: 'cell-geom'
    }];
  }),

  table: computed('model', function() {
   return new Table(this.get('columns'), this.get('model'), { enableSync: true });
  })
});
