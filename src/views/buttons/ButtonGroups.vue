<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" >
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap button group</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/button-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <b-button-group>
                <b-button>One</b-button>
                <b-button>Two</b-button>
                <b-button>Three</b-button>
                <b-button>Four</b-button>
                <b-button class="d-sm-down-none">Five</b-button>
              </b-button-group>
              <br><br>
              <b-button-group>
                <b-button class="d-sm-down-none" variant="success">Success</b-button>
                <b-button variant="info">Info</b-button>
                <b-button variant="warning">Warn</b-button>
                <b-button class="d-sm-down-none" variant="primary">Primary</b-button>
                <b-button variant="danger">Danger</b-button>
                <b-button variant="link">Link</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>sizing
            </div>
            <div>
              <b-button-group>
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
              <br><br>
              <b-button-group size="sm">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
              <br><br>
              <b-button-group size="lg">
                <b-button>Left</b-button>
                <b-button>Middle</b-button>
                <b-button>Right</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>dropdown support
            </div>
            <div>
              <b-button-group>
                <b-button class="d-sm-down-none">Button 1</b-button>
                <b-button class="d-sm-down-none">Button 2</b-button>
                <b-dropdown right text="Menu" variant="success">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-button class="d-sm-down-none">Button 3</b-button>
                <b-dropdown right split text="Split Menu" variant="info">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Button group </strong>vertical variation
            </div>
            <div>
              <b-button-group vertical>
                <b-button>Top</b-button>
                <b-button>Middle</b-button>
                <b-button>Bottom</b-button>
              </b-button-group>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Button toolbar</strong> <small>with button groups</small>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/button-toolbar" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <b-button-toolbar key-nav aria-label="Toolbar with button groups">
                <b-button-group class="mx-1">
                  <b-btn class="d-sm-down-none">&laquo;</b-btn>
                  <b-btn>&lsaquo;</b-btn>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-btn class="d-sm-down-none">Edit</b-btn>
                  <b-btn>Undo</b-btn>
                  <b-btn>Redo</b-btn>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-btn>&rsaquo;</b-btn>
                  <b-btn class="d-sm-down-none">&raquo;</b-btn>
                </b-button-group>
              </b-button-toolbar>
            </div>
            <hr class="d-sm-down-none"/>
            <div>
              <b-button-toolbar aria-label="Toolbar with button groups and input groups" class="d-sm-down-none">
                <b-button-group size="sm" class="mx-1">
                  <b-btn>New</b-btn>
                  <b-btn>Edit</b-btn>
                </b-button-group>
                <b-input-group size="sm" class="w-25 mx-1">
                  <b-input-group-prepend>
                    <b-input-group-text>$</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input value="100" class="text-right"></b-form-input>
                  <b-input-group-append>
                    <b-input-group-text>.00</b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
                <b-input-group  size="sm" class="w-25 mx-1">
                  <b-input-group-prepend>
                    <b-input-group-text>Size</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-select value="Medium" :options="['Large','Medium','Small']"></b-form-select>
                </b-input-group>
                <b-button-group  size="sm" class="mx-1">
                  <b-btn>Save</b-btn>
                  <b-btn>Cancel</b-btn>
                </b-button-group>
              </b-button-toolbar>
            </div>
            <hr/>
            <div>
              <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                <b-button-group class="mx-1 d-sm-down-none">
                  <b-btn>New</b-btn>
                  <b-btn>Edit</b-btn>
                  <b-btn>Undo</b-btn>
                </b-button-group>
                <b-dropdown class="mx-1" right text="menu">
                  <b-dropdown-item>Item 1</b-dropdown-item>
                  <b-dropdown-item>Item 2</b-dropdown-item>
                  <b-dropdown-item>Item 3</b-dropdown-item>
                </b-dropdown>
                <b-button-group class="mx-1">
                  <b-btn>Save</b-btn>
                  <b-btn>Cancel</b-btn>
                </b-button-group>
              </b-button-toolbar>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-groups'
}
</script>
