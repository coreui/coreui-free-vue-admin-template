<template>
  <div>
    <CRow>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card title
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/card-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardBody>{{loremIpsum}}</CCardBody>
          <CCardFooter>Card Footer</CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader><CIcon name="cil-check"/> Card with icon</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with switch
            <CSwitch
              class="float-right"
              size="sm"
              shape="pill"
              color="info"
              data-on="On"
              data-off="Off"
              :checked="true"
            />
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with label
            <CBadge color="success" class="float-right">Success</CBadge>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with label
            <CBadge shape="pill" color="danger" class="float-right">42</CBadge>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard border-color="primary">
          <CCardHeader>Card outline primary</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard border-color="secondary">
          <CCardHeader>Card outline secondary</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard border-color="success">
          <CCardHeader>Card outline success</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard border-color="info">
          <CCardHeader>Card outline info</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard border-color="warning">
          <CCardHeader>Card outline warning</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard border-color="danger">
          <CCardHeader>Card outline danger</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="6" md="4">
        <CCard accent-color="primary">
          <CCardHeader>Card with primary accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard accent-color="secondary">
          <CCardHeader>Card with secondary accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard accent-color="success">
          <CCardHeader>Card with success accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard accent-color="info">
          <CCardHeader>Card with info accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard accent-color="info">
          <CCardHeader>Card with info accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard accent-color="danger">
          <CCardHeader>Card with danger accent</CCardHeader>
          <CCardBody>{{loremIpsum}}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard color="primary" class="text-center" body-wrapper text-color="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard 
          color="success" 
          class="text-center" 
          body-wrapper
          text-color="white"
        >
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="info" class="text-center" body-wrapper text-color="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="warning" class="text-center" body-wrapper text-color="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="danger" class="text-center" body-wrapper text-color="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="secondary" class="text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard color="primary" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="success" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="info" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="warning" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="danger" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <transition name="fade">
          <CCard v-if="show" color="secondary">
            <CCardHeader>
              Card with header actions
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting">
                  <CIcon name="cil-settings"/>
                </CLink>
                <CLink class="card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <CIcon :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = false">
                  <CIcon name="cil-x-circle"/>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="isCollapsed" :duration="400">
              <CCardBody>
                {{loremIpsum}}
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>

export default {
  name: 'Cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
