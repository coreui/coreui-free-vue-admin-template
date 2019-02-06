<template>
  <div class="animated fadeIn">
    <!-- <CContainer fluid>
      <CRow>
        <CColumn lg md="7" :sm="{'order': 2, offset:'0', size:'4'}" class="hehe">
          hehe
        </CColumn>
      </CRow>
    </CContainer> -->
    <CNavbar toggleable="md" light variant="light">
      <CNavbarToggle class="hehe" @click="test2 = !test2"/>
      <CLink class="navbar-brand">NavBar</CLink>
      <CCollapse :duration="500" :show="test2" navbar @finish="test2 = test2" >
        <CNavbarNav pills class="navbar-nav">
          <CNavItem>
            hehehe1
          </CNavItem>
          <CNavItem class="nav-item">
            hehehe1
          </CNavItem>
          <CNavItem class="nav-item">
            hehehe2
          </CNavItem>
          <DefaultHeaderDropdownAccnt/>
        </CNavbarNav>
        <CNavbarNav class="ml-auto">
          <CDropdown right class="nav-item b-nav-dropdown" toggleClasses="nav-link">
            <c-dropdown-item><i class="fa fa-file" /> Projects
              <c-badge variant="primary">32</c-badge>
            </c-dropdown-item>
            <c-dropdown-item><i class="fa fa-shield" /> Lock Account</c-dropdown-item>
            <c-dropdown-item><i class="fa fa-lock" /> Logout</c-dropdown-item>
          </CDropdown>
        </CNavbarNav>
      </CCollapse>
    </CNavbar>
    <br>
    <b-row>
      <b-col sm="6" md="4">
        <transition name="fade">
          <c-card class="bg-secondary" no-body v-if="show" >
            <CCardHeader slot="header">
              Card with header actions
              <div class="card-header-actions">
                <c-link href="#" class="card-header-action btn-setting" >
                  <i class="icon-settings"></i>
                </c-link>
                <c-link class="card-header-action btn-minimize"  v-c-collapse:collapse1="test" @click="test = !test" data-duration="600">
                  <i :class="`icon-arrow-${ !test ? 'up' : 'down'}`"></i>
                </c-link>
                <c-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </c-link>
              </div>
            </CCardHeader>
            <c-card-body id="collapse1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </c-card-body>
          </c-card>
        </transition>
      </b-col>
      <b-col sm="6" md="4">
        <c-card>
          <CCardImg imgSrc="https://picsum.photos/600/300/?image=25" class="mb-2"/>
          <CCardHeader header="Card title"/>
          <CCardBody  style="max-height:200px;overflow-y:auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </CCardBody>
        </c-card>

      </b-col>
      <b-col sm="6" md="4">
        <c-card footer="Card footer"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                header="<i class='fa fa-check'></i> Card with icon"/>
      </b-col>
      <b-col sm="6" md="4">
        <CCard footer="Card footer">
          <CCardHeader slot="header">
            <i class='fa fa-check'></i> Card with icon
          </CCardHeader>
          <CCardBody slot="body"
                     title="title"
                     subtitle="subtitle"
                     body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."/>
        </CCard>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with switch
            <label class="switch switch-sm switch-text switch-info float-right mb-0">
              <input type="checkbox" class="switch-input">
              <span class="switch-label" data-on="On" data-off="Off"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with label
            <b-badge variant="success" class="float-right">Success</b-badge>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with label
            <b-badge pill variant="danger" class="float-right">42</b-badge>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Card outline primary" border-variant="primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline secondary" border-variant="secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline success" border-variant="success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline info" border-variant="info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline warning" border-variant="warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline danger" border-variant="danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="6" md="4">
        <b-card class="card-accent-primary" header="Card with primary accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-secondary" header="Card with secondary accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-success" header="Card with success accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-info" header="Card with info accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-warning" header="Card with warning accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-danger" header="Card with danger accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card class="bg-primary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-success text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-info text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-warning text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-danger text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-secondary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import DefaultHeaderDropdownAccnt from'../../containers/DefaultHeaderDropdownAccnt'

export default {
  name: 'cards',
  components: {
    DefaultHeaderDropdownAccnt
  },
  data: function () {
    return {
      show: true,
      showCollapse: true,
      test: true,
      test2: false,
      form: 1,
      smh: 'sdfsdf'
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
