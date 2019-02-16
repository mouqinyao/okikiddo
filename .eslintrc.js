module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
      },
    'env': {
        'jest': true
    },
    'plugins': [
        'react',
        'promise'
    ],
    'rules': {
        'indent': [2, 4],
        'comma-dangle': 0,
        'id-length': 0,
        'new-cap': 0,
        'max-len': 0,
        'arrow-body-style': 0,
        'no-unused-vars': 2,
        'no-restricted-imports': [2, 'lodash', 'd3'],
        'prefer-const': 2,
        'object-shorthand': 2,
        'padded-blocks': 2,
        'prefer-arrow-callback': 1,
        'no-underscore-dangle': 0,
        'class-methods-use-this': [0],
        'import/extensions': 0,
        'import/no-unresolved': [2, { 'ignore': ['react', 'remix-*', 'classnames'] }],
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'jsx-a11y/href-no-hash': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'promise/no-native': 2,
        'promise/no-nesting': 1,
        'promise/no-return-wrap': 2,
        'promise/avoid-new': 2,
        'react/forbid-prop-types': 1,
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-key': 2,
        'react/jsx-sort-props': 0,
        'react/jsx-no-comment-textnodes': 2,
        'react/no-danger': 2,
        'react/no-unused-prop-types': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': [2, { 'ignorePureComponents': true }],
        'react/require-default-props': 2,
        'react/require-render-return': 2,
        'react/sort-comp': 1,
        'react/sort-prop-types': 1,
        'react/jsx-wrap-multilines': 1
    },
    'globals': {
        'fetch': false
    }
}