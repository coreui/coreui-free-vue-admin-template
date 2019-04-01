<template>
  <div class="animated fadeIn">
    <CRow>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" :bodyHtml="loremIpsum"/>
      </CCol>
      <CCol sm="6" md="4">
        <CCard footerHtml="Card Footer" :bodyHtml="loremIpsum" />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          headerHtml="<i class='fa fa-check'></i> Card with icon"
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
              dataOn="On"
              dataOff="Off"
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
            <CBadge variant="success" class="float-right">Success</CBadge>
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
            <CBadge pill variant="danger" class="float-right">42</CBadge>
          </CCardHeader>
          <CCardBody :bodyHtml="loremIpsum"/>
        </CCard>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline primary"
          borderVariant="primary"
          :bodyHtml="loremIpsum"
        />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline secondary"
          borderVariant="secondary"
          :bodyHtml="loremIpsum"
        />
      </CCol>
      <CCol sm="6" md="4">
        <CCard
          header="Card outline success"
          borderVariant="success"
          bodyWrapper
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card outline info" borderVariant="info" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card outline warning" borderVariant="warning" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card outline danger" borderVariant="danger" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
    </CRow><!--/.row-->

    <CRow>
      <CCol sm="6" md="4">
        <CCard class="card-accent-primary" header="Card with primary accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-secondary" header="Card with secondary accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-success" header="Card with success accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-info" header="Card with info accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-warning" header="Card with warning accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="card-accent-danger" header="Card with danger accent" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol sm="6" md="4">
        <CCard class="bg-primary text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-success text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-info text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-warning text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-danger text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard class="bg-secondary text-center" bodyWrapper>
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" class="bg-primary" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" class="bg-success" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" class="bg-info" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" class="bg-warning" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard headerHtml="Card title" class="bg-danger" bodyWrapper>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <transition name="fade">
          <CCard class="bg-secondary" v-if="show" >
            <CCardHeader>
              Card with header actions
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting" >
                  <i class="icon-settings"></i>
                </CLink>
                <CLink class="card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <i :class="`icon-arrow-${ !isCollapsed ? 'up' : 'down'}`"></i>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = false">
                  <i class="icon-close"></i>
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
          <CCardImg imgSrc="https://picsum.photos/600/300/?image=25"/>
          <CCardHeader headerHtml="Card title"/>
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
