<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/accordion.html" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Accordion</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Click the accordions below to expand/collapse the accordion content.
          </p>
          <DocsExample href="components/accordion.html">
            <CAccordion>
              <CAccordionItem :item-key="1">
                <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="2">
                <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="3">
                <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
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
          <p class="text-body-secondary small">
            Add <code>flush</code> to remove the default
            <code>background-color</code>, some borders, and some rounded
            corners to render accordions edge-to-edge with their parent
            container.
          </p>
          <DocsExample href="components/accordion.html#flush">
            <CAccordion flush>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Accordion</strong> <small>Always open</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add <code>always-open</code> property to make accordion items stay
            open when another item is opened.
          </p>
          <DocsExample href="components/accordion.html#always-open">
            <CAccordion :active-item-key="2" always-open>
              <CAccordionItem :item-key="1">
                <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="2">
                <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="3">
                <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
