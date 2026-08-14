<script setup>
import { CScheduler } from '@coreui/vue-scheduler'
import '@coreui/scheduler/dist/css/scheduler.css'

import { resourceEvents, resources } from './_data'
</script>

<template>
  <CScheduler
    view="resource"
    :day-start-hour="8"
    :day-end-hour="18"
    :resources="resources"
    :events="resourceEvents"
  />
</template>
