// components/my-table.js
import Ember from 'ember';
import Table from 'ember-light-table';

const { computed } = Ember;

export default Ember.Component.extend({
  shortFid: Ember.computed('value', function() {
    const fid = this.get('value')
    const shortFid = fid ? fid.substr(0, 6) : 'n/a'
    return shortFid
  })
});
