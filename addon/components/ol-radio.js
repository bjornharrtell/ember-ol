import Checkbox from "@ember/component/checkbox";

export default Checkbox.extend({
  instrumentDisplay: '{{input type="radio"}}',
  classNames: ['ol-radio'],
  type: 'radio'
})
