import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  performance: DS.belongsTo('performance'),
  instruments: DS.hasMany('instrument'),

  name: DS.attr('string'),

  isNotDirty: Ember.computed('instruments', 'hasDirtyAttributes', function() {
    const instruments = this.get('instruments');
    const dirtyInstruments = instruments.filter(
      (instrument) => instrument.get('hasDirtyAttributes'));

    if (dirtyInstruments.length === 0 && !this.get('hasDirtyAttributes')) {
      return true;
    }

    return false;
  }),

  saveInstruments: Ember.computed('instruments', function() {
    this.get('instruments').forEach((instrument) => {
      if (instrument.get('hasDirtyAttributes')) {
        instrument.save();
      }
    });
  }),
});
