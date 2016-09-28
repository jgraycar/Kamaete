import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  stageLayout: DS.belongsTo('stage-layout'),
  member: DS.belongsTo('member'),

  label: DS.attr('string'),
  kind: DS.attr('string'),
  shape: DS.attr('string'),
  color: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  x: DS.attr('number'),
  y: DS.attr('number'),
  angle: DS.attr('number'),
  template: DS.attr('boolean', { defaultValue: false }),

  isEllipse: Ember.computed('shape', function() {
    return this.get('shape') === 'ellipse';
  }),

  isRectangle: Ember.computed('shape', function() {
    return this.get('shape') === 'rectangle';
  }),

  isTriangle: Ember.computed('shape', function() {
    return this.get('shape') === 'triangle';
  }),

  isCross: Ember.computed('shape', function() {
    return this.get('shape') === 'cross';
  }),

  xCoor: Ember.computed('x', 'template', 'centerX', function() {
    if (this.get('template')) {
      return this.get('centerX');
    }

    return this.get('x');
  }),

  yCoor: Ember.computed('y', 'template', 'centerY', function() {
    if (this.get('template')) {
      return this.get('centerY');
    }

    return this.get('y');
  }),

  centerX: Ember.computed('x', 'shape', 'width', function() {
    let adjustment = 0;
    if (this.get('isRectangle')) {
      adjustment = this.get('width') / 2;
    }

    return 400 - adjustment;
  }),

  centerY: Ember.computed('y', 'shape', 'height', function() {
    let adjustment = 0;
    if (this.get('isRectangle')) {
      adjustment = this.get('height') / 2;
    }

    return 225 - adjustment;
  }),
});
