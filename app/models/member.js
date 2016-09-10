import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  performances: DS.hasMany('performance'),

  upcomingPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming');
  }),

  pastPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming', false);
  })
});
