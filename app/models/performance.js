import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import moment from 'moment';

export default Model.extend({
  title: attr('string'),
  date: attr('date'),
  members: hasMany('member'),

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
    return `https://robohash.org/${this.get('id')}?size=200x150&set=any&bgset=any`;
  })
});
