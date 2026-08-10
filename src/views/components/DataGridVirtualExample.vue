<script setup>
import { ref } from 'vue'
import { CDataGrid } from '@coreui/vue-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']
const statuses = ['active', 'pending', 'banned']

const buildItems = () =>
  Array.from({ length: 100000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length],
      status: statuses[i % statuses.length],
      score: (i * 37) % 1000,
    }
  })

const items = ref(buildItems())

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name', width: 200 },
  { key: 'email', label: 'Email', width: 260 },
  { key: 'role', label: 'Role', width: 110 },
  { key: 'status', label: 'Status', width: 110 },
  { key: 'score', label: 'Score', width: 90 },
]
</script>

<template>
  <CDataGrid
    :items="items"
    :columns="columns"
    :item-key="(item) => String(item.id)"
    column-filters
    global-filter
    row-selection
  />
</template>
