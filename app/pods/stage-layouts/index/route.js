import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('stage-layout');
  },

  actions: {
    create() {
      this.transitionTo('stage-layouts.new');
    },
  },
});
