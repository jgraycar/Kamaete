import Ember from 'ember';

export default Ember.Component.extend({
  isDragging: false,
  classNames: ['stage'],
  elevation: 3,

  mouseDown: function(e) {
    const id = e.target.getAttribute('data-id');

    if (id && this.instruments) {
      this.selectedInstrument = this.instruments.find(
        (instrument) => instrument.id === id);
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
      this.selectedInstrument.set('x', e.offsetX);
      this.selectedInstrument.set('y', e.offsetY);
    }
  },

  mouseUp: function() {
    this.isDragging = false;
  },
});
