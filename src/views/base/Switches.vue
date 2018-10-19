<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch default
            <b-badge variant="primary">{{checker}}</b-badge>
          </div>
          <c-switch class="mx-1" color="primary" checked name="switch1" v-model="checker" value="yes" uncheckedValue="no"/>
          <c-switch class="mx-1" color="secondary" checked />
          <c-switch class="mx-1" color="success" checked />
          <c-switch class="mx-1" color="warning" checked />
          <c-switch class="mx-1" color="info" checked />
          <c-switch class="mx-1" color="danger" checked />
          <c-switch class="mx-1" color="light" checked />
          <c-switch class="mx-1" color="dark" checked />
          <c-switch class="mx-1" color="primary" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch pills
          </div>
          <c-switch class="mx-1" color="primary" checked variant="pill" />
          <c-switch class="mx-1" color="secondary" checked variant="pill" />
          <c-switch class="mx-1" color="success" checked variant="pill" />
          <c-switch class="mx-1" color="warning" checked variant="pill" />
          <c-switch class="mx-1" color="info" checked variant="pill" />
          <c-switch class="mx-1" color="danger" checked variant="pill" />
          <c-switch class="mx-1" color="light" checked variant="pill" />
          <c-switch class="mx-1" color="dark" checked variant="pill" />
          <c-switch class="mx-1" color="primary" disabled variant="pill" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch
          </div>
          <c-switch class="mx-1" color="primary" checked variant="3d" />
          <c-switch class="mx-1" color="secondary" checked variant="3d" />
          <c-switch class="mx-1" color="success" checked variant="3d" />
          <c-switch class="mx-1" color="warning" checked variant="3d" />
          <c-switch class="mx-1" color="info" checked variant="3d" />
          <c-switch class="mx-1" color="danger" checked variant="3d" />
          <c-switch class="mx-1" color="light" checked variant="3d" />
          <c-switch class="mx-1" color="dark" checked variant="3d" />
          <c-switch class="mx-1" color="primary" disabled variant="3d" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>disabled</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked variant="3d" disabled />
          <c-switch class="mx-1" color="secondary" checked variant="3d" disabled />
          <c-switch class="mx-1" color="success" checked variant="3d" disabled />
          <c-switch class="mx-1" color="warning" checked variant="3d" disabled />
          <c-switch class="mx-1" color="info" checked variant="3d" disabled />
          <c-switch class="mx-1" color="danger" checked variant="3d" disabled />
          <c-switch class="mx-1" color="light" checked variant="3d" disabled />
          <c-switch class="mx-1" color="dark" checked variant="3d" disabled />
          <c-switch class="mx-1" color="primary" disabled variant="3d" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="secondary" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="success" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="warning" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="info" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="danger" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="light" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="dark" checked variant="3d" outline="alt" />
          <c-switch class="mx-1" color="primary" disabled variant="3d" outline="alt" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" color="primary" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" defaultChecked variant="3d" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" disabled variant="3d" label v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt" label</code></small>
          </div>
          <c-switch class="mx-1" color="primary" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" defaultChecked variant="3d" outline="alt" label v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" disabled variant="3d" outline="alt" label v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt" label</code></small>
          </div>
          <c-switch class="mx-1" color="primary" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="secondary" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="success" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="warning" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="info" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="danger" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="light" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="dark" defaultChecked variant="3d" outline="alt" label />
          <c-switch class="mx-1" color="primary" disabled variant="3d" outline="alt" label />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked outline />
          <c-switch class="mx-1" color="secondary" checked outline />
          <c-switch class="mx-1" color="success" checked outline />
          <c-switch class="mx-1" color="warning" checked outline />
          <c-switch class="mx-1" color="info" checked outline />
          <c-switch class="mx-1" color="danger" checked outline />
          <c-switch class="mx-1" color="light" checked outline />
          <c-switch class="mx-1" color="dark" checked outline />
          <c-switch class="mx-1" color="primary" outline disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline variant="pill"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked outline variant="pill"/>
          <c-switch class="mx-1" color="secondary" checked outline variant="pill" />
          <c-switch class="mx-1" color="success" checked outline variant="pill" />
          <c-switch class="mx-1" color="warning" checked outline variant="pill" />
          <c-switch class="mx-1" color="info" checked outline variant="pill" />
          <c-switch class="mx-1" color="danger" checked outline variant="pill" />
          <c-switch class="mx-1" color="light" checked outline variant="pill" />
          <c-switch class="mx-1" color="dark" checked outline variant="pill" />
          <c-switch class="mx-1" color="primary" outline variant="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked outline="alt" />
          <c-switch class="mx-1" color="secondary" checked outline="alt" />
          <c-switch class="mx-1" color="success" checked outline="alt" />
          <c-switch class="mx-1" color="warning" checked outline="alt" />
          <c-switch class="mx-1" color="info" checked outline="alt" />
          <c-switch class="mx-1" color="danger" checked outline="alt" />
          <c-switch class="mx-1" color="light" checked outline="alt" />
          <c-switch class="mx-1" color="dark" checked outline="alt" />
          <c-switch class="mx-1" color="primary" outline="alt" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline="alt" variant="pill"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked outline="alt" variant="pill"/>
          <c-switch class="mx-1" color="secondary" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="success" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="warning" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="info" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="danger" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="light" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="dark" checked outline="alt" variant="pill" />
          <c-switch class="mx-1" color="primary" outline="alt" variant="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label />
          <c-switch class="mx-1" color="secondary" checked label />
          <c-switch class="mx-1" color="success" checked label />
          <c-switch class="mx-1" color="warning" checked label />
          <c-switch class="mx-1" color="info" checked label />
          <c-switch class="mx-1" color="danger" checked label />
          <c-switch class="mx-1" color="light" checked label />
          <c-switch class="mx-1" color="dark" checked label />
          <c-switch class="mx-1" color="primary" label disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label variant="pill"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label variant="pill" />
          <c-switch class="mx-1" color="secondary" checked label variant="pill" />
          <c-switch class="mx-1" color="success" checked label variant="pill" />
          <c-switch class="mx-1" color="warning" checked label variant="pill" />
          <c-switch class="mx-1" color="info" checked label variant="pill" />
          <c-switch class="mx-1" color="danger" checked label variant="pill" />
          <c-switch class="mx-1" color="light" checked label variant="pill" />
          <c-switch class="mx-1" color="dark" checked label variant="pill" />
          <c-switch class="mx-1" color="primary" label variant="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline />
          <c-switch class="mx-1" color="secondary" checked label outline />
          <c-switch class="mx-1" color="success" checked label outline />
          <c-switch class="mx-1" color="warning" checked label outline />
          <c-switch class="mx-1" color="info" checked label outline />
          <c-switch class="mx-1" color="danger" checked label outline />
          <c-switch class="mx-1" color="light" checked label outline />
          <c-switch class="mx-1" color="dark" checked label outline />
          <c-switch class="mx-1" color="primary" label outline disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline variant="pill" />
          <c-switch class="mx-1" color="secondary" checked label outline variant="pill" />
          <c-switch class="mx-1" color="success" checked label outline variant="pill" />
          <c-switch class="mx-1" color="warning" checked label outline variant="pill" />
          <c-switch class="mx-1" color="info" checked label outline variant="pill" />
          <c-switch class="mx-1" color="danger" checked label outline variant="pill" />
          <c-switch class="mx-1" color="light" checked label outline variant="pill" />
          <c-switch class="mx-1" color="dark" checked label outline variant="pill" />
          <c-switch class="mx-1" color="primary" label outline variant="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline="alt" />
          <c-switch class="mx-1" color="secondary" checked label outline="alt" />
          <c-switch class="mx-1" color="success" checked label outline="alt" />
          <c-switch class="mx-1" color="warning" checked label outline="alt" />
          <c-switch class="mx-1" color="info" checked label outline="alt" />
          <c-switch class="mx-1" color="danger" checked label outline="alt" />
          <c-switch class="mx-1" color="light" checked label outline="alt" />
          <c-switch class="mx-1" color="dark" checked label outline="alt" />
          <c-switch class="mx-1" color="primary" label outline="alt" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="secondary" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="success" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="warning" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="info" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="danger" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="light" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="dark" checked label outline="alt" variant="pill" />
          <c-switch class="mx-1" color="primary" label outline="alt" variant="pill" disabled />
        </b-card>
      </b-col>

      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label dataOn="yes" dataOff="no"/>
          <c-switch class="mx-1" color="secondary" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label variant="pill"</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label variant="pill" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label outline v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label outline disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label outline variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label outline variant="pill" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="secondary" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label outline="alt" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" color="primary" checked label outline="alt" variant="pill" v-bind="labelTxt" />
          <c-switch class="mx-1" color="secondary" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="success" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="warning" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="info" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="danger" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="light" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="dark" checked label outline="alt" variant="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" color="primary" label outline="alt" variant="pill" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>

      <b-col md="12">
        <b-card no-body>
          <div slot="header">
            Sizes
          </div>
          <b-card-body class="p-0">
            <b-table hover striped responsive="sm" class="table-align-middle mb-0" :items="items" :fields="fields">
              <template slot="example" slot-scope="data">
                <c-switch :variant="data.value.variant" :color="data.value.color" :size="data.value.size" :checked="data.value.checked"/>
              </template>
              <template slot="size_prop" slot-scope="data">
                <span v-html="data.item.size_prop"></span>
              </template>
            </b-table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Switch as cSwitch } from '@coreui/vue'

export default {
  name: 'switches',
  components: {
    cSwitch
  },
  data: () => {
    return {
      fields: [
        {key: 'size'},
        {key: 'example'},
        {key: 'size_prop', label: 'Size prop'}
      ],
      items: [
        {size: 'Large', example: {variant: '3d', color: 'primary', size: 'lg', checked: true}, size_prop: 'Add following prop <code>size="lg"</code>'},
        {size: 'Normal', example: {variant: '3d', color: 'primary', size: '', checked: true}, size_prop: '-'},
        {size: 'Small', example: {variant: '3d', color: 'primary', size: 'sm', checked: true}, size_prop: 'Add following prop <code>size="sm"</code>'}
      ],
      checker: 'yes',
      picker: '',
      labelIcon: {
        dataOn: '\u2713',
        dataOff: '\u2715'
      },
      labelTxt: {
        dataOn: 'yes',
        dataOff: 'no'
      }
    }
  }
}
</script>
