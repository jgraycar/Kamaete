import DS from 'ember-data';

export default DS.Model.extend({
  performance: DS.belongsTo('performance'),

  name: DS.attr('string'),
});
