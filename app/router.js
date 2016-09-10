import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

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

  this.route('stage-layouts', function() {
    this.route('index', { path: '/' });
    this.route('new');
    this.route('edit', { path: '/:stage_layout_id/edit' });
  });

  this.route('login');
  this.route('register');
  this.route('account-settings', { path: '/settings' });
});

export default Router;
