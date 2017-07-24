// components/my-table.js
import Component from "@ember/component";

import { computed } from "@ember/object"

export default Component.extend({
  shortFid: computed('value', function() {
    const fid = this.get('value');
    const shortFid = fid ? fid.substr(0, 6) : 'n/a';
    return shortFid;
  })
});
