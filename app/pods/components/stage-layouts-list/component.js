import Ember from 'ember';

export default Ember.Component.extend({
  sortedStageLayouts: Ember.computed.sort('stage-layouts', 'sortDefinition'),
  sortDefinition: ['name:desc'],
});
