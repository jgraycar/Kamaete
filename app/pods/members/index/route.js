import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member');
  },

  actions: {
    create() {
      Ember.$('#new-member-name').focus();
    }
  }
});
