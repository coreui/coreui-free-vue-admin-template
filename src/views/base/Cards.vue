<template>
  <div>
    <CRow>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" :body-html="loremIpsum"/>
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
              class="c-float-right"
              size="sm"
              shape="pill"
              variant="info"
              data-on="On"
              data-off="Off"
              :checked="true"
            />
          </CCardHeader>
          <CCardBody>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with label
            <CBadge variant="success" class="c-float-right">Success</CBadge>
          </CCardHeader>
          <CCardBody>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard>
          <CCardHeader>
            Card with label
            <CBadge pill variant="danger" class="c-float-right">42</CBadge>
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline info" border-variant="info" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline warning" border-variant="warning" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card outline danger" border-variant="danger" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-primary" header="Card with primary accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-secondary" header="Card with secondary accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-success" header="Card with success accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-info" header="Card with info accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-warning" header="Card with warning accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-card-accent-danger" header="Card with danger accent" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="4">
        <CCard class="c-bg-primary c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-bg-success c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-bg-info c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-bg-warning c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-bg-danger c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="c-bg-secondary c-text-center" body-wrapper>
          <blockquote class="c-card-blockquote">
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
        <CCard header-html="Card title" class="c-bg-primary" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="c-bg-success" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="c-bg-info" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="c-bg-warning" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard header-html="Card title" class="c-bg-danger" body-wrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <transition name="fade">
          <CCard class="c-bg-secondary" v-if="show" >
            <CCardHeader>
              Card with header actions
              <div class="c-card-header-actions">
                <CLink href="#" class="c-card-header-action btn-setting" >
                  <i class="cui-settings"></i>
                </CLink>
                <CLink class="c-card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <i :class="`cui-chevron-${isCollapsed ? 'bottom' : 'top'}`"></i>
                </CLink>
                <CLink href="#" class="c-card-header-action c-btn-close" v-on:click="show = false">
                  <i class="cui-circle-x"></i>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="isCollapsed" :duration="400">
              <CCardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
    <!-- <CRow>
      <CCol sm="6" md="4">
        <CCard >
          <CCardImg img-src="https://picsum.photos/600/300/?image=25"/>
          <CCardHeader header-html="Card title"/>
          <CCardBody style="max-height:200px;overflow-y:auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </CCardBody>
        </CCard>
      </CCol>
    </CRow> -->
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
