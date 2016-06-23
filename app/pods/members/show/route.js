import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('member', params.member_id);
  },

  actions: {
    delete(member) {
      let name = member.get('name');

      if (confirm(`Are you sure you want to delete the member "${name}"?` +
          ' This action cannot be undone!')) {
        member.destroyRecord().then(() => {
          this.transitionTo('members.index');
          this.get('flashMessages').success(`Member "${name}" successfully deleted.`);
        });
      }
    }
  }
});
