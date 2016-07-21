import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('performance', this.store.createRecord('performance', {

    }));
  },

  actions: {
    viewPerformance(performance) {
      this.transitionTo('performances.show', performance);
    }
  }
});
