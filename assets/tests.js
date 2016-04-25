define('meta-generator/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('meta-generator/tests/components/meta-forms.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/meta-forms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/meta-forms.js should pass jshint.\ncomponents/meta-forms.js: line 5, col 9, \'$\' is not defined.\ncomponents/meta-forms.js: line 6, col 9, \'$\' is not defined.\ncomponents/meta-forms.js: line 9, col 9, \'$\' is not defined.\ncomponents/meta-forms.js: line 12, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 13, col 29, \'$\' is not defined.\ncomponents/meta-forms.js: line 14, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 16, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 17, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 19, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 20, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 24, col 9, \'$\' is not defined.\ncomponents/meta-forms.js: line 27, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 28, col 39, \'$\' is not defined.\ncomponents/meta-forms.js: line 29, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 31, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 32, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 34, col 13, \'$\' is not defined.\ncomponents/meta-forms.js: line 35, col 13, \'$\' is not defined.\n\n18 errors');
  });
});
define('meta-generator/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('meta-generator/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('meta-generator/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'meta-generator/tests/helpers/start-app', 'meta-generator/tests/helpers/destroy-app'], function (exports, _qunit, _metaGeneratorTestsHelpersStartApp, _metaGeneratorTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _metaGeneratorTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _metaGeneratorTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('meta-generator/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('meta-generator/tests/helpers/resolver', ['exports', 'meta-generator/resolver', 'meta-generator/config/environment'], function (exports, _metaGeneratorResolver, _metaGeneratorConfigEnvironment) {

  var resolver = _metaGeneratorResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _metaGeneratorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _metaGeneratorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('meta-generator/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('meta-generator/tests/helpers/start-app', ['exports', 'ember', 'meta-generator/app', 'meta-generator/config/environment'], function (exports, _ember, _metaGeneratorApp, _metaGeneratorConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _metaGeneratorConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _metaGeneratorApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('meta-generator/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('meta-generator/tests/integration/components/meta-forms-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('meta-forms', 'Integration | Component | meta forms', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'meta-forms', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'meta-forms', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('meta-generator/tests/integration/components/meta-forms-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/meta-forms-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meta-forms-test.js should pass jshint.');
  });
});
define('meta-generator/tests/models/facebook-meta.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/facebook-meta.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/facebook-meta.js should pass jshint.');
  });
});
define('meta-generator/tests/models/google-plus-meta.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/google-plus-meta.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/google-plus-meta.js should pass jshint.');
  });
});
define('meta-generator/tests/models/standard-meta.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/standard-meta.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/standard-meta.js should pass jshint.');
  });
});
define('meta-generator/tests/models/twitter-meta.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/twitter-meta.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/twitter-meta.js should pass jshint.');
  });
});
define('meta-generator/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('meta-generator/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('meta-generator/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('meta-generator/tests/test-helper', ['exports', 'meta-generator/tests/helpers/resolver', 'ember-qunit'], function (exports, _metaGeneratorTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_metaGeneratorTestsHelpersResolver['default']);
});
define('meta-generator/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('meta-generator/tests/unit/models/facebook-meta-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('facebook-meta', 'Unit | Model | facebook meta', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('meta-generator/tests/unit/models/facebook-meta-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/facebook-meta-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/facebook-meta-test.js should pass jshint.');
  });
});
define('meta-generator/tests/unit/models/google-plus-meta-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('google-plus-meta', 'Unit | Model | google plus meta', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('meta-generator/tests/unit/models/google-plus-meta-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/google-plus-meta-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/google-plus-meta-test.js should pass jshint.');
  });
});
define('meta-generator/tests/unit/models/standard-meta-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('standard-meta', 'Unit | Model | standard meta', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('meta-generator/tests/unit/models/standard-meta-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/standard-meta-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/standard-meta-test.js should pass jshint.');
  });
});
define('meta-generator/tests/unit/models/twitter-meta-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('twitter-meta', 'Unit | Model | twitter meta', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('meta-generator/tests/unit/models/twitter-meta-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/twitter-meta-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/twitter-meta-test.js should pass jshint.');
  });
});
define('meta-generator/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('meta-generator/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('meta-generator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map