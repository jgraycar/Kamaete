import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('performance', params.performance_id);
  },

  actions: {
    delete(performance) {
      let title = performance.get('title');

      if (confirm(`Are you sure you want to delete the performance "${title}"?` +
          ' This action cannot be undone!')) {
        //this.store.unloadRecord(performance);
        performance.destroyRecord().then(() => {
          this.transitionTo('performances.index');
          this.get('flashMessages').success(`Performance "${title}" successfully deleted.`);
        });
      }
    }
  }
});
