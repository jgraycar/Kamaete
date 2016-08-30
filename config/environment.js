/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'transitions',
    podModulePrefix: 'transitions/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiURL = 'http://localhost:3000';
    ENV.hostname = 'http://localhost:4200';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiURL = 'https://kamaete-api.herokuapp.com';
    ENV.hostname = 'https://www.kamaete.com';
  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'performances',
    routeIfAlreadyAuthenticated: 'performances'
  };

  return ENV;
};
