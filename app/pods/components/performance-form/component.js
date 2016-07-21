import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  selectedMembers: [],

  actions: {
    create() {
      var performance = this.get('performance');

      performance.save().then(() => {
        this.sendAction('formSubmittedSuccessfully', performance);
      });
    },

    handleKeydown(dropdown, e) {
      if (e.keyCode === 13) {
        // Prevent form submissions when user presses enter to select autocompletion
        e.preventDefault();
      }
    }
  }
});
