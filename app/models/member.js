import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  performances: hasMany('performance'),

  upcomingPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming');
  }),

  pastPerformances: Ember.computed('performances', function() {
    return this.get('performances').filterBy('isUpcoming', false);
  })
});
