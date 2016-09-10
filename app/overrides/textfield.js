import Ember from 'ember';

export default Ember.TextField.reopen({
  attributeBindings: ['is']
});
