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

  isNotDirty: Ember.computed.not('hasDirtyAttributes'),

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
   * Returns the x-coordinate to use for displaying the instrument on the
   * stage SVG element. Most SVG elements (other than circles) are
   * positioned at their top-left corner. Adjust the x-coordinate so that
   * no matter the instrument's shape, xCoor will point to it's center.
   */
  xCoor: Ember.computed('x', 'template', 'centerX', 'shape', 'width', {
    get() {
      let adjustment = 0;
      if (!this.get('isEllipse')) {
        adjustment = this.get('width') / 2;
      }

      if (this.get('template')) {
        // Templates are not required to have a defined X attribute. Since they
        // are only shown when being edited, set their x-coordinate such that
        // they are centered.
        return 400 - adjustment;
      }

      return this.get('x') - adjustment;
    },

    set(key, value) {
      let adjustment = 0;
      if (!this.get('isEllipse')) {
        adjustment = this.get('width') / 2;
      }

      this.set('x', value + adjustment);
      return value;
    },
  }),

  /**
   * Returns the y-coordinate to use for displaying the instrument on the
   * stage SVG element. Most SVG elements (other than circles) are
   * positioned at their top-left corner. Adjust the y-coordinate so that
   * no matter the instrument's shape, yCoor will point to it's center.
   */
  yCoor: Ember.computed('y', 'template', 'centerY', 'shape', 'height', {
    get() {
      let adjustment = 0;
      if (!this.get('isEllipse')) {
        adjustment = this.get('height') / 2;
      }

      if (this.get('template')) {
        // Templates are not required to have a defined Y attribute. Since they
        // are only shown when being edited, set their y-coordinate such that
        // they are centered.
        return 225 - adjustment;
      }

      return this.get('y') - adjustment;
    },

    set(key, value) {
      let adjustment = 0;
      if (!this.get('isEllipse')) {
        adjustment = this.get('height') / 2;
      }

      this.set('y', value + adjustment);
      return value;
    },
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
    if (!this.get('isEllipse')) {
      pivotX += this.get('width') / 2;
      pivotY += this.get('height') / 2;
    }

    return `rotate(${this.get('angle')} ${pivotX} ${pivotY})`;
  }),

  /**
   * The viewBox for an SVG element that displays only this instrument.
   */
  viewBox: Ember.computed('xCoor', 'yCoor', function() {
    let x = this.get('xCoor');
    let y = this.get('yCoor');
    let width = this.get('width');
    let height = this.get('height');

    if (this.get('isEllipse')) {
      x -= width;
      y -= height;
      height *= 2;
      width *= 2;
    }

    return `${x} ${y} ${width} ${height}`;
  }),

  /**
   * Calculate the three points of a triangle-shaped instrument.
   */
  trianglePoints: Ember.computed('xCoor', 'yCoor', function() {
    const points = [];
    const xCoor = this.get('xCoor');
    const yCoor = this.get('yCoor');

    points.push(`${xCoor} ${yCoor}`);
    points.push(`${xCoor + this.get('width')} ${yCoor}`);
    points.push(`${xCoor + (this.get('width') / 2)} ${yCoor + this.get('height')}`);
    return points.join(',');
  }),

  /**
   * Calculate the points of the two lines for a cross-shaped instrument.
   */
  lines: Ember.computed('xCoor', 'yCoor', 'height', 'width', function() {
    const xCoor = this.get('xCoor');
    const yCoor = this.get('yCoor');
    const width = this.get('width');
    const height = this.get('height');

    const lines = [];
    lines.push({
      x1: xCoor,
      x2: xCoor + width,
      y1: yCoor + height,
      y2: yCoor,
    });
    lines.push({
      x1: xCoor + width,
      x2: xCoor,
      y1: yCoor + height,
      y2: yCoor,
    });
    return lines;
  }),
});
