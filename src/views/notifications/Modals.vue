<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="<i class='fa fa-align-justify'></i> Bootstrap Modals">
            <b-button type="button" variant="secondary" @click="myModal = true" class="mr-1">Launch demo modal</b-button>
            <b-button type="button" variant="secondary" @click="largeModal = true" class="mr-1">Launch large modal</b-button>
            <b-button type="button" variant="secondary" @click="smallModal = true" class="mr-1">Launch small modal</b-button>
            <hr>
            <b-button type="button" variant="primary" @click="primaryModal = true" class="mr-1">Launch primary modal</b-button>
            <b-button type="button" variant="success" @click="successModal = true" class="mr-1">Launch success modal</b-button>
            <b-button type="button" variant="warning" @click="warningModal = true" class="mr-1">Launch warning modal</b-button>
            <b-button type="button" variant="danger" @click="dangerModal = true" class="mr-1">Launch danger modal</b-button>
            <b-button type="button" variant="info" @click="infoModal = true" class="mr-1">Launch info modal</b-button>
            <b-button type="button" variant="info" @click="cmodal = !cmodal" class="mr-1">CModal</b-button>

          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>

    <!-- Modal Component -->
    <b-modal title="Modal title" v-model="myModal" @ok="myModal = false">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" size="lg" v-model="largeModal" @ok="largeModal = false">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" size="sm" v-model="smallModal" @ok="smallModal = false">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>

    <b-modal title="Modal title" class="modal-primary" v-model="primaryModal" @ok="primaryModal = false">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" class="modal-success" v-model="successModal" @ok="successModal = false" ok-variant="success">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" class="modal-warning" v-model="warningModal" @ok="warningModal = false" ok-variant="warning">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" class="modal-danger" v-model="dangerModal" @ok="dangerModal = false" ok-variant="danger">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal title="Modal title" class="modal-info" v-model="infoModal" @ok="infoModal = false" ok-variant="info">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <CModal v-model="cmodal"
            :noBackdrop="false"
            :noCloseOnBackdrop="false"
            :noFade="false"
            :centered="true"
            title="Modal title 2"
            size="lg"
            variant="success"
            borderVariant="danger2"
            addModalClasses="hehe1"
            addDialogClasses="hehe2"
            addContentClasses="hehe3"
            :noHeader="true"
            :noBody="false"
            :noFooter="true"
    >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <!-- <div slot="header" class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">new header</h5>
        <button type="button" class="close closeModal" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
      <div slot="body" class="modal-body">
        n
      </div>
      <div class="modal-footer" slot="footer">
        <button type="button" class="btn btn-secondary closeModal">Close2</button>
        <button type="button" class="btn btn-primary closeModal">OK2</button>
      </div>
    </CModal>
  </div>

</template>

<script>
// import CModal from './CModal'
export default {
  name: 'modals',
  // components: {
  //   CModal
  // },
  data () {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
      cmodal: false
    }
  }
}
</script>
