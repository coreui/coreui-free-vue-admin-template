<template>
  <CRow>
    <CCol :xs="12">
      <DocsCallout name="Collapse" href="components/collapse.html" />
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Collapse</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            You can use a link or a button component.
          </p>
          <DocsExample href="components/collapse.html#example">
            <CButton color="primary" href="#" @click="visible = !visible"
              >Link</CButton
            >
            <CButton color="primary" @click="visible = !visible"
              >Button</CButton
            >
            <CCollapse :visible="visible">
              <CCard class="mt-3">
                <CCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CCardBody>
              </CCard>
            </CCollapse>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Collapse</strong> <small> multi target</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            A <code>&lt;CButton&gt;</code> can show and hide multiple elements.
          </p>
          <h4 class="mt-4">Toggle multiple targets</h4>
          <DocsExample href="components/collapse.html#multiple-targets">
            <CButton color="primary" @click="visibleA = !visibleA"
              >Toggle first element</CButton
            >
            <CButton color="primary" @click="visibleB = !visibleB"
              >Toggle second element</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  visibleA = !visibleA
                  visibleB = !visibleB
                }
              "
            >
              Toggle both elements
            </CButton>
            <CRow>
              <CCol :xs="6">
                <CCollapse :visible="visibleA">
                  <CCard class="mt-3">
                    <CCardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </CCol>
              <CCol :xs="6">
                <CCollapse :visible="visibleB">
                  <CCard class="mt-3">
                    <CCardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </CCol>
            </CRow>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Collapse',
  setup() {
    const visible = ref(false)
    const visibleA = ref(false)
    const visibleB = ref(false)
    return {
      visible,
      visibleA,
      visibleB,
    }
  },
}
</script>
