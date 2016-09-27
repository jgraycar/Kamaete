import DS from 'ember-data';

export default DS.Model.extend({
  performance: DS.belongsTo('performance'),
  instruments: DS.hasMany('instrument'),

  name: DS.attr('string'),
});
