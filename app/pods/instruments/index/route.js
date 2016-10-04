import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('instrument').then(
      (instruments) => instruments.filter((instrument) => instrument.get('template')));
  },

  actions: {
    create() {
      this.transitionTo('instruments.new');
    },
  },
});
