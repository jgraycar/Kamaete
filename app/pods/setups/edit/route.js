import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('setup', params.setup_id);
  },

  actions: {
    setupUpdated() {
      this.transitionTo('setups');
    },

    willTransition() {
      if (this.currentModel.get('hasDirtyAttributes')) {
        this.currentModel.rollbackAttributes();
      }
    }
  },
});
