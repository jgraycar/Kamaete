import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('setup');
  },

  actions: {
    create() {
      this.transitionTo('setups.new');
    },
  },
});
