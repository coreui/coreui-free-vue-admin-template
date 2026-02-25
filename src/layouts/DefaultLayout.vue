<!--
/**
 * DefaultLayout Component
 *
 * Main application layout wrapper that composes the standard admin interface.
 * Provides the structural foundation for all authenticated pages.
 *
 * Layout structure:
 * - AppSidebar: Collapsible navigation sidebar (left)
 * - AppHeader: Top navigation bar with breadcrumbs and user menu
 * - Main content area: Router view for page components
 * - AppFooter: Footer with version and links
 *
 * The wrapper uses flexbox to ensure footer stays at bottom
 * with growing content area in between.
 *
 * @component
 * @example
 * // Used in router/index.js
 * {
 *   path: '/',
 *   component: DefaultLayout,
 *   children: [
 *     { path: '/dashboard', component: Dashboard }
 *   ]
 * }
 */
-->
<script setup>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1">
        <CContainer class="px-4" lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
