import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('instrument', params.instrument_id);
  },

  actions: {
    willTransition() {
      if (this.currentModel.get('hasDirtyAttributes')) {
        this.currentModel.rollbackAttributes();
      }
    },
  }
});
