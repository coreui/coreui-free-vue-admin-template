<template>
  <div>
    <CRow>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card title
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/3.0/components/CardComponents" 
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
        <CCard footer-html="Card Footer" :body-html="loremIpsum" />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          headerHtml="<i class='cui-check'></i> Card with icon"
          :bodyHtml="loremIpsum"
        />
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with switch
            <CSwitch
              class="float-right"
              size="sm"
              shape="pill"
              variant="info"
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
            <CBadge variant="success" class="float-right">Success</CBadge>
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
            <CBadge pill variant="danger" class="float-right">42</CBadge>
          </CCardHeader>
          <CCardBody :body-html="loremIpsum"/>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline primary"
          border-variant="primary"
          :body-html="loremIpsum"
        />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline secondary"
          border-variant="secondary"
          :body-html="loremIpsum"
        />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline success"
          border-variant="success"
          body-wrapper
        >
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline info" border-variant="info" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline warning" border-variant="warning" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline danger" border-variant="danger" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="6" md="4">
        <CCard class="card-accent-primary" header="Card with primary accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-secondary" header="Card with secondary accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-success" header="Card with success accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-info" header="Card with info accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-warning" header="Card with warning accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-danger" header="Card with danger accent" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard class="bg-primary text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-success text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-info text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-warning text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-danger text-center" body-wrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-secondary text-center" body-wrapper>
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
        <CCard header-html="Card title" class="bg-primary" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="bg-success" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="bg-info" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="bg-warning" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="bg-danger" body-wrapper>
            {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <transition name="fade">
          <CCard class="bg-secondary" v-if="show" >
            <CCardHeader>
              Card with header actions
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting" >
                  <i class="cui-settings"></i>
                </CLink>
                <CLink class="card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <i :class="`cui-chevron-${isCollapsed ? 'bottom' : 'top'}`"></i>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = false">
                  <i class="cui-circle-x"></i>
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
  name: 'cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>
  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
