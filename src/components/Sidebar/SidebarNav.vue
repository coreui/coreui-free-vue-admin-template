<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
    <ul class="nav">
      <template v-for="(item, index) in navItems">
        <template v-if="item.title">
          <SidebarNavTitle :key="index" :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
        </template>
        <template v-else-if="item.divider">
          <SidebarNavDivider :key="index" :classes="item.class"/>
        </template>
        <template v-else-if="item.label">
          <SidebarNavLabel :key="index" :name="item.name" :url="item.url" :icon="item.icon" :label="item.label" :classes="item.class"/>
        </template>
        <template v-else>
          <template v-if="item.children">
            <!-- First level dropdown -->
            <SidebarNavDropdown :key="index" :name="item.name" :url="item.url" :icon="item.icon">
              <template v-for="(childL1, index1) in item.children">
                <template v-if="childL1.children">
                  <!-- Second level dropdown -->
                  <SidebarNavDropdown :key="index1" :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                    <li :key="index2" class="nav-item" v-for="(childL2, index2) in childL1.children">
                      <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                    </li>
                  </SidebarNavDropdown>
                </template>
                <template v-else>
                  <SidebarNavItem :key="index1" :classes="item.class">
                    <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                  </SidebarNavItem>
                </template>
              </template>
            </SidebarNavDropdown>
          </template>
          <template v-else>
            <SidebarNavItem :key="index" :classes="item.class">
              <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
            </SidebarNavItem>
          </template>
        </template>
      </template>
    </ul>
    <slot></slot>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
import SidebarNavDivider from './SidebarNavDivider'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from './SidebarNavItem'
import SidebarNavLabel from './SidebarNavLabel'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'SidebarNav',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel,
    VuePerfectScrollbar
  },
  data () {
    return {
      psSettings: {
        maxScrollbarLength: 200
      }
    }
  },
  methods: {
    scrollHandle (evt) {
      // console.log(evt)
    }
  }
}
</script>

<style scoped lang="css">
  .scroll-area {
    position: relative;
    height: 100%;
    margin: auto;
  }
</style>
