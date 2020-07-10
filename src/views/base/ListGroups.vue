<template>
  <div>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> List group </strong>
            <small>disabled items</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem disabled>Cras justo odio</CListGroupItem>
              <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem>Morbi leo risus</CListGroupItem>
              <CListGroupItemDivider/>
              <CListGroupItem disabled>Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem>Vestibulum at eros</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
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
            <CIcon name="cil-justify-center"/>
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
            <CIcon name="cil-justify-center"/>
            <strong> List group </strong>
            <small>with badges</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Cras justo odio
                <CBadge color="primary" shape="pill">14</CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Dapibus ac facilisis in
                <CBadge color="primary" shape="pill">2</CBadge>
              </CListGroupItem>
              <CListGroupItem
                class="d-flex justify-content-between align-items-center"
              >
                Morbi leo risus
                <CBadge color="primary" shape="pill">1</CBadge>
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
            <CIcon name="cil-justify-center"/>
            <strong> List group </strong>
            <small>colors</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>This is a default list group item</CListGroupItem>
              <CListGroupItem color="primary">This is a primary list group item</CListGroupItem>
              <CListGroupItem color="secondary">This is a secondary list group item</CListGroupItem>
              <CListGroupItem color="success">This is a success list group item</CListGroupItem>
              <CListGroupItem color="danger">This is a danger list group item</CListGroupItem>
              <CListGroupItem color="warning">This is a warning list group item</CListGroupItem>
              <CListGroupItem color="info">This is a info list group item</CListGroupItem>
              <CListGroupItem color="light">This is a light list group item</CListGroupItem>
              <CListGroupItem color="dark">This is a dark list group item</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> List group </strong>
            <small>colors active accent</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup accent>
              <CListGroupItem href="#" accent="light">This is a default list group item</CListGroupItem>
              <CListGroupItem href="#" color="primary" accent="primary">This is a primary list group item</CListGroupItem>
              <CListGroupItem href="#" color="secondary" accent="secondary">This is a secondary list group item</CListGroupItem>
              <CListGroupItem href="#" color="success" accent="success">This is a success list group item</CListGroupItem>
              <CListGroupItem href="#" color="danger" accent="danger">This is a danger list group item</CListGroupItem>
              <CListGroupItem href="#" color="warning" accent="warning">This is a warning list group item</CListGroupItem>
              <CListGroupItem href="#" color="info" accent="info">This is a info list group item</CListGroupItem>
              <CListGroupItem href="#" color="light" accent="light">This is a light list group item</CListGroupItem>
              <CListGroupItem href="#" color="dark" accent="dark">This is a dark list group item</CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> List group </strong>
            <small>inside cards</small>
          </CCardHeader>
          <CCardBody>
            <CCardGroup deck>
              <CCard>
                <CCardHeader>
                  <b>Card with list group</b>
                </CCardHeader>
                <CCardBody>
                  <CListGroup>
                    <CListGroupItem href="#">Cras justo odio</CListGroupItem>
                    <CListGroupItem href="#">Dapibus ac facilisis in</CListGroupItem>
                    <CListGroupItem href="#">Vestibulum at eros</CListGroupItem>
                  </CListGroup>
                  <CCardText class="mt-2">
                    Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                    nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                    consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                    ad sit ipsum anim Lorem.
                  </CCardText>
                </CCardBody>
              </CCard>
              <CCard>
                <CCardHeader><b>Card with flush list group</b></CCardHeader>
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
            <CIcon name="cil-justify-center"/><strong> List group </strong><small>custom content</small>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                href="#"
                active
                class="flex-column align-items-start"
              >
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
</template>

<script>
export default {
  name: 'ListGroups'
}
</script>
