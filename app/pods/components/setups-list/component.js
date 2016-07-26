import Ember from 'ember';

export default Ember.Component.extend({
  sortedSetups: Ember.computed.sort('setups', 'sortDefinition'),
  sortDefinition: ['title:desc'],
});
