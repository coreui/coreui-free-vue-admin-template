<script setup>
import { CScheduler } from '@coreui/vue-scheduler'
import '@coreui/scheduler/dist/css/scheduler.css'

import { resources, timelineEvents } from './_data'
</script>

<template>
  <CScheduler
    view="timeline"
    :timeline-days="3"
    :timeline-hour-width="13"
    :resources="resources"
    :events="timelineEvents"
  />
</template>
