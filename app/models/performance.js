import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  members: DS.hasMany('member'),

  title: DS.attr('string'),
  date: DS.attr('date'),

  isUpcoming: Ember.computed('date', function() {
    return this.get('date') > new Date();
  }),

  sortedMembers: Ember.computed('members', function() {
    return this.get('members').sortBy('name');
  }),

  formattedDate: Ember.computed('date', function() {
    return moment(this.get('date')).format('LL');
  }),

  imageURL: Ember.computed('id', function() {
    return 'https://thecatapi.com/api/images/get?format=src&type=jpg&size=med';
  }),
});
