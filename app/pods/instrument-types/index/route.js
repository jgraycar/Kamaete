import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('instrument-type');
  },

  actions: {
    create() {
      this.transitionTo('instrument-types.new');
    },
  },
});
