import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveChanges() {
      this.get('model').save().then(() => {
        this.get('model').get('saveInstruments');
        const toast = Ember.$('#toast')[0];
        toast.text = 'Changes saved.';
        toast.open();
      }, () => {
        const toast = Ember.$('#toast')[0];
        toast.text = 'Changes could not be saved; please try again.';
        toast.open();
      });
    },

    undoChanges() {
      this.get('model').rollbackAttributes();
      this.get('model').get('instruments').forEach((instrument) => {
        if (instrument.get('hasDirtyAttributes')) {
          instrument.rollbackAttributes();
        }
      });
    },
  }
});
