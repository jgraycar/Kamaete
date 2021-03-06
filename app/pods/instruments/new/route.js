import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('instrument', { template: true });
  },

  actions: {
    instrumentCreated(instrument) {
      this.transitionTo('instruments.show', instrument);
    },

    willTransition() {
      if (this.currentModel.get('hasDirtyAttributes')) {
        this.currentModel.rollbackAttributes();
      }
    },
  },
});
