import Ember from 'ember';

export default Ember.Component.extend({
  shapeOptions: ['ellipse', 'rectangle', 'cross', 'triangle'],
  classNames: ['row', 'instrument-form'],

  actions: {
    saveChanges() {
      this.get('instrument').save().then(() => {
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
      this.get('instrument').rollbackAttributes();
    }
  },
});
