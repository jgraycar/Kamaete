import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('performance');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('members', this.store.findAll('member'));
  },

  actions: {
    viewPerformance(performance) {
      this.transitionTo('performances.show', performance);
    },

    willTransition() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.deleteRecord();
      }
    },
  },
});
