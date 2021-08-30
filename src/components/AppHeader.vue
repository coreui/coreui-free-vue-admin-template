<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderBrand class="mx-auto d-lg-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="/dashboard"> Dashboard </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav class="me-4">
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-envelope-open" size="lg" />
          </CNavLink>
        </CNavItem>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <CBreadcrumb class="d-md-down-none me-auto mb-0">
        <CBreadcrumbItem
          v-for="item in breadcrumbs"
          :href="item.to"
          :active="item.to === '' ? true : false"
          :key="item"
        >
          {{ item.name }}
        </CBreadcrumbItem>
      </CBreadcrumb>
    </CContainer>
  </CHeader>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import router from '../router'
import { logo } from './../assets/brand/logo'
export default {
  name: 'AppHeader',
  components: {
    AppHeaderDropdownAccnt,
  },
  setup() {
    const upperCaseFirstChar = (string) =>
      string.substr(0, 1).toUpperCase() + string.substr(1)

    const makeCurrentRoute = () => {
      let result = [
        { to: '/', name: 'Home'}
      ]
      let path = router.currentRoute._value.path
      let temp = path.split('/')
      let to = ''
      if (temp.length <= 2) {
        result.push({ to: '', name: router.currentRoute._value.name })
      } else {
        for (let i = 1; i < temp.length - 1; i++) {
          for (let j = 1; j <= i; j++) {
            to += `/${temp[j]}`
          }
          result.push({ to: to, name: upperCaseFirstChar(temp[i]) })
        }
        result.push({ to: '', name: router.currentRoute._value.name })
      }
      return result
    }

    const breadcrumbs = ref([])

    onBeforeRouteUpdate(() => {
      breadcrumbs.value = makeCurrentRoute()
    })

    onMounted(() => {
      breadcrumbs.value = makeCurrentRoute()
    })

    return {
      breadcrumbs,
      logo,
    }
  },
}
</script>
