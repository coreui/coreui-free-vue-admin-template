<script setup>
import { CScheduler } from '@coreui/vue-scheduler'
import '@coreui/scheduler/dist/css/scheduler.css'

import { calendarEvents } from './_data'

const businessHours = { daysOfWeek: [1, 2, 3, 4, 5], startHour: 9, endHour: 17 }
</script>

<template>
  <CScheduler
    view="month"
    :month-max-events-per-day="3"
    :business-hours="businessHours"
    :events="calendarEvents"
  />
</template>
