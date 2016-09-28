import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    const sliders = this.$('paper-slider');

    const immediateValueChangeHandler = (e) => {
      const attribute = e.srcElement.dataset.attribute;
      this.get('instrument').set(attribute, e.srcElement.immediateValue);
    };

    const valueChangeHandler = (e) => {
      const attribute = e.srcElement.dataset.attribute;
      this.get('instrument').set(attribute, e.srcElement.value);
    };

    for (const slider of sliders) {
      slider.addEventListener('immediate-value-change', immediateValueChangeHandler);
      slider.addEventListener('change', valueChangeHandler);
    }
  },

  actions: {
    poop() {
      debugger;
    },

    valueChange() {
      debugger;
    },

    change() {
      debugger;
    },

    immediateValueChange() {
      debugger;
    },
  },
});
