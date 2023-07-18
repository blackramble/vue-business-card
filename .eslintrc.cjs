/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution.js');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        /* common */
        indent: [2, 4, { SwitchCase: 1 }],
        'no-unused-vars': 1,
        'comma-dangle': [2, 'never'],
        'arrow-body-style': 2,
        'global-require': 0,
        'max-len': 0,
        'no-alert': 0,
        'no-console': 0,
        'no-new': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
        'no-underscore-dangle': [0, {
            allowAfterThis: true
        }],
        camelcase: 0,
        'prefer-arrow-callback': 0,
        'func-names': 0,

        /* import */
        'import/newline-after-import': 2,
        'import/prefer-default-export': 1,
        'import/extensions': [2, 'always', {
            js: 'always',
            vue: 'always',
            ts: 'never'
        }],
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': [2, {
            optionalDependencies: ['test/unit/index.js']
        }],

        /* vue plugin */
        'vue/no-parsing-error': 0,
        'vue/no-v-html': 0,
        'vue/attributes-order': 0,
        'vue/html-indent': [1, 4],
        'vue/attribute-hyphenation': [2, 'never'],
        'vue/max-attributes-per-line': [
            1,
            {
                singleline: 1,
                multiline: 1
            }
        ],
        'vue/html-self-closing': [2, { html: { void: 'always' } }],
        'vue/singleline-html-element-content-newline': 0,
        'vue/multi-word-component-names': 0,
        'vuejs-accessibility/click-events-have-key-events': 0,
        'vuejs-accessibility/mouse-events-have-key-events': 0,
        'vuejs-accessibility/alt-text': 0,
        'vuejs-accessibility/media-has-caption': 0,
        'prefer-regex-literals': 0,
        'no-mixed-operators': 0,
        'no-continue': 0,
        'linebreak-style': 0,
        'object-shorthand': 0,
        'no-nested-ternary': 0,

        // typescript
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.ts', '.vue']
            }
        }
    }
};
