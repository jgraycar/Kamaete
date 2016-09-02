import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [
      'performances-list-item', 'col-sm-6', 'col-md-4', 'col-lg-3]'],
  flashMessages: Ember.inject.service(),

  actions: {
    delete() {
      let performance = this.get('performance');
      let title = performance.get('title');

      if (confirm(`Are you sure you want to delete the performance "${title}"?` +
          ' This action cannot be undone!')) {
        performance.destroyRecord().then(() => {
          this.get('flashMessages').success(`Performance "${title}" successfully deleted.`);
        });
      }
    }
  }
});
