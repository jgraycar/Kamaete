import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sortedMembers: Ember.computed.sort('members', 'sortDefinition'),
  sortDefinition: ['name'],

  actions: {
    createMember() {
      let name = this.get('name');

      if (name.length) {
        const member = this.get('store').createRecord('member', {
          name
        });

        member.save().then(() => {
        },

        (xhr) => {
          // TODO: display validation errors in xhr.errors
          // Need to make server send validation errors in JSON-API format;
        });
        this.set('name', '');
      }
    }
  }
});
