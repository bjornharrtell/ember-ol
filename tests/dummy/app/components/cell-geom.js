// components/my-table.js
import Component from '@ember/component'

import { computed } from '@ember/object'

export default Component.extend({
  wkt: computed('value', function() {
    const geometry = this.get('value')
    const format = new ol.format.WKT()
    const wkt = format.writeGeometry(geometry)
    return wkt
  })
})
