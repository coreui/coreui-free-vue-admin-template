<template>
  <div class="c-app c-default-layout">
    <TheHeader/>
    <div class="c-body">
      <TheSidebar/>
      <main class="c-main">
        <CBreadcrumbRouter/>
        <CContainer fluid>
          <transition name="fade">
            <router-view></router-view>
          </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
