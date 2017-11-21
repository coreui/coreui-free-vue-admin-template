<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Options</strong>
          </div>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <b-button variant="primary">Primary</b-button>
          <!-- Secondary, outline button -->
          <b-button variant="secondary">Secondary</b-button>
          <!-- Indicates a successful or positive action -->
          <b-button variant="success">Success</b-button>
          <!-- Indicates caution should be taken with this action -->
          <b-button variant="warning">Warning</b-button>
          <!-- Indicates a dangerous or potentially negative action -->
          <b-button variant="danger">Danger</b-button>
          <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
          <b-button variant="link">Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>With Icons</strong>
          </div>
          <b-button variant="primary"><i class="fa fa-star"></i>&nbsp; Primary</b-button>
          <b-button variant="secondary"><i class="fa fa-lightbulb-o"></i>&nbsp; Secondary</b-button>
          <b-button variant="success"><i class="fa fa-magic"></i>&nbsp; Success</b-button>
          <b-button variant="warning"><i class="fa fa-map-marker"></i>&nbsp; Warning</b-button>
          <b-button variant="danger"><i class="fa fa-rss"></i>&nbsp; Danger</b-button>
          <b-button variant="link"><i class="fa fa-link"></i>&nbsp; Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
          </div>
          <b-button size="lg" variant="primary">Primary</b-button>
          <b-button size="lg" variant="secondary">Secondary</b-button>
          <b-button size="lg" variant="success">Success</b-button>
          <b-button size="lg" variant="info">Info</b-button>
          <b-button size="lg" variant="warning">Warning</b-button>
          <b-button size="lg" variant="danger">Danger</b-button>
          <b-button size="lg" variant="link">Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
          </div>
          <b-button size="sm" variant="primary">Primary</b-button>
          <b-button size="sm" variant="secondary">Secondary</b-button>
          <b-button size="sm" variant="success">Success</b-button>
          <b-button size="sm" variant="info">Info</b-button>
          <b-button size="sm" variant="warning">Warning</b-button>
          <b-button size="sm" variant="danger">Danger</b-button>
          <b-button size="sm" variant="link">Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
          </div>
          <b-button size="lg" variant="primary" :disabled="true">Primary</b-button>
          <b-button size="lg" variant="secondary" :disabled="true">Secondary</b-button>
          <b-button size="lg" variant="success" :disabled="true">Success</b-button>
          <b-button size="lg" variant="info" :disabled="true">Info</b-button>
          <b-button size="lg" variant="warning" :disabled="true">Warning</b-button>
          <b-button size="lg" variant="danger" :disabled="true">Danger</b-button>
          <b-button size="lg" variant="link" :disabled="true">Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
          </div>
          <b-button variant="primary" :active="true">Primary</b-button>
          <b-button variant="secondary" :active="true">Secondary</b-button>
          <b-button variant="success" :active="true">Success</b-button>
          <b-button variant="info" :active="true">Info</b-button>
          <b-button variant="warning" :active="true">Warning</b-button>
          <b-button variant="danger" :active="true">Danger</b-button>
          <b-button variant="link" :active="true">Link</b-button>
        </b-card>
        <b-card header-tag="header">
          <div slot="header">
            <strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
          </div>
          <b-button variant="primary" :pressed="true">Primary</b-button>
          <b-button variant="secondary" :pressed="true">Secondary</b-button>
          <b-button variant="success" :pressed="true">Success</b-button>
          <b-button variant="info" :pressed="true">Info</b-button>
          <b-button variant="warning" :pressed="true">Warning</b-button>
          <b-button variant="danger" :pressed="true">Danger</b-button>
          <b-button variant="link" :pressed="true">Link</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Toggle pressed state</strong>
          </div>
          <b-button variant="primary" :pressed.sync="myToggle">Primary {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="secondary" :pressed.sync="myToggle">Secondary {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="success" :pressed.sync="myToggle">Success {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="info" :pressed.sync="myToggle">Info {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="warning" :pressed.sync="myToggle">Warning {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="danger" :pressed.sync="myToggle">Danger {{myToggle ? 'On ' : 'Off'}}</b-button>
        </b-card>

        <b-card>
          <div slot="header">
            <strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
          </div>
          <b-button size="lg" variant="secondary" :block="true">Block level button</b-button>
          <b-button size="lg" variant="primary" :block="true">Block level button</b-button>
          <b-button size="lg" variant="success" :block="true">Block level button</b-button>
          <b-button size="lg" variant="info" :block="true">Block level button</b-button>
          <b-button size="lg" variant="warning" :block="true">Block level button</b-button>
          <b-button size="lg" variant="danger" :block="true">Block level button</b-button>
          <b-button size="lg" variant="link" :block="true">Block level button</b-button>
        </b-card>
      </b-col><!--/.col-->
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Options</strong>
          </div>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <b-button variant="outline-primary">Primary</b-button>
          <!-- Secondary, outline button -->
          <b-button variant="outline-secondary">Secondary</b-button>
          <!-- Indicates a successful or positive action -->
          <b-button variant="outline-success">Success</b-button>
          <!-- Indicates caution should be taken with this action -->
          <b-button variant="outline-warning">Warning</b-button>
          <!-- Indicates a dangerous or potentially negative action -->
          <b-button variant="outline-danger">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>With Icons</strong>
          </div>
          <b-button variant="outline-primary"><i class="fa fa-star"></i>&nbsp; Primary</b-button>
          <b-button variant="outline-secondary"><i class="fa fa-lightbulb-o"></i>&nbsp; Secondary</b-button>
          <b-button variant="outline-success"><i class="fa fa-magic"></i>&nbsp; Success</b-button>
          <b-button variant="outline-warning"><i class="fa fa-map-marker"></i>&nbsp; Warning</b-button>
          <b-button variant="outline-danger"><i class="fa fa-rss"></i>&nbsp; Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
          </div>
          <b-button size="lg" variant="outline-primary">Primary</b-button>
          <b-button size="lg" variant="outline-secondary">Secondary</b-button>
          <b-button size="lg" variant="outline-success">Success</b-button>
          <b-button size="lg" variant="outline-info">Info</b-button>
          <b-button size="lg" variant="outline-warning">Warning</b-button>
          <b-button size="lg" variant="outline-danger">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
          </div>
          <b-button size="sm" variant="outline-primary">Primary</b-button>
          <b-button size="sm" variant="outline-secondary">Secondary</b-button>
          <b-button size="sm" variant="outline-success">Success</b-button>
          <b-button size="sm" variant="outline-info">Info</b-button>
          <b-button size="sm" variant="outline-warning">Warning</b-button>
          <b-button size="sm" variant="outline-danger">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
          </div>
          <b-button variant="outline-primary" :disabled="true">Primary</b-button>
          <b-button variant="outline-secondary" :disabled="true">Secondary</b-button>
          <b-button variant="success" :disabled="true">Success</b-button>
          <b-button variant="outline-info" :disabled="true">Info</b-button>
          <b-button variant="outline-warning" :disabled="true">Warning</b-button>
          <b-button variant="outline-danger" :disabled="true">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
          </div>
          <b-button variant="outline-primary" :active="true">Primary</b-button>
          <b-button variant="outline-secondary" :active="true">Secondary</b-button>
          <b-button variant="outline-success" :active="true">Success</b-button>
          <b-button variant="outline-info" :active="true">Info</b-button>
          <b-button variant="outline-warning" :active="true">Warning</b-button>
          <b-button variant="outline-danger" :active="true">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
          </div>
          <b-button variant="outline-primary" :pressed="true">Primary</b-button>
          <b-button variant="outline-secondary" :pressed="true">Secondary</b-button>
          <b-button variant="outline-success" :pressed="true">Success</b-button>
          <b-button variant="outline-info" :pressed="true">Info</b-button>
          <b-button variant="outline-warning" :pressed="true">Warning</b-button>
          <b-button variant="outline-danger" :pressed="true">Danger</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Toggle pressed state</strong>
          </div>
          <b-button variant="outline-primary" :pressed.sync="myToggle">Primary {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="outline-secondary" :pressed.sync="myToggle">Secondary {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="outline-success" :pressed.sync="myToggle">Success {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="outline-info" :pressed.sync="myToggle">Info {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="outline-warning" :pressed.sync="myToggle">Warning {{myToggle ? 'On ' : 'Off'}}</b-button>
          <b-button variant="outline-danger" :pressed.sync="myToggle">Danger {{myToggle ? 'On ' : 'Off'}}</b-button>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
          </div>
          <b-button size="lg" variant="outline-secondary" :block="true">Block level button</b-button>
          <b-button size="lg" variant="outline-primary" :block="true">Block level button</b-button>
          <b-button size="lg" variant="outline-success" :block="true">Block level button</b-button>
          <b-button size="lg" variant="outline-info" :block="true">Block level button</b-button>
          <b-button size="lg" variant="outline-warning" :block="true">Block level button</b-button>
          <b-button size="lg" variant="outline-danger" :block="true">Block level button</b-button>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'buttons',
  data: () => {
    return { myToggle: false }
  }
}
</script>
