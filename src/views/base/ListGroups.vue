<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Bootstrap list group </strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> List group </strong><small>active items</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem active>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>disabled items</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem disabled>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem disabled>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>actionable items</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem href="#some-link">Awesome link</CListGroupItem>
                <CListGroupItem href="#" active>Link with active state</CListGroupItem>
                <CListGroupItem href="#">Action links are easy</CListGroupItem>
                <CListGroupItem href="#foobar" disabled>Disabled link</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>buttons</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem tag="button">Button item</CListGroupItem>
                <CListGroupItem tag="button">I am a button</CListGroupItem>
                <CListGroupItem tag="button" disabled>Disabled button</CListGroupItem>
                <CListGroupItem tag="button">This is a button too</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>with badges</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem class="d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <CBadge variant="primary" pill>14</CBadge>
                </CListGroupItem>
                <CListGroupItem class="d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <CBadge variant="primary" pill>2</CBadge>
                </CListGroupItem>
                <CListGroupItem class="d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <CBadge variant="primary" pill>1</CBadge>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>variants</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>This is a default list group item</CListGroupItem>
                <CListGroupItem variant="primary">This is a primary list group item</CListGroupItem>
                <CListGroupItem variant="secondary">This is a secondary list group item</CListGroupItem>
                <CListGroupItem variant="success">This is a success list group item</CListGroupItem>
                <CListGroupItem variant="danger">This is a danger list group item</CListGroupItem>
                <CListGroupItem variant="warning">This is a warning list group item</CListGroupItem>
                <CListGroupItem variant="info">This is a info list group item</CListGroupItem>
                <CListGroupItem variant="light">This is a light list group item</CListGroupItem>
                <CListGroupItem variant="dark">This is a dark list group item</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>variants active</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem href="#">This is a default list group item</CListGroupItem>
                <CListGroupItem href="#" variant="primary">This is a primary list group item</CListGroupItem>
                <CListGroupItem href="#" variant="secondary">This is a secondary list group item</CListGroupItem>
                <CListGroupItem href="#" variant="success">This is a success list group item</CListGroupItem>
                <CListGroupItem href="#" variant="danger">This is a danger list group item</CListGroupItem>
                <CListGroupItem href="#" variant="warning">This is a warning list group item</CListGroupItem>
                <CListGroupItem href="#" variant="info">This is a info list group item</CListGroupItem>
                <CListGroupItem href="#" variant="light">This is a light list group item</CListGroupItem>
                <CListGroupItem href="#" variant="dark">This is a dark list group item</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> List group </strong>
              <small>inside cards</small>
            </CCardHeader>
            <CCardBody>
              <CCardGroup deck>
                <CCard header="<b>Card with list group</b>">
                  <CListGroup>
                    <CListGroupItem href="#">Cras justo odio</CListGroupItem>
                    <CListGroupItem href="#">Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem href="#">Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <p class="card-text mt-2">
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                    nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                    consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                    ad sit ipsum anim Lorem.
                  </p>
                </CCard>
                <CCard  header="<b>Card with flush list group</b>">
                  <CListGroup flush>
                    <CListGroupItem href="#">Cras justo odio</CListGroupItem>
                    <CListGroupItem href="#">Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem href="#">Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardBody>
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                    nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                    consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                    ad sit ipsum anim Lorem.
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> List group </strong><small>custom content</small>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem href="#" active class="flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </CListGroupItem>
                <CListGroupItem href="#" class="flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small class="text-muted">Donec id elit non mi porta.</small>
                </CListGroupItem>
                <CListGroupItem href="#" disabled class="flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Disabled List group item</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small class="text-muted">Donec id elit non mi porta.</small>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-groups'
}
</script>
