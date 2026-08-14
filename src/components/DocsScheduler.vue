<script setup>
import ComponentsImg from '@/assets/images/components.webp'
</script>

<template>
  <div class="bg-warning bg-opacity-10 border border-2 border-warning rounded mb-4">
    <div class="row d-flex align-items-center p-3 px-xl-4 flex-xl-nowrap">
      <div class="col-xl-auto col-12 d-none d-xl-block p-0">
        <img
          class="img-fluid"
          :src="ComponentsImg"
          width="160px"
          height="160px"
          alt="CoreUI Scheduler hexagon"
        />
      </div>
      <div class="col-md col-12 px-lg-4">
        <h5 class="mb-1">
          CoreUI Scheduler <CBadge color="warning" class="ms-2 text-dark">ADD-ON</CBadge>
        </h5>
        Calendars that only render are easy — one people actually book in is not.
        <strong>
          Day, week, month, agenda, resource and timeline views, with drag-to-reschedule, resize,
          recurring events and full keyboard support on a headless core.
        </strong>
        It’s not bundled with this template — it’s a separately licensed add-on available for
        Bootstrap, React, Vue and Angular.
      </div>
      <div class="col-md-auto col-12 mt-3 mt-lg-0 d-flex flex-column">
        <a
          class="btn btn-warning text-nowrap"
          href="https://coreui.io/scheduler/vue/docs/getting-started/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Documentation
        </a>
        <div class="text-center my-1">or</div>
        <a
          class="btn btn-danger text-nowrap text-white"
          href="https://coreui.io/scheduler/vue/?src=free-vue-admin-template-scheduler-banner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get CoreUI Scheduler →
        </a>
      </div>
    </div>
  </div>
</template>
