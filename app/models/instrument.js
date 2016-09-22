import DS from 'ember-data';

export default DS.Model.extend({
  stageLayout: DS.belongsTo('stage-layout'),
  member: DS.belongsTo('member'),

  name: DS.attr('string'),
  shape: DS.attr('number'),
  color: DS.attr('string'),
  size: DS.attr('number'),
  x: DS.attr('number'),
  y: DS.attr('number'),
  angle: DS.attr('number'),
  template: DS.attr('boolean', { defaultValue: false }),
});
