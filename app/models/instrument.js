import DS from 'ember-data';

export default DS.Model.extend({
  stageLayout: DS.belongsTo('stage-layout'),
  member: DS.belongsTo('member'),

  label: DS.attr('string'),
  kind: DS.attr('string'),
  shape: DS.attr('string'),
  color: DS.attr('string'),
  size: DS.attr('number'),
  x: DS.attr('number'),
  y: DS.attr('number'),
  angle: DS.attr('number'),
  template: DS.attr('boolean', { defaultValue: false }),
});
