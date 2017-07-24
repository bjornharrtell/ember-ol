// components/my-table.js
import Component from "@ember/component";
import Table from 'ember-light-table';

import { computed } from "@ember/object"

export default Component.extend({
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
