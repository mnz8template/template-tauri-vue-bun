/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}',
        // ESLint v9.0.0 CLI Flag Changes --ext
        // https://eslint.org/docs/latest/use/configure/migration-guide#--ext
        "**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
