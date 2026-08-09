<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/search-button/" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Search Button</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Use <code>CSearchButton</code> as the entry point for a controlled search dialog. Listen
            for <code>@trigger</code> — emitted on click or on the keyboard shortcut — to open a
            <code>CModal</code> you own.
          </p>
          <DocsExample href="components/search-button/#basic-example">
            <CSearchButton
              @trigger="basicModalVisible = true"
              aria-label="Open search dialog"
              aria-controls="searchButtonBasicExample"
            />
            <CModal
              id="searchButtonBasicExample"
              :visible="basicModalVisible"
              @close="
                () => {
                  basicModalVisible = false
                }
              "
              aria-labelledby="searchButtonBasicExampleTitle"
            >
              <CModalHeader
                dismiss
                @close="
                  () => {
                    basicModalVisible = false
                  }
                "
              >
                <CModalTitle id="searchButtonBasicExampleTitle" class="w-100">
                  <CFormInput type="search" placeholder="Search" aria-label="Search" />
                </CModalTitle>
              </CModalHeader>
              <CModalBody>
                <p class="text-body-secondary small mb-2">Recent searches</p>
                <CListGroup flush>
                  <CListGroupItem
                    as="button"
                    type="button"
                    class="d-flex justify-content-between align-items-center"
                  >
                    CoreUI components overview
                    <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
                  </CListGroupItem>
                  <CListGroupItem
                    as="button"
                    type="button"
                    class="d-flex justify-content-between align-items-center"
                  >
                    Modal dialog examples
                    <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
                  </CListGroupItem>
                  <CListGroupItem
                    as="button"
                    type="button"
                    class="d-flex justify-content-between align-items-center"
                  >
                    Sidebar navigation customization
                    <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
                  </CListGroupItem>
                </CListGroup>
              </CModalBody>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Search Button</strong> <small>Custom shortcut</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Configure <code>shortcut</code> to match your command palette or product conventions, and
            customize the <code>placeholder</code> text.
          </p>
          <DocsExample href="components/search-button/#custom-shortcut">
            <CSearchButton
              placeholder="Command palette"
              shortcut="meta+i,ctrl+i"
              @trigger="triggerCount++"
              aria-label="Open command palette"
            />
            <CAlert color="info" class="mt-3 mb-0">
              Triggered {{ triggerCount }} {{ triggerCount === 1 ? 'time' : 'times' }} with click or
              shortcut.
            </CAlert>
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Search Button</strong> <small>Launch an offcanvas</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            <code>CSearchButton</code> is a trigger only — pair it with a <code>COffcanvas</code>
            instead of a modal when you want a docked panel for quick navigation or command results.
          </p>
          <DocsExample href="components/search-button/#launch-an-offcanvas">
            <CSearchButton
              @trigger="offcanvasVisible = true"
              shortcut="meta+shift+o,ctrl+shift+o"
              aria-label="Open search panel"
              aria-controls="searchButtonOffcanvasExample"
            />
            <COffcanvas
              id="searchButtonOffcanvasExample"
              placement="end"
              :visible="offcanvasVisible"
              @hide="
                () => {
                  offcanvasVisible = false
                }
              "
            >
              <COffcanvasHeader>
                <COffcanvasTitle>Search panel</COffcanvasTitle>
                <CCloseButton
                  class="text-reset"
                  @click="
                    () => {
                      offcanvasVisible = false
                    }
                  "
                />
              </COffcanvasHeader>
              <COffcanvasBody>
                <CFormInput type="search" class="mb-3" placeholder="Search..." aria-label="Search in panel" />
                <p class="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
              </COffcanvasBody>
            </COffcanvas>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { ref } from 'vue'

const basicModalVisible = ref(false)
const triggerCount = ref(0)
const offcanvasVisible = ref(false)
</script>
