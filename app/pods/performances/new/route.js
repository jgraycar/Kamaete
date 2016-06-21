import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member');
  },

  actions: {
    viewPerformance(performance) {
      // TODO: transition to show route for performance
      this.transitionTo('performances.show', performance);
    }
  }
});
