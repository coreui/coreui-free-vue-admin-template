<template>
  <div>
    <CRow>
      <CCol xs="12" md="6">
        <CCard v-if="true">
          <CCardHeader>
            Radio switches
            <CBadge :color="radio" class="mr-auto">{{radio}}</CBadge>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/switch" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CSwitch
              v-for="(color, key) in colors"
              :key="'radio' + key"
              class="mx-1"
              :color="color"
             variant="3d"
              v-bind="labelIcon"
              type="radio"
              name="radio"
              :checked="key === 2"
              @update:checked="(val) => val ? radio = color : null"
              :value="color"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch default
            <CBadge color="primary">{{checker}}</CBadge>
          </CCardHeader>
          <CCardBody>
            <CSwitch
              class="mx-1"
              color="primary"
              name="switch1"
              :checked.sync="checker"
            />
            <CSwitch
              class="mx-1"
              :color="color"
              checked
              :key="key"
              v-for="(color, key) in ['secondary', 'success','warning','info','danger','light','dark']"
            />
            <CSwitch class="mx-1" color="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch pills
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked shape="pill" />
            <CSwitch class="mx-1" color="success" checked shape="pill" />
            <CSwitch class="mx-1" color="warning" checked shape="pill" />
            <CSwitch class="mx-1" color="info" checked shape="pill" />
            <CSwitch class="mx-1" color="danger" checked shape="pill" />
            <CSwitch class="mx-1" color="light" checked shape="pill" />
            <CSwitch class="mx-1" color="dark" checked shape="pill" />
            <CSwitch class="mx-1" color="primary" disabled shape="pill" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="3d" />
            <CSwitch class="mx-1" color="secondary" checked variant="3d" />
            <CSwitch class="mx-1" color="success" checked variant="3d" />
            <CSwitch class="mx-1" color="warning" checked variant="3d" />
            <CSwitch class="mx-1" color="info" checked variant="3d" />
            <CSwitch class="mx-1" color="danger" checked variant="3d" />
            <CSwitch class="mx-1" color="light" checked variant="3d" />
            <CSwitch class="mx-1" color="dark" checked variant="3d" />
            <CSwitch class="mx-1" color="primary" disabled variant="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>disabled</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="secondary" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="success" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="warning" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="info" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="danger" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="light" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="dark" checked variant="3d" disabled />
            <CSwitch class="mx-1" color="primary" disabled variant="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" variant="3d" shape="square" checked v-bind="labelIcon"/>
            <CSwitch class="mx-1" color="secondary" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked variant="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" disabled variant="3d" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>variant="outline"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="outline" />
            <CSwitch class="mx-1" color="secondary" checked variant="outline" />
            <CSwitch class="mx-1" color="success" checked variant="outline" />
            <CSwitch class="mx-1" color="warning" checked variant="outline" />
            <CSwitch class="mx-1" color="info" checked variant="outline" />
            <CSwitch class="mx-1" color="danger" checked variant="outline" />
            <CSwitch class="mx-1" color="light" checked variant="outline" />
            <CSwitch class="mx-1" color="dark" checked variant="outline" />
            <CSwitch class="mx-1" color="primary" variant="outline" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>variant="outline"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="outline" shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="success" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="warning" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="info" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="danger" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="light" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="dark" checked variant="outline" shape="pill" />
            <CSwitch class="mx-1" color="primary" variant="outline" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="opposite" />
            <CSwitch class="mx-1" color="secondary" checked variant="opposite" />
            <CSwitch class="mx-1" color="success" checked variant="opposite" />
            <CSwitch class="mx-1" color="warning" checked variant="opposite" />
            <CSwitch class="mx-1" color="info" checked variant="opposite" />
            <CSwitch class="mx-1" color="danger" checked variant="opposite" />
            <CSwitch class="mx-1" color="light" checked variant="opposite" />
            <CSwitch class="mx-1" color="dark" checked variant="opposite" />
            <CSwitch class="mx-1" color="primary" variant="opposite" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>variant="opposite"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="opposite" shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="success" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="warning" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="info" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="danger" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="light" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="dark" checked variant="opposite" shape="pill" />
            <CSwitch class="mx-1" color="primary" variant="opposite" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked v-bind="labelIcon"/>
            <CSwitch class="mx-1" color="secondary" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>shape
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label variant="outline"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked variant="outline" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" variant="outline" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label variant="outline"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked variant="outline" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" variant="outline" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked variant="opposite" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" variant="opposite" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label variant="opposite"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked variant="opposite" shape="pill" v-bind="labelTxt" />
            <CSwitch class="mx-1" color="secondary" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked variant="opposite" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" variant="opposite" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <CCard>
          <CCardHeader>
            Sizes
          </CCardHeader>
          <CCardBody class="p-0">
            <CDataTable
              hover
              striped
              class="table-align-middle mb-0"
              :items="items"
              :fields="fields"
              no-sorting
            >
              <template #example="{item}">
                <td>
                  <CSwitch
                    :variant="item.example.variant"
                    :color="item.example.color"
                    :size="item.example.size"
                    :checked="item.example.checked"
                  />
                </td>
              </template>
              <template #size_prop="{item}">
                <td>
                  <span v-html="item.size_prop"></span>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Switches',
  data () {
    return {
      colors: [
        'primary','secondary','warning','success','info','danger','light','dark'
      ],
      fields: [
        { key: 'size' },
        { key: 'example' },
        { key: 'size_prop', label: 'Size prop' }
      ],
      items: [
        {
          size: 'Large', 
          example: {  variant: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Add following prop <code>size="lg"</code>'
        },
        {
          size: 'Normal', 
          example: {  variant: '3d', color: 'primary', size: '', checked: true }, 
          size_prop: '-'
        },
        {
          size: 'Small', 
          example: { variant: '3d', color: 'primary', size: 'sm', checked: true}, 
          size_prop: 'Add following prop <code>size="sm"</code>'
        }
      ],
      checker: true,
      radio: 'warning',
      labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
      labelTxt: {
        labelOn: 'yes',
        labelOff: 'no'
      }
    }
  }
}
</script>
