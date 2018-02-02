<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Bootstrap Collapse</strong>
              <div class="card-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/collapse" target="_blank"><small class="text-muted">docs</small></a>
              </div>
            </div>
            <div>
              <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
              <b-collapse id="collapse1" class="mt-2">
                <b-card>
                  <p class="card-text">Collapse contents Here</p>
                  <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                  <b-collapse id=collapse1_inner class="mt-2">
                    <b-card>Hello!</b-card>
                  </b-collapse>
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Collapse</strong> <small>with<code>v-b-toggle</code>directive</small>
            </div>
            <div>
              <!-- Using modifiers -->
              <b-btn v-b-toggle.collapse2 class="m-1">Toggle Collapse</b-btn>

              <!-- Using value -->
              <b-btn v-b-toggle="'collapse2'" class="m-1">Toggle Collapse</b-btn>

              <!-- element to collapse -->
              <b-collapse id="collapse2">
                <b-card>
                  I am collapsible content!
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Collapse</strong> <small>with<code>visibility</code></small>
            </div>
            <div>
              <b-btn v-b-toggle.collapse3 class="m-1">Toggle Collapse</b-btn>
              <b-collapse visible id="collapse3">
                <b-card>
                  I should start open!
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Collapse</strong> <small>with<code>v-model</code></small>
            </div>
            <div>
              <b-btn @click="showCollapse = !showCollapse"
                     :class="showCollapse ? 'collapsed' : null"
                     aria-controls="collapse4"
                     :aria-expanded="showCollapse ? 'true' : 'false'">
                Toggle Collapse
              </b-btn>
              <b-collapse class="mt-2" v-model="showCollapse" id="collapse4">
                <b-card>
                  I should start open!
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Collapse</strong> <small>multiple elements</small>
            </div>
            <div>
              <!-- Single button triggers two b-collapse components -->
              <b-btn v-b-toggle.collapseA.collapseB>Toggle Both Collapse A and B</b-btn>

              <!-- elements to collapse -->
              <b-collapse id="collapseA" class="mt-2">
                <b-card>
                  I am collapsable content A!
                </b-card>
              </b-collapse>
              <b-collapse id="collapseB" class="mt-2">
                <b-card>
                  I am collapsable content B!
                </b-card>
              </b-collapse>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Collapse</strong><small><code>accordion</code>support</small>
            </div>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      I start opened because <code>visible</code> is <code>true</code>
                    </p>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-card>
        </b-col>

      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collapses',
    data () {
      return {
        showCollapse: true,
        text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
      }
    }
  }
</script>
