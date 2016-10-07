import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [
    'layouts-list-item', 'col-sm-6', 'col-md-4', 'col-lg-3]'],

  actions: {
    deleteLayout(layout) {
      layout.destroyRecord().then(() => {
        const toast = Ember.$('#toast')[0];
        toast.text = 'Layout deleted';
        toast.open();
      }, () => {
        const toast = Ember.$('#toast')[0];
        toast.text = 'Layout could not be deleted; please try again';
        toast.open();
      });
    }
  }
});
