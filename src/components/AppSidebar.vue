<!--
/**
 * AppSidebar Component
 *
 * Main navigation sidebar with collapsible menu and branding.
 * Integrates with Pinia store for state management.
 *
 * Features:
 * - Collapsible sidebar with responsive behavior
 * - Dark color scheme
 * - Branding header with logo (full/narrow versions)
 * - Navigation menu from _nav.js configuration
 * - Toggle button to unfold/fold sidebar
 * - Mobile close button
 * - Fixed positioning
 *
 * State management:
 * - visible: Controls sidebar visibility (responsive)
 * - unfoldable: Controls whether sidebar stays expanded
 *
 * @component
 * @example
 * // Used in DefaultLayout.vue
 * <AppSidebar />
 */
-->
<script setup>
import { RouterLink } from 'vue-router'

import { logo } from '@/assets/brand/logo'
import { sygnet } from '@/assets/brand/sygnet'
import { AppSidebarNav } from '@/components/AppSidebarNav.js'
import { useSidebarStore } from '@/stores/sidebar.js'

/**
 * Sidebar state from Pinia store
 * Manages visibility and unfoldable state
 */
const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
    class="border-end"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <CIcon custom-class-name="sidebar-brand-full" :icon="logo" :height="32" />
          <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" :height="32" />
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()" />
    </CSidebarHeader>
    <AppSidebarNav />
    <CSidebarFooter class="border-top d-none d-lg-flex">
      <CSidebarToggler @click="sidebar.toggleUnfoldable()" />
    </CSidebarFooter>
  </CSidebar>
</template>
