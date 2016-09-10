import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    create() {
      var stageLayout = this.get('stage-layout');

      stageLayout.save().then(() => {
        this.sendAction('formSubmittedSuccessfully');
      });
    }
  }
});
