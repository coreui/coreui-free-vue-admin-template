<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            In the example below, we take a typical card component and recreate
            it with placeholders applied to create a "loading card". Size and
            proportions are the same between the two.
          </p>
          <DocsExample href="components/placeholder.html">
            <div class="d-flex justify-content-around">
              <CCard style="width: 18rem">
                <CCardImage orientation="top" :src="VueImg" />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CCardText>
                  <CButton color="primary" href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
              <CCard style="width: 18rem">
                <CCardImage
                  component="svg"
                  orientation="top"
                  width="100%"
                  height="162"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title
                  ><rect width="100%" height="100%" fill="#868e96"></rect>
                </CCardImage>
                <CCardBody>
                  <CCardTitle v-c-placeholder="{ animation: 'glow', xs: 7 }">
                    <CPlaceholder :xs="6" />
                  </CCardTitle>
                  <CCardText v-c-placeholder="{ animation: 'glow' }">
                    <CPlaceholder :xs="7" />
                    <CPlaceholder :xs="4" />
                    <CPlaceholder :xs="4" />
                    <CPlaceholder :xs="6" />
                    <CPlaceholder :xs="8" />
                  </CCardText>
                  <CButton
                    v-c-placeholder="{ xs: 6 }"
                    color="primary"
                    aria-hidden="true"
                    disabled
                    href="#"
                    tabindex="-1"
                  ></CButton>
                </CCardBody>
              </CCard>
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong>
        </CCardHeader>
        <CCardBody>
          <p>
            Create placeholders with the
            <code>&lt;CPlaceholder&gt;</code> component and a grid column propx
            (e.g., <code>:xs="6"</code>) to set the <code>width</code>. They can
            replace the text inside an element or be added as a modifier class
            to an existing component.
          </p>
          <DocsExample href="components/placeholder.html">
            <p aria-hidden="true">
              <CPlaceholder :xs="6" />
            </p>
            <CButton
              v-c-placeholder="{ xs: 4 }"
              color="primary"
              aria-hidden="true"
              disabled
              href="#"
              tabindex="-1"
            ></CButton>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong> <small> Width</small>
        </CCardHeader>
        <CCardBody>
          <p>
            You can change the <code>width</code> through grid column classes,
            width utilities, or inline styles.
          </p>
          <DocsExample href="components/placeholder.html#width">
            <CPlaceholder :xs="6" />
            <CPlaceholder class="w-75" />
            <CPlaceholder style="width: 30%" />
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong> <small> Color</small>
        </CCardHeader>
        <CCardBody>
          <p>
            By default, the <code>&lt;CPlaceholder&gt;</code> uses
            <code>currentColor</code>. This can be overridden with a custom
            color or utility class.
          </p>
          <DocsExample href="components/placeholder.html#color">
            <CPlaceholder :xs="12" />

            <CPlaceholder color="primary" :xs="12" />
            <CPlaceholder color="secondary" :xs="12" />
            <CPlaceholder color="success" :xs="12" />
            <CPlaceholder color="danger" :xs="12" />
            <CPlaceholder color="warning" :xs="12" />
            <CPlaceholder color="info" :xs="12" />
            <CPlaceholder color="light" :xs="12" />
            <CPlaceholder color="dark" :xs="12" />
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong> <small> Sizing</small>
        </CCardHeader>
        <CCardBody>
          <p>
            The size of <code>&lt;CPlaceholder&gt;</code>s are based on the
            typographic style of the parent element. Customize them with
            <code>size</code> prop: <code>lg</code>, <code>sm</code>, or
            <code>xs</code>.
          </p>
          <DocsExample href="components/placeholder.html#color">
            <CPlaceholder :xs="12" size="lg" />
            <CPlaceholder :xs="12" />
            <CPlaceholder :xs="12" size="sm" />
            <CPlaceholder :xs="12" size="xs" />
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Placeholder</strong> <small> Animation</small>
        </CCardHeader>
        <CCardBody>
          <p>
            Animate placeholders with <code>animation="glow"</code> or
            <code>animation="wave"</code> to better convey the perception of
            something being <em>actively</em> loaded.
          </p>
          <DocsExample href="components/placeholder.html#animation">
            <CPlaceholder component="p" animation="glow">
              <CPlaceholder :xs="12" />
            </CPlaceholder>

            <CPlaceholder component="p" animation="wave">
              <CPlaceholder :xs="12" />
            </CPlaceholder>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import VueImg from '@/assets/images/vue.jpg'
export default {
  name: 'Placeholders',
  setup() {
    return {
      VueImg,
    }
  },
}
</script>
