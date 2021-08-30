<template>
  <CRow>
    <CCol :xs="12">
      <DocsCallout name="Accordion" href="components/accordion" />
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Accordion</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Click the accordions below to expand/collapse the accordion content.
          </p>
          <DocsExample href="components/accordion">
            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="activeKey !== 1"
                    @click="
                      () => {
                        activeKey === 1 ? (activeKey = 0) : (activeKey = 1)
                      }
                    "
                  >
                    Accordion Item #1
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="activeKey === 1">
                  <CAccordionBody>
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="activeKey !== 2"
                    @click="
                      () => {
                        activeKey === 2 ? (activeKey = 0) : (activeKey = 2)
                      }
                    "
                  >
                    Accordion Item #2
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="activeKey === 2">
                  <CAccordionBody>
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="activeKey !== 3"
                    @click="
                      () => {
                        activeKey === 3 ? (activeKey = 0) : (activeKey = 3)
                      }
                    "
                  >
                    Accordion Item #3
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="activeKey === 3">
                  <CAccordionBody>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
            </CAccordion>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Accordion</strong> <small>Flush</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>flush</code> to remove the default
            <code>background-color</code>, some borders, and some rounded
            corners to render accordions edge-to-edge with their parent
            container.
          </p>
          <DocsExample href="components/accordion#flush">
            <CAccordion flush>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="flushActiveKey !== 1"
                    @click="
                      () => {
                        flushActiveKey === 1
                          ? (flushActiveKey = 0)
                          : (flushActiveKey = 1)
                      }
                    "
                  >
                    Accordion Item #1
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="flushActiveKey === 1">
                  <CAccordionBody>
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="flushActiveKey !== 2"
                    @click="
                      () => {
                        flushActiveKey === 2
                          ? (flushActiveKey = 0)
                          : (flushActiveKey = 2)
                      }
                    "
                  >
                    Accordion Item #2
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="flushActiveKey === 2">
                  <CAccordionBody>
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader>
                  <CAccordionButton
                    :collapsed="flushActiveKey !== 3"
                    @click="
                      () => {
                        flushActiveKey === 3
                          ? (flushActiveKey = 0)
                          : (flushActiveKey = 3)
                      }
                    "
                  >
                    Accordion Item #3
                  </CAccordionButton>
                </CAccordionHeader>
                <CAccordionCollapse :visible="flushActiveKey === 3">
                  <CAccordionBody>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </CAccordionBody>
                </CAccordionCollapse>
              </CAccordionItem>
            </CAccordion>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Accordion',
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
}
</script>
