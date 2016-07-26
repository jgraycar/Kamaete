import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,

  trackPageView: function() {
    // Register a page view event with Google Analytics
    ga('set', {
      page: this.get('url'),
      title: this.get('url')
    });

    ga('send', 'pageview');
  }.on('didTransition')
});

Router.map(function() {
  this.route('performances', function() {
    this.route('index', { path: '/' });
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:performance_id' });
    this.route('edit', { path: '/:performance_id/edit' });
  });

  this.route('members', function() {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:member_id' });
  });

  this.route('setups', function() {
    this.route('index', { path: '/' });
    this.route('new');
  });

  this.route('login');
  this.route('register');
  this.route('account-settings', { path: '/settings' });
});

export default Router;
