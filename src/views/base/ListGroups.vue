<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue List Groups</strong>
        </CCardHeader>
        <CCardBody>

            <CRow>
                <CCol md="6">
                    <h4>Basic example</h4>
                    <Example href="components/list-group.html#basic-example">
                        <CListGroup>
                        <CListGroupItem>Cras justo odio</CListGroupItem>
                        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                        <CListGroupItem>Morbi leo risus</CListGroupItem>
                        <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Active items</h4>
                    <Example href="components/list-group.html#active-items">
                        <CListGroup>
                            <CListGroupItem active>Cras justo odio</CListGroupItem>
                            <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem>Morbi leo risus</CListGroupItem>
                            <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                            <CListGroupItem>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Disabled items</h4>
                    <Example href="components/list-group.html#disabled-items">
                        <CListGroup>
                            <CListGroupItem disabled>Cras justo odio</CListGroupItem>
                            <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem>Morbi leo risus</CListGroupItem>
                            <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                            <CListGroupItem>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Links</h4>
                    <Example href="components/list-group.html#links-and-buttons">
                        <CListGroup>
                            <CListGroupItem component="a" href="#" active>Cras justo odio</CListGroupItem>
                            <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem component="a" href="#">Morbi leo risus</CListGroupItem>
                            <CListGroupItem component="a" href="#">Porta ac consectetur ac</CListGroupItem>
                            <CListGroupItem component="a" href="#" disabled>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Buttons</h4>
                    <Example href="components/list-group.html#links-and-buttons">
                        <CListGroup>
                            <CListGroupItem component="button" active>Cras justo odio</CListGroupItem>
                            <CListGroupItem component="button">Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem component="button">Morbi leo risus</CListGroupItem>
                            <CListGroupItem component="button">Porta ac consectetur ac</CListGroupItem>
                            <CListGroupItem component="button" disabled>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Flush</h4>
                    <Example href="components/list-group.html#flush">
                        <CListGroup flush>
                            <CListGroupItem>Cras justo odio</CListGroupItem>
                            <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem>Morbi leo risus</CListGroupItem>
                            <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                            <CListGroupItem>Vestibulum at eros</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Horizonstal</h4>
                    <Example href="components/list-group.html#horizontal">
                        <template v-for="(item) in ['', '-sm', '-md', '-lg', '-xl', '-xxl']">
                            <CListGroup class="mb-2" :layout="'horizontal' + item">
                                <CListGroupItem>Cras justo odio</CListGroupItem>
                                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                                <CListGroupItem>Morbi leo risus</CListGroupItem>
                            </CListGroup>
                        </template>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Contextual classes</h4>
                    <Example href="components/list-group.html#contextual-classes">
                        <CListGroup>
                            <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" :color="item">A simple {{item}} list group item</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Change component to link</h4>
                    <Example href="components/list-group.html#contextual-classes">
                        <CListGroup>
                            <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
                            <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" component="a" href="#" :color="item">A simple {{item}} list group item</CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Vue list groups with badge</h4>
                    <Example href="components/list-group.html#with-badges">
                        <CListGroup>
                            <CListGroupItem class="d-flex justify-content-between align-items-center">Cras justo odio<CBadge color="primary" shape="rounded-pill">14</CBadge></CListGroupItem>
                            <CListGroupItem class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<CBadge color="primary" shape="rounded-pill">2</CBadge></CListGroupItem>
                            <CListGroupItem class="d-flex justify-content-between align-items-center">Morbi leo risus<CBadge color="primary" shape="rounded-pill">1</CBadge></CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Custom content</h4>
                    <Example href="components/list-group.html#custom-content">
                        <CListGroup>
                            <CListGroupItem component="a" href="#" active>
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                            </CListGroupItem>
                            <CListGroupItem component="a" href="#">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </CListGroupItem>
                            <CListGroupItem component="a" href="#">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small class="text-muted">Donec id elit non mi porta.</small>
                            </CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
                <CCol md="6">
                    <h4 class="mt-4">Checkboxes and radios</h4>
                    <Example href="components/list-group.html#checkboxes-and-radios">
                        <CListGroup>
                            <CListGroupItem><CFormCheck label="Cras justo odio"/></CListGroupItem>
                            <CListGroupItem><CFormCheck label="Dapibus ac facilisis in" defaultChecked/></CListGroupItem>
                            <CListGroupItem><CFormCheck label="Morbi leo risus" defaultChecked/></CListGroupItem>
                            <CListGroupItem><CFormCheck label="orta ac consectetur ac"/></CListGroupItem>
                            <CListGroupItem><CFormCheck label="Vestibulum at eros"/></CListGroupItem>
                        </CListGroup>
                    </Example>
                </CCol>
            </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "ListGroups",
};
</script>