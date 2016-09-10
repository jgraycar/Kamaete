import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  performance: DS.belongsTo('performance'),
});
