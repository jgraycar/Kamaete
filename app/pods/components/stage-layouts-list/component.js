import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedStageLayouts: Ember.computed.sort('stage-layouts', 'sortDefinition'),
  sortDefinition: ['name:desc'],
});
