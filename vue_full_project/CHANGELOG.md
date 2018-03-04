## [vue](./README.md) version `changelog`

##### `v1.0.10`
- fix: `className` -> `class`
- refactor: `<b-input-group-prepend>`
- refactor: `<b-input-group-append>`
- refactor: `<b-input-group-text>`
- refactor: remove `<b-input-group-button>`
- test: initial `Dashboard` unit test added
- update: bootstrap-vue to `2.0.0-rc.1`
- chore: dependencies update

###### `v1.0.9`
- refactor: Sidebar structure
- test: initial e2e test added
- chore: dependencies update

###### `v1.0.8`
- update: vue to `2.5.13`
- update: Bootstrap to `4.0.0-beta.3`
- update: bootstrap-vue to `1.4.0`
- chore: dependencies update
- refactor: `<b-table>` use the prop `responsive="sm"` instead of `class="table-responsive-sm"`
- fix: `Vue warn:` Do not use built-in or reserved HTML elements as component id: (header, aside, footer, table)
- feature: some Bootstrap4 components added
- temp tweaks(b4 beta3): `InputGroupAddon` and `InputGroupButton` 
- refactor(checkboxes, radios, labels): temp tweaks 
- feat: mobile sidebar link click closes the sidebar [#18](https://github.com/mrholek/CoreUI-Vue/pull/18)

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

