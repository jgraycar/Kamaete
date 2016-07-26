import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('performance', params.performance_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('members', this.store.findAll('member'));
  },

  actions: {
    viewPerformance(performance) {
      this.transitionTo('performances.show', performance);
    },
  },
});
