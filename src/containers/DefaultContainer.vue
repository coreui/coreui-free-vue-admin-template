<template>
  <div class="app">
    <TheHeader/>
    <div class="app-body">
      <TheSidebar/>
      <main class="main">
        <CBreadcrumbRouter/>
        <CContainer fluid>
          <router-view></router-view>
        </CContainer>
      </main>
      <TheAside/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheAside from './TheAside'
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'full',
  components: {
    TheAside,
    TheSidebar,
    TheHeader,
    TheFooter
  }
}
</script>
