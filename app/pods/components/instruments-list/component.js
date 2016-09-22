import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedInstruments: Ember.computed.sort('instruments', 'sortDefinition'),
  sortDefinition: ['kind:asc'],
});
