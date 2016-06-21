import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('performance', params.performance_id);
  },

  actions: {
    viewPerformance(performance) {
      this.transitionTo('performances.show', performance);
    }
  }
});
