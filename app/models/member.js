import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  performances: DS.hasMany('performance'),

  name: DS.attr('string'),

  upcomingPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming');
  }),

  pastPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming', false);
  })
});
