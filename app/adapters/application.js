import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'kamaete/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.apiURL,
  authorizer: 'authorizer:devise-token',

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },
});
