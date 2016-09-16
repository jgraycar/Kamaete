import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  shape: DS.attr('number'),
  color: DS.attr('string'),
  size: DS.attr('number'),
});
