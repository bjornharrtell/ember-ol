// components/my-table.js
import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  shortFid: computed('value', function() {
    const fid = this.get('value');
    const shortFid = fid ? fid.substr(0, 6) : 'n/a';
    return shortFid;
  })
});
