import Ember from 'ember';

export default Ember.Component.extend({
  isDragging: false,
  classNames: ['stage'],
  elevation: 3,

  didRender() {
    this.svg = this.$('svg')[0];
  },

  mouseDown: function(e) {
    const id = e.target.getAttribute('data-id');

    if (id && this.instruments) {
      this.selectedInstrument = this.instruments.find(
        (instrument) => instrument.id === id);
      this.oldX = e.data;
      this.isDragging = true;
      Ember.$('.selected').removeClass('selected');
      Ember.$(e.target).addClass('selected');
    } else {
      this.selectedInstrument = null;
      Ember.$('.selected').removeClass('selected');
    }
  },

  mouseMove: function(e) {
    if (this.isDragging) {
      const pt = this.svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const cursorPosition = pt.matrixTransform(this.svg.getScreenCTM().inverse());
      this.selectedInstrument.set('x', cursorPosition.x);
      this.selectedInstrument.set('y', cursorPosition.y);
    }
  },

  mouseUp: function() {
    this.isDragging = false;
  },
});
