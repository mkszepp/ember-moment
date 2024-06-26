import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render } from '@ember/test-helpers';

module('is-same-or-before', function (hooks) {
  setupRenderingTest(hooks);

  test('one arg (comparisonDate)', async function (assert) {
    assert.expect(1);

    await render(hbs`{{is-same-or-before '2011-10-19'}}`);
    assert.dom(this.element).hasText('false');
  });

  test('one arg with precision (comparisonDate, precision)', async function (assert) {
    assert.expect(1);

    await render(hbs`{{is-same-or-before '2011-10-19' precision='year'}}`);
    assert.dom(this.element).hasText('false');
  });

  test('two args (evaluatedDate, comparisonDate)', async function (assert) {
    assert.expect(1);

    await render(hbs`{{is-same-or-before '2010-10-20' '2011-10-19'}}`);
    assert.dom(this.element).hasText('true');
  });

  test('two args with precision (evaluatedDate, comparisonDate, precision)', async function (assert) {
    assert.expect(1);

    await render(
      hbs`{{is-same-or-before '2010-12-20' '2010-12-19' precision='year'}}`,
    );
    assert.dom(this.element).hasText('true');
  });

  test('can be called with null when allow-empty is set to true', async function (assert) {
    assert.expect(1);

    this.set('date', null);
    await render(hbs`{{is-same-or-before null allow-empty=true}}`);
    assert.dom(this.element).hasText('');
  });
});
