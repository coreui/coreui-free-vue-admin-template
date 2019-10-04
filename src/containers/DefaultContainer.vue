<template>
  <div class="app">
    <DefaultHeader/>
    <div class="app-body">
      <DefaultLeftSidebar />
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <DefaultFooter/>
  </div>
</template>

<script>
import { Aside as AppAside, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'
import DefaultLeftSidebar from './DefaultLeftSidebar'
export default {
  name: 'DefaultContainer',
  components: {
    AppAside,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    DefaultFooter,
    DefaultHeader,
    DefaultLeftSidebar
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
