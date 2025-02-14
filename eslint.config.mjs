import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/', 'eslint.config.mjs'] },
  ...eslintPluginVue.configs['flat/essential'],
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
]
