<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/chip-set/" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Set</strong> <small>Basic chip set</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Group multiple <code>CChip</code> components inside <code>CChipSet</code> to get roving
            keyboard navigation between them for free.
          </p>
          <DocsExample href="components/chip-set/#basic-chip-set">
            <CChipSet aria-label="Fruits">
              <CChip value="apple">Apple</CChip>
              <CChip value="banana">Banana</CChip>
              <CChip value="cherry">Cherry</CChip>
              <CChip value="date">Date</CChip>
            </CChipSet>
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Set</strong> <small>Selectable chips</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Set <code>selectable</code> on <code>CChipSet</code> to make every chip in the set
            selectable. With the default <code>selectionMode</code> of <code>"multiple"</code>, any
            number of chips can be active at once — useful for filters. Bind
            <code>v-model:selected</code> to control which values are selected.
          </p>
          <DocsExample href="components/chip-set/#selectable-chips">
            <CChipSet selectable v-model:selected="selectedTeams" aria-label="Teams">
              <CChip value="design">Design</CChip>
              <CChip value="development">Development</CChip>
              <CChip value="marketing">Marketing</CChip>
              <CChip value="sales">Sales</CChip>
            </CChipSet>
          </DocsExample>
          <p class="text-body-secondary small">
            Use <code>selectionMode="single"</code> to allow only one selected chip at a time —
            selecting a chip deselects its siblings. This is useful for choice chips.
          </p>
          <DocsExample href="components/chip-set/#single-selection">
            <CChipSet
              selectable
              selectionMode="single"
              v-model:selected="selectedSize"
              aria-label="Size"
            >
              <CChip value="small">Small</CChip>
              <CChip value="medium">Medium</CChip>
              <CChip value="large">Large</CChip>
            </CChipSet>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Set</strong> <small>Filter chips</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add <code>filter</code> to turn the chips into filter chips. A check icon is shown on
            each selected chip and removed when it is deselected. <code>filter</code> implies
            <code>selectable</code>, so you don't need to set both.
          </p>
          <DocsExample href="components/chip-set/#filter-chips">
            <CChipSet filter v-model:selected="selectedDepartments" aria-label="Departments">
              <CChip value="design">Design</CChip>
              <CChip value="development">Development</CChip>
              <CChip value="marketing">Marketing</CChip>
              <CChip value="sales">Sales</CChip>
            </CChipSet>
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Set</strong> <small>Removable chips</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Set <code>removable</code> to add a remove button to every chip. When a chip is removed,
            focus moves to a neighboring chip. Pass the chip list through the <code>chips</code> prop
            with <code>v-model:chips</code> to let the chip set own the list and remove chips itself.
          </p>
          <DocsExample href="components/chip-set/#removable-chips">
            <CChipSet removable v-model:chips="removableChips" aria-label="Removable filters" />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { ref } from 'vue'

const selectedTeams = ref(['development', 'sales'])
const selectedSize = ref(['small'])
const selectedDepartments = ref(['development', 'sales'])
const removableChips = ref([
  'Filter one',
  'Filter two',
  { value: 'filter-three', label: 'Filter three', disabled: true },
])
</script>
