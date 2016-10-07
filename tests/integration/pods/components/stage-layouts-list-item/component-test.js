import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stage-layouts-list-item', 'Integration | Component | stage layouts list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stage-layouts-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stage-layouts-list-item}}
      template block text
    {{/stage-layouts-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
