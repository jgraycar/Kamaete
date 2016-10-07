import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('instrument', { filter: { template: true } });
  },

  actions: {
    create() {
      this.transitionTo('instruments.new');
    },
  },
});
