import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  sortedMembers: Ember.computed.sort('members', 'sortDefinition'),
  sortDefinition: ['name'],

  actions: {
    createMember() {
      const nameInput = Ember.$('#new-member-name')[0];
      let name = nameInput.value;

      if (name) {
        const member = this.get('store').createRecord('member', {
          name
        });

        member.save().then(() => {
        },

        (xhr) => {
          // TODO: display validation errors in xhr.errors
          // Need to make server send validation errors in JSON-API format;
        });
        nameInput.value = '';
      }
    },

    delete(member) {
      let name = member.get('name');

      if (member.get('upcomingPerformances').length === 0 ||
          confirm(`Are you sure you want to delete the member "${name}"?` +
          ' This action cannot be undone!')) {
        member.destroyRecord().then(() => {
          this.get('flashMessages').success(`Member "${name}" successfully deleted.`);
        });
      }
    }
  }
});
