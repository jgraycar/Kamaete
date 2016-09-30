import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  stageLayout: DS.belongsTo('stage-layout'),
  member: DS.belongsTo('member'),

  label: DS.attr('string'),
  kind: DS.attr('string', { required: true }),
  shape: DS.attr('string', { defaultValue: 'ellipse' }),
  color: DS.attr('string', { defaultValue: '#000' }),
  width: DS.attr('number', { defaultValue: 20 }),
  height: DS.attr('number', { defaultValue: 20 }),
  x: DS.attr('number', { defaultValue: 0 }),
  y: DS.attr('number', { defaultValue: 0 }),
  angle: DS.attr('number', { defaultValue: 0 }),
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

  /**
   * Returns the x coordinate to use for displaying the instrument
   * on the stage SVG element. Templates are not required to have a
   * defined X attribute. Since they are only shown when being edited,
   * their x coordinate should be such that they are centered.
   */
  xCoor: Ember.computed('x', 'template', 'centerX', function() {
    if (this.get('template')) {
      return this.get('centerX');
    }

    return this.get('x');
  }),

  /**
   * Returns the y coordinate to use for displaying the instrument
   * on the stage SVG element. Templates are not required to have a
   * defined Y attribute. Since they are only shown when being edited,
   * their y coordinate should be such that they are centered.
   */
  yCoor: Ember.computed('y', 'template', 'centerY', function() {
    if (this.get('template')) {
      return this.get('centerY');
    }

    return this.get('y');
  }),

  /**
   * Calculates the x coordinate that would cause the instrument to be
   * centered in the SVG stage element, based on shape and size.
   */
  centerX: Ember.computed('x', 'shape', 'width', function() {
    let adjustment = 0;
    if (this.get('isRectangle')) {
      adjustment = this.get('width') / 2;
    }

    return 400 - adjustment;
  }),

  /**
   * Calculates the y coordinate that would cause the instrument to be
   * centered in the SVG stage element, based on shape and size.
   */
  centerY: Ember.computed('y', 'shape', 'height', function() {
    let adjustment = 0;
    if (this.get('isRectangle')) {
      adjustment = this.get('height') / 2;
    }

    return 225 - adjustment;
  }),

  /**
   * Returns the SVG transformation to rotate the instrument ANGLE degrees.
   */
  rotationTransformation: Ember.computed(
      'angle', 'xCoor', 'yCoor', 'shape', 'width', 'height', function() {
    let pivotX = this.get('xCoor');
    let pivotY = this.get('yCoor');

    // xCoor and yCoor are adjusted so that no matter the instrument's shape,
    // they will point to it's center (other than circle's, most SVG elements
    // instead point to their top left corner). Undo that adjustment here so
    // that the rotation applies as expected.
    if (this.get('isRectangle')) {
      pivotX += this.get('width') / 2;
      pivotY += this.get('height') / 2;
    }

    return `rotate(${this.get('angle')} ${pivotX} ${pivotY})`;
  }),

  isNotDirty: Ember.computed.not('hasDirtyAttributes'),
});
