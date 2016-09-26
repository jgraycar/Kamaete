import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kamaete-instrument', 'Integration | Component | kamaete instrument', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{kamaete-instrument}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#kamaete-instrument}}
      template block text
    {{/kamaete-instrument}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
