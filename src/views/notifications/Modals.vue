<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12">
          <CCard header="<i class='fa fa-align-justify'></i> Bootstrap Modals">
            <CButton variant="secondary" @click="myModal = true" class="mr-1">Launch demo modal</CButton>
            <CButton variant="secondary" @click="largeModal = true" class="mr-1">Launch large modal</CButton>
            <CButton variant="secondary" @click="smallModal = true" class="mr-1">Launch small modal</CButton>
            <hr>
            <CButton variant="primary" @click="primaryModal = true" class="mr-1">Launch primary modal</CButton>
            <CButton variant="success" @click="successModal = true" class="mr-1">Launch success modal</CButton>
            <CButton variant="warning" @click="warningModal = true" class="mr-1">Launch warning modal</CButton>
            <CButton variant="danger" @click="dangerModal = true" class="mr-1">Launch danger modal</CButton>
            <CButton variant="info" @click="infoModal = true" class="mr-1">Launch info modal</CButton>
            <CButton variant="dark" @click="darkModal = !darkModal" class="mr-1">Launch dark modal</CButton>
          </CCard>
        </CCol><!--/.col-->
      </CRow><!--/.row-->
    </div>
    <!-- Modal Component -->
    <CModal title="Modal title"
            :visible="myModal"
            @hide="myModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            size="lg"
            v-model="largeModal"
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
            v-model="smallModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>

    <CModal title="Modal title"
            class="modal-primary"
            v-model="primaryModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            class="modal-success"
            v-model="successModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            class="modal-warning"
            v-model="warningModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            class="modal-danger"
            v-model="dangerModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal title="Modal title"
            class="modal-info"
            v-model="infoModal"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CModal>
    <CModal v-model="darkModal"
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
      <template v-slot:header="{hide}">
        <h5 class="modal-title">Custom modal title</h5>
        <CButtonClose @click="hide()" class="text-white"/>
      </template>
      <template v-slot:footer="{hide}">
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
