import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('stage-layout', params.stage_layout_id);
  },

  actions: {
    setupUpdated() {
      this.transitionTo('layouts');
    },

    willTransition() {
      if (this.currentModel.get('hasDirtyAttributes')) {
        this.currentModel.rollbackAttributes();
      }
    },
  },
});
