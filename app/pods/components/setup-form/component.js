import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    create() {
      var setup = this.get('setup');

      setup.save().then(() => {
        this.sendAction('formSubmittedSuccessfully');
      });
    }
  }
});
