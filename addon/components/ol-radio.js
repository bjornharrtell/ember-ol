import Ember from 'ember';

export default Ember.Checkbox.extend({
  instrumentDisplay: '{{input type="radio"}}',
  classNames: ['ol-radio'],
  type: 'radio'
});
