import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [
    'instruments-list-item', 'col-sm-6', 'col-md-4', 'col-lg-3]'],

  actions: {
    deleteInstrument(instrument) {
      instrument.destroyRecord().then(() => {
        const toast = Ember.$('#toast')[0];
        toast.text = 'Instrument deleted';
        toast.open();
      }, () => {
        const toast = Ember.$('#toast')[0];
        toast.text = 'Instrument could not be deleted; please try again';
        toast.open();
      });
    }
  }
});
