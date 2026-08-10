<!--
/**
 * AppHeader Component
 *
 * Top navigation bar with breadcrumbs, navigation links, and user menu.
 * Features dynamic shadow effect on scroll and theme switcher.
 *
 * Features:
 * - Sticky positioning
 * - Sidebar toggle button (mobile/desktop)
 * - Horizontal navigation links (desktop only)
 * - Icon buttons (notifications, tasks, messages)
 * - Theme switcher dropdown (light/dark/auto)
 * - User account dropdown menu
 * - Breadcrumb navigation
 * - Dynamic shadow on scroll
 *
 * @component
 * @example
 * // Used in DefaultLayout.vue
 * <AppHeader />
 */
-->
<script setup>
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'

import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import AppHeaderDropdownAccnt from '@/components/AppHeaderDropdownAccnt.vue'
import { useSidebarStore } from '@/stores/sidebar.js'

/**
 * Dynamic header CSS classes
 * Adds shadow when page is scrolled
 */
const headerClassNames = ref('mb-4 p-0')
const searchModalVisible = ref(false)
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')

/**
 * Sidebar state from Pinia store
 * Used to toggle sidebar visibility
 */
const sidebar = useSidebarStore()

/**
 * Add scroll listener to toggle shadow effect
 * Shadow appears when user scrolls down
 */
onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})
</script>

<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderToggler @click="sidebar.toggleVisible()" style="margin-inline-start: -14px">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CSearchButton
        class="ms-2"
        @trigger="searchModalVisible = true"
        aria-label="Open search dialog"
        aria-controls="headerSearchModal"
      />
      <CModal
        id="headerSearchModal"
        :visible="searchModalVisible"
        @close="
          () => {
            searchModalVisible = false
          }
        "
        aria-labelledby="headerSearchModalTitle"
      >
        <CModalHeader
          dismiss
          @close="
            () => {
              searchModalVisible = false
            }
          "
        >
          <CModalTitle id="headerSearchModalTitle" class="w-100">
            <CFormInput type="search" placeholder="Search" aria-label="Search" />
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p class="text-body-secondary small mb-2">Recent searches</p>
          <CListGroup flush>
            <CListGroupItem as="a" href="#">CoreUI components overview</CListGroupItem>
            <CListGroupItem as="a" href="#">Modal dialog examples</CListGroupItem>
            <CListGroupItem as="a" href="#">Sidebar navigation customization</CListGroupItem>
          </CListGroup>
        </CModalBody>
      </CModal>
      <CHeaderNav class="ms-auto">
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon="cil-envelope-open" size="lg" />
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CIcon v-if="colorMode === 'dark'" icon="cil-moon" size="lg" />
            <CIcon v-else-if="colorMode === 'light'" icon="cil-sun" size="lg" />
            <CIcon v-else icon="cil-contrast" size="lg" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              :active="colorMode === 'light'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('light')"
            >
              <CIcon class="me-2" icon="cil-sun" size="lg" /> Light
            </CDropdownItem>
            <CDropdownItem
              :active="colorMode === 'dark'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('dark')"
            >
              <CIcon class="me-2" icon="cil-moon" size="lg" /> Dark
            </CDropdownItem>
            <CDropdownItem
              :active="colorMode === 'auto'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('auto')"
            >
              <CIcon class="me-2" icon="cil-contrast" size="lg" /> Auto
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>
