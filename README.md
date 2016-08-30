# Kamaete

The frontend client code for [www.kamaete.com](https://www.kamaete.com),
implemented using [Ember.js](http://emberjs.com/)

**Kamaete** takes drum movements into the future, by offering a modern solution
to planning stage transitions.

See [here](https://github.com/jgraycar/Kamaete-API) for the backend server code.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:jgraycar/Kamaete`
* change into the new directory (`cd Kamaete`)
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

For the application to work as intended, the Rails backend must also be running;
see the [backend repo](https://github.com/jgraycar/Kamaete-API) for the relevant
setup instructions.

### Running Tests

* `ember test`
* `ember test --server`

### Building & Deploying

* `ember build` (development)

To simultaneously build the code in the production environment and deploy it to the
Firebase-hosted live site, simply run `bin/deploy`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

