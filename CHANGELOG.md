## [vue](./README.md) version `changelog`

###### `v1.0.6`
- refactor: raw html to `b-row`, `b-col`, `b-card`, `b-button` components
- fix: Cards.vue: change `variant="accent-` to `class="card-accent-`
- refactor: Modal's ok-button variants
- refactor: forms with validation feedback
- update: bootstrap-vue to `1.1.0`
- update: to vue: `2.5.6`

###### `v1.0.5`
- update: bootstrap-vue to `1.0.x`
- fix: use `<b-form-radio-group>` instead of `<b-form-radio>`  **[breaking change](https://bootstrap-vue.js.org/docs/components/form-radios)** :fire:
- refactor: `<b-table>` bootstrap-vue component in `Tables` #24
- refactor: extract `Table` component from `Tables`
- refactor: `<b-table>` bootstrap-vue component in `Switches` #24
- fix: add `table-responsive-sm` class to `Tables` #26
- refactor: use component `<b-navbar-nav>` instead of deprecated prop `is-nav-bar`
- fix: `b-progress` `height` property workaround (bootstrap-vue)
- chore: dependencies update

###### `v1.0.4`
- refactor: import Bootstrap 4 SCSS files from node_modules
- fix: callouts styles

###### `v1.0.3`
- update: Bootstrap version to `4.0.0-beta.2`
- update: vue-chartjs to `3.0.0` **[breaking change](https://github.com/apertureless/vue-chartjs/releases/tag/v3.0.0)** :fire:

###### `v1.0.2`
- update: to vue: `^2.5.x`
- update: bootstrap-vue to `1.0.0-beta.9`
- refactor: (vue `v2.5.x`) deprecated `<template scope="props">` replace with `<div slot-scope="props">`
- refactor: `HeaderDropdown` component added to `Header`
- refactor: `b-badge` component added (bootstrap-vue)
- chore: `package.json` project dependencies update

