import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    loginFailed() {
      this.transitionTo('login');
    }
  },

  didTransition: function() {
    this._super(...arguments);

    return ga('send', 'pageview', {
      page: this.get('url'),
      title: this.get('url')
    });
  }
});
