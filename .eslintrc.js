// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint'
  },
  env: {
      browser: true
  },
  extends: ['plugin:vue/recommended', 'standard'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-multi-spaces': 1,
      eqeqeq: 1,
      'arrow-spacing': 1,
      'no-unused-vars': 1,
      'no-param-reassign': 1,
      'one-var': 1,
      'no-cond-assign': 1,
      'consistent-return': 1,
      'prefer-const': 1,
      'spaced-comment': 1,
      quotes: ['warn', 'single'],
      indent: [1, 4],
      'space-before-function-paren': 0,
      'space-unary-ops': 1,
      'eol-last': 1,
      'comma-dangle': 1,
      'max-len': [1, 125],
      'object-curly-spacing': [1, 'always'],
      'object-shorthand': 2,
      'no-extra-semi': 2,
      semi: [1, 'always']
  }
};
