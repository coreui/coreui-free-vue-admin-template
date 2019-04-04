<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Bootstrap Modals
            </CCardHeader>
            <CCardBody>
              <CButton variant="secondary" @click="myModal = true" class="mr-1">
                Launch demo modal
              </CButton>
              <CButton variant="secondary" @click="largeModal = true" class="mr-1">
                Launch large modal
              </CButton>
              <CButton variant="secondary" @click="smallModal = true" class="mr-1">
                Launch small modal
              </CButton>
              <hr>
              <CButton variant="primary" @click="primaryModal = true" class="mr-1">
                Launch primary modal
              </CButton>
              <CButton variant="success" @click="successModal = true" class="mr-1">
                Launch success modal
              </CButton>
              <CButton variant="warning" @click="warningModal = true" class="mr-1">
                Launch warning modal
              </CButton>
              <CButton variant="danger" @click="dangerModal = true" class="mr-1">
                Launch danger modal
              </CButton>
              <CButton variant="info" @click="infoModal = true" class="mr-1">
                Launch info modal
              </CButton>
              <CButton variant="dark" @click="darkModal = true" class="mr-1">
                Launch dark modal
              </CButton>
            </CCardBody>
          </CCard>
        </CCol><!--/.col-->
      </CRow>
    </div>
    <!-- Modal Component -->
    <CModal
      title="Modal title"
      :visible.sync="myModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      size="lg"
      :visible.sync="largeModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            size="sm"
            :visible.sync="smallModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>

    <CModal
      title="Modal title"
      class="modal-primary"
      :visible.sync="primaryModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      class="modal-success"
      :visible.sync="successModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      class="modal-warning"
      :visible.sync="warningModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      class="modal-danger"
      :visible.sync="dangerModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      title="Modal title"
      class="modal-info"
      :visible.sync="infoModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal
      :visible.sync="darkModal"
      :noBackdrop="false"
      :noCloseOnBackdrop="false"
      :noFade="false"
      :centered="true"
      title="Modal title 2"
      size="lg"
      variant="dark"
      borderVariant="danger2"
      addModalClasses="hehe1"
      addDialogClasses="hehe2"
      addContentClasses="hehe3"
      :noHeader="false"
      :noBody="false"
      :noFooter="false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <template #header="{hide}">
        <h5 class="modal-title">Custom modal title</h5>
        <CButtonClose @click="hide()" class="text-white"/>
      </template>
      <template #footer="{hide}">
        <CButton @click="hide()" variant="danger">Discard</CButton>
        <CButton @click="hide()" variant="success">Accept</CButton>
      </template>
    </CModal>
  </div>

</template>

<script>
export default {
  name: 'modals',
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
      darkModal: false
    }
  }
}
</script>
