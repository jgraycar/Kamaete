import Ember from 'ember';

export default Ember.Component.extend({
  sortedPerformances: Ember.computed.sort('performances', 'sortDefinition'),
  sortDefinition: ['date:desc'],
});
