import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('setup');
  },

  actions: {
    setupCreated() {
      this.transitionTo('setups');
    },

    willTransition() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.deleteRecord();
      }
    },
  },
});
