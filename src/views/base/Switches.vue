<template>
  <div class="animated fadeIn">
    <!-- <p>myFlag1: {{radio}}</p>
    <p>myFlag1: {{myFlag1}}</p>
    <p>myFlag2: {{myFlag2}}</p>
    <CSwitch v-model="myFlag1"/>
    <CSwitch v-model="myFlag2" checked @change="test" /> -->
    <b-row>
      <b-col xs="12" md="6">
        <b-card v-if="true">
          <div slot="header">
            <h5>
               Radio switches
              <b-badge :variant="radio" class="mr-auto">{{radio}}</b-badge>
              <b-badge variant="danger" class="float-right">NEW</b-badge>
            </h5>
          </div>
          <!-- <CSwitch class="mx-1" variant="primary" shape="3d" outline="alt" v-bind="labelIcon" type="radio" name="radio" v-model="radio" trueValue="primary"/> -->
          <CSwitch class="mx-1"
                   :key="key"
                   :variant="variant"
                   shape="3d"
                   outline="alt"
                   v-bind="labelIcon"
                   type="radio"
                   name="radio"
                   v-model="radio"
                   :value="variant"
                   v-for="(variant, key) in ['primary','secondary','warning','success','info','danger','light','dark']"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch default
            <b-badge variant="primary">{{checker}}</b-badge>
          </div>
          <CSwitch class="mx-1"
            variant="primary"
            checked
            name="switch1"
            v-model="checker"
            value="someValue"
            trueValue="yes"
            falseValue="no"
          />
          <CSwitch class="mx-1"
            ref="totest"
            variant="primary"
            checked
            name="switch1"
            :checked="true"
            value="someValue"
          />
          <CSwitch class="mx-1"
                   :variant="variant"
                   checked
                   :key="key"
                   v-for="(variant, key) in ['secondary', 'success','warning','info','danger','light','dark','primary']"
          />
          <CSwitch class="mx-1" variant="primary" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch pills
          </div>
          <c-switch class="mx-1" variant="primary" checked  shape="pill"/>
          <c-switch class="mx-1" variant="secondary" checked  shape="pill" />
          <c-switch class="mx-1" variant="success" checked  shape="pill" />
          <c-switch class="mx-1" variant="warning" checked  shape="pill" />
          <c-switch class="mx-1" variant="info" checked  shape="pill" />
          <c-switch class="mx-1" variant="danger" checked  shape="pill" />
          <c-switch class="mx-1" variant="light" checked  shape="pill" />
          <c-switch class="mx-1" variant="dark" checked  shape="pill" />
          <c-switch class="mx-1" variant="primary" disabled  shape="pill" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch
          </div>
          <c-switch class="mx-1" variant="primary" checked   shape="3d" />
          <c-switch class="mx-1" variant="secondary" checked   shape="3d" />
          <c-switch class="mx-1" variant="success" checked   shape="3d" />
          <c-switch class="mx-1" variant="warning" checked   shape="3d" />
          <c-switch class="mx-1" variant="info" checked   shape="3d" />
          <c-switch class="mx-1" variant="danger" checked   shape="3d" />
          <c-switch class="mx-1" variant="light" checked   shape="3d" />
          <c-switch class="mx-1" variant="dark" checked   shape="3d" />
          <c-switch class="mx-1" variant="primary" disabled   shape="3d" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>disabled</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="secondary" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="success" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="warning" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="info" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="danger" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="light" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="dark" checked shape="3d" disabled />
          <c-switch class="mx-1" variant="primary" disabled shape="3d" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="success" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="warning" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="info" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="danger" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="light" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="dark" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" shape="3d" checked v-bind="labelIcon"/>
          <c-switch class="mx-1" variant="secondary" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked shape="3d" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" disabled shape="3d" v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked   shape="3d" outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            3d Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="success" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="warning" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="info" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="danger" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="light" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="dark" checked   shape="3d" outline="alt" />
          <c-switch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline />
          <c-switch class="mx-1" variant="secondary" checked outline />
          <c-switch class="mx-1" variant="success" checked outline />
          <c-switch class="mx-1" variant="warning" checked outline />
          <c-switch class="mx-1" variant="info" checked outline />
          <c-switch class="mx-1" variant="danger" checked outline />
          <c-switch class="mx-1" variant="light" checked outline />
          <c-switch class="mx-1" variant="dark" checked outline />
          <c-switch class="mx-1" variant="primary" outline disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline  shape="pill"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline  shape="pill"/>
          <c-switch class="mx-1" variant="secondary" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="success" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="warning" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="info" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="danger" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="light" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="dark" checked outline  shape="pill" />
          <c-switch class="mx-1" variant="primary" outline  shape="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline="alt"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" />
          <c-switch class="mx-1" variant="secondary" checked outline="alt" />
          <c-switch class="mx-1" variant="success" checked outline="alt" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" />
          <c-switch class="mx-1" variant="info" checked outline="alt" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" />
          <c-switch class="mx-1" variant="light" checked outline="alt" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" />
          <c-switch class="mx-1" variant="primary" outline="alt" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>outline="alt"  shape="pill"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" shape="pill"/>
          <c-switch class="mx-1" variant="secondary" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="success" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="info" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="light" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="primary" outline="alt" shape="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked />
          <c-switch class="mx-1" variant="secondary" checked />
          <c-switch class="mx-1" variant="success" checked />
          <c-switch class="mx-1" variant="warning" checked />
          <c-switch class="mx-1" variant="info" checked />
          <c-switch class="mx-1" variant="danger" checked />
          <c-switch class="mx-1" variant="light" checked />
          <c-switch class="mx-1" variant="dark" checked />
          <c-switch class="mx-1" variant="primary" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label  shape="pill"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked shape="pill" />
          <c-switch class="mx-1" variant="secondary" checked shape="pill" />
          <c-switch class="mx-1" variant="success" checked shape="pill" />
          <c-switch class="mx-1" variant="warning" checked shape="pill" />
          <c-switch class="mx-1" variant="info" checked shape="pill" />
          <c-switch class="mx-1" variant="danger" checked shape="pill" />
          <c-switch class="mx-1" variant="light" checked shape="pill" />
          <c-switch class="mx-1" variant="dark" checked shape="pill" />
          <c-switch class="mx-1" variant="primary" shape="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline />
          <c-switch class="mx-1" variant="secondary" checked outline />
          <c-switch class="mx-1" variant="success" checked outline />
          <c-switch class="mx-1" variant="warning" checked outline />
          <c-switch class="mx-1" variant="info" checked outline />
          <c-switch class="mx-1" variant="danger" checked outline />
          <c-switch class="mx-1" variant="light" checked outline />
          <c-switch class="mx-1" variant="dark" checked outline />
          <c-switch class="mx-1" variant="primary" outline disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline shape="pill" />
          <c-switch class="mx-1" variant="secondary" checked outline shape="pill" />
          <c-switch class="mx-1" variant="success" checked outline shape="pill" />
          <c-switch class="mx-1" variant="warning" checked outline shape="pill" />
          <c-switch class="mx-1" variant="info" checked outline shape="pill" />
          <c-switch class="mx-1" variant="danger" checked outline shape="pill" />
          <c-switch class="mx-1" variant="light" checked outline shape="pill" />
          <c-switch class="mx-1" variant="dark" checked outline shape="pill" />
          <c-switch class="mx-1" variant="primary" outline shape="pill" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" />
          <c-switch class="mx-1" variant="secondary" checked outline="alt" />
          <c-switch class="mx-1" variant="success" checked outline="alt" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" />
          <c-switch class="mx-1" variant="info" checked outline="alt" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" />
          <c-switch class="mx-1" variant="light" checked outline="alt" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" />
          <c-switch class="mx-1" variant="primary" outline="alt" disabled />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="secondary" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="success" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="info" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="light" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" shape="pill" />
          <c-switch class="mx-1" variant="primary" outline="alt" shape="pill" disabled />
        </b-card>
      </b-col>

      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked dataOn="" dataOff=""/>
          <c-switch class="mx-1" variant="secondary" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" disabled v-bind="labelIcon" />
        </b-card>shape
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label  shape="pill"</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="secondary" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" shape="pill" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="secondary" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked outline v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" outline disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="secondary" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked outline shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" outline shape="pill" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="secondary" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" outline="alt" disabled v-bind="labelIcon" />
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            Switch <small><code>label outline</code></small>
          </div>
          <c-switch class="mx-1" variant="primary" checked outline="alt" shape="pill" v-bind="labelTxt" />
          <c-switch class="mx-1" variant="secondary" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="success" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="warning" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="info" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="danger" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="light" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="dark" checked outline="alt" shape="pill" v-bind="labelIcon" />
          <c-switch class="mx-1" variant="primary" outline="alt" shape="pill" disabled v-bind="labelIcon" />
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
// import CSwitch from './CSwitch'

export default {
  name: 'switches',
  computed: {
    icon (icon) {
      return icon
    }
  },
  // components: {
  //   CSwitch
  // },
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
      radio: 'primary',
      radio2: 'warning',
      myFlag1: true,
      myFlag2: false,
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
  },
  methods: {
    test (a, event) {
      console.log(a)
      console.log(typeof a)
      console.log(event)
    },
    test2 () {
      console.log(this.$refs.totest)
      this.$refs.totest.$forceUpdate()
    }
  }
}
</script>
