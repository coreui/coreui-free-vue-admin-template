<template>
  <CRow>
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
          <strong>Vue Collapse</strong> <small> Horizontal</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            The collapse plugin also supports horizontal collapsing. Add the
            <code>horizontal</code> property to transition the
            <code>width</code> instead of <code>height</code> and set a
            <code>width</code> on the immediate child element.
          </p>
          <DocsExample href="components/collapse.html#horizontal">
            <CButton
              class="mb-3"
              color="primary"
              aria-expanded="{visible}"
              aria-controls="collapseWidthExample"
              @click="visibleHorizontal = !visibleHorizontal"
              >Button</CButton
            >
            <div style="min-height: 120px">
              <CCollapse horizontal :visible="visibleHorizontal">
                <CCard style="width: 300px">
                  <CCardBody>
                    This is some placeholder content for a horizontal collapse.
                    It's hidden by default and shown when triggered.
                  </CCardBody>
                </CCard>
              </CCollapse>
            </div>
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
    const visibleHorizontal = ref(false)
    return {
      visible,
      visibleA,
      visibleB,
      visibleHorizontal,
    }
  },
}
</script>
