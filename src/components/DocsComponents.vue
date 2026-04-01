<script setup>
const props = defineProps({
  href: String,
})

import ComponentsImg from '@/assets/images/components.webp'
</script>

<template>
  <div class="bg-primary bg-opacity-10 border border-2 border-primary rounded mb-4">
    <div class="row d-flex align-items-center p-3 px-xl-4 flex-xl-nowrap">
      <div class="col-xl-auto col-12 d-none d-xl-block p-0">
        <img
          class="img-fluid"
          :src="ComponentsImg"
          width="160px"
          height="160px"
          alt="CoreUI PRO hexagon"
        />
      </div>
      <div class="col-md col-12 px-lg-4">
        Our Admin Panel isn’t just a mix of third-party components. It’s
        <strong>
          the only open-source Vue dashboard built on a professional, enterprise-grade UI Components
          Library
        </strong>
        . This component is part of this library, and we present only the basic usage of it here. To
        explore extended examples, detailed API documentation, and customization options, refer to
        our docs.
      </div>
      <div class="col-md-auto col-12 mt-3 mt-lg-0 d-flex flex-column">
        <a
          class="btn btn-primary text-nowrap text-white"
          :href="`https://coreui.io/vue/docs/${props.href}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Documentation
        </a>
        <div class="text-center my-1">or</div>
        <a
          class="btn btn-danger text-nowrap text-white"
          href="https://coreui.io/pricing/?framework=vue&src=free-vue-admin-template-docs-banner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get CoreUI PRO →
        </a>
      </div>
    </div>
  </div>
</template>
