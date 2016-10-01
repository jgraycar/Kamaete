import Ember from 'ember';

export default Ember.Component.extend({
  sortedInstruments: Ember.computed.sort('instruments', 'sortDefinition'),
  sortDefinition: ['kind:asc'],
});
