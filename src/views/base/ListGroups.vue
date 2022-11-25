<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            The default list group is an unordered list with items and the
            proper CSS classes. Build upon it with the options that follow, or
            with your CSS as required.
          </p>
          <DocsExample href="components/list-group.html">
            <CListGroup>
              <CListGroupItem>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Morbi leo risus</CListGroupItem>
              <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Active items</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>active</code> boolean property to a
            <code>&lt;CListGroupItem&gt;</code> to show the current active
            selection.
          </p>
          <DocsExample href="components/list-group.html#active-items">
            <CListGroup>
              <CListGroupItem active>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Morbi leo risus</CListGroupItem>
              <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Disabled items</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>disabled</code> boolean property to a
            <code>&lt;CListGroupItem&gt;</code> to make it appear disabled.
          </p>
          <DocsExample href="components/list-group.html#disabled-items">
            <CListGroup>
              <CListGroupItem disabled>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Morbi leo risus</CListGroupItem>
              <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Links and buttons</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to
            create <em>actionable</em> list group items with hover, disabled,
            and active states by adding
            <code>component=&#34;a|button&#34;</code>. We separate these
            pseudo-classes to ensure list groups made of non-interactive
            elements (like <code>&lt;li&gt;</code>s or
            <code>&lt;div&gt;</code>
            s) don&#39;tprovide a click or tap affordance.
          </p>
          <DocsExample href="components/list-group.html#links-and-buttons">
            <CListGroup>
              <CListGroupItem component="a" href="#" active>
                Cras justo odio
              </CListGroupItem>
              <CListGroupItem component="a" href="#">
                Dapibus ac facilisis in
              </CListGroupItem>
              <CListGroupItem component="a" href="#">
                Morbi leo risus
              </CListGroupItem>
              <CListGroupItem component="a" href="#">
                Porta ac consectetur ac
              </CListGroupItem>
              <CListGroupItem component="a" href="#" disabled>
                Vestibulum at eros
              </CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Flush</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>flush</code> boolean property to remove some borders and
            rounded corners to render list group items edge-to-edge in a parent
            container (e.g., cards).
          </p>
          <DocsExample href="components/list-group.html#flush">
            <CListGroup flush>
              <CListGroupItem>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Morbi leo risus</CListGroupItem>
              <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Horizontal</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>layout=&#34;horizontal&#34;</code> to change the layout of
            list group items from vertical to horizontal across all breakpoints.
            Alternatively, choose a responsive variant
            <code
              >.layout=&#34;horizontal-&#123;sm | md | lg | xl |
              xxl&#125;&#34;</code
            >
            to make a list group horizontal starting at that breakpoint&#39;s
            <code>min-width</code>. Currently
            <strong
              >horizontal list groups cannot be combined with flush list
              groups.</strong
            >
          </p>
          <DocsExample href="components/list-group.html#flush">
            <template
              v-for="item in ['', '-sm', '-md', '-lg', '-xl', '-xxl']"
              :key="item"
            >
              <CListGroup class="mb-2" :layout="'horizontal' + item">
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
              </CListGroup>
            </template>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Contextual classes</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Use contextual classes to style list items with a stateful
            background and color.
          </p>
          <DocsExample href="components/list-group.html#contextual-classes">
            <CListGroup>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem
                v-for="item in [
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ]"
                :key="item"
                :color="item"
                >A simple {{ item }} list group item</CListGroupItem
              >
            </CListGroup>
          </DocsExample>
          <p class="text-medium-emphasis small">
            Contextual classes also work with <code>&lt;a&gt;</code>s or
            <code>&lt;button&gt;</code>s. Note the addition of the hover styles
            here not present in the previous example. Also supported is the
            <code>active</code> state; apply it to indicate an active selection
            on a contextual list group item.
          </p>
          <DocsExample href="components/list-group.html#contextual-classes">
            <CListGroup>
              <CListGroupItem component="a" href="#"
                >Dapibus ac facilisis in</CListGroupItem
              >
              <CListGroupItem
                v-for="item in [
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark',
                ]"
                :key="item"
                component="a"
                href="#"
                :color="item"
                >A simple {{ item }} list group item</CListGroupItem
              >
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>With badges</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add badges to any list group item to show unread counts, activity,
            and more.
          </p>
          <DocsExample href="components/list-group.html#with-badges">
            <CListGroup>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Cras justo odio
                <CBadge color="primary" shape="rounded-pill"> 14 </CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Dapibus ac facilisis in
                <CBadge color="primary" shape="rounded-pill"> 2 </CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Morbi leo risus
                <CBadge color="primary" shape="rounded-pill"> 1 </CBadge>
              </CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Custom content</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add nearly any HTML within, even for linked list groups like the one
            below, with the help of
            <a href="https://coreui.io/docs/utilities/flex/"
              >flexbox utilities</a
            >.
          </p>
          <DocsExample href="components/list-group.html#custom-content">
            <CListGroup>
              <CListGroupItem component="a" href="#" active>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
              </CListGroupItem>
              <CListGroupItem component="a" href="#">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-medium-emphasis">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small class="text-medium-emphasis"
                  >Donec id elit non mi porta.</small
                >
              </CListGroupItem>
              <CListGroupItem component="a" href="#">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-medium-emphasis">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small class="text-medium-emphasis"
                  >Donec id elit non mi porta.</small
                >
              </CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Checkboxes and radios</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Place CoreUI&#39;s checkboxes and radios within list group items and
            customize as needed.
          </p>
          <DocsExample href="components/list-group.html#checkboxes-and-radios">
            <CListGroup>
              <CListGroupItem>
                <CFormCheck label="Cras justo odio" />
              </CListGroupItem>
              <CListGroupItem>
                <CFormCheck label="Dapibus ac facilisis in" checked />
              </CListGroupItem>
              <CListGroupItem>
                <CFormCheck label="Morbi leo risus" checked />
              </CListGroupItem>
              <CListGroupItem>
                <CFormCheck label="orta ac consectetur ac" />
              </CListGroupItem>
              <CListGroupItem>
                <CFormCheck label="Vestibulum at eros" />
              </CListGroupItem>
            </CListGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'ListGroups',
}
</script>
