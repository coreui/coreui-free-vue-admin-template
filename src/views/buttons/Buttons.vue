<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Buttons</strong>
        </CCardHeader>
        <CCardBody>
          <Example href="components/button.html#examples">

            <template v-for="(shape) in [null, 'rounded-pill', 'rounded-0', 'rounded-circle']">
                <h4 class="mt-4">Shape {{ shape === null ? 'standard' : shape === 'rounded-0' ? ' square' : shape }}:</h4>
                <CRow>
                    <CCol md="12" class="mt-4">
                        <strong>Standard</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Standard disabled</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" disabled class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline disabled</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" disabled class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost disabled</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" disabled class="m-2" :shape="shape">{{item}}</CButton>
                        </template>
                    </CCol>
                </CRow>

                <CRow>
                    <CCol md="12" class="mt-4">
                        <strong>Standard size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Standard disabled size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" disabled class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline disabled size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" disabled class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost disabled size="sm"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" disabled class="m-2" :shape="shape" size="sm">{{item}}</CButton>
                        </template>
                    </CCol>
                </CRow>


                <CRow>
                    <CCol md="12" class="mt-4">
                        <strong>Standard size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Standard disabled size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" disabled class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant outline disabled size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="outline" disabled class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                    <CCol md="12" class="mt-4">
                        <strong>Variant ghost disabled size="lg"</strong>
                        <br>
                        <template v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark', 'link']">
                            <CButton :color="item" variant="ghost" disabled class="m-2" :shape="shape" size="lg">{{item}}</CButton>
                        </template>
                    </CCol>
                </CRow>
            </template>
          </Example>

            <h4 class="mt-4">Block buttons</h4>

            <Example href="components/button.html#block-buttons">
                <div class="d-grid gap-2">
                    <CButton color="primary">Button</CButton>
                    <CButton color="primary">Button</CButton>
                </div>
                <br><br>
                <div class="d-grid gap-2 d-md-block">
                    <CButton color="primary">Button</CButton>
                    <CButton color="primary">Button</CButton>
                </div>
                <br><br>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <CButton color="primary">Button</CButton>
                    <CButton color="primary">Button</CButton>
                </div>
                <br><br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton color="primary" class="me-md-2">Button</CButton>
                    <CButton color="primary">Button</CButton>
                </div>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Buttons",
};
</script>