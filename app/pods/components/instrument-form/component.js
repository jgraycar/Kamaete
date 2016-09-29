import Ember from 'ember';

export default Ember.Component.extend({
  shapeOptions: ['ellipse', 'rectangle', 'cross', 'triangle'],

  actions: {
    saveInstrument() {
      this.get('instrument').save().then(() => {
        console.log('Instrument updated!');
      }, () => {
        console.log('Instrument could not be saved');
      });
    },

    undoChanges() {
      this.get('instrument').rollbackAttributes();
    }
  },
});
