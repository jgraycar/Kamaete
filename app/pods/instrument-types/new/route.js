import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('instrument-type');
  },

  actions: {
    setupCreated() {
      this.transitionTo('instrument-types');
    },

    willTransition() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.deleteRecord();
      }
    },
  },
});
