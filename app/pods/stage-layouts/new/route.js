import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('stage-layout');
  },

  actions: {
    setupCreated() {
      this.transitionTo('stage-layouts');
    },

    willTransition() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.deleteRecord();
      }
    },
  },
});
