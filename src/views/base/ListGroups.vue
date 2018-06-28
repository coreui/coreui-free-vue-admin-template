<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Bootstrap list group</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>active items</small>
            </div>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>disabled items</small>
            </div>
            <b-list-group>
              <b-list-group-item disabled>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>actionable items</small>
            </div>
            <b-list-group>
              <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
              <b-list-group-item href="#" active>Link with active state</b-list-group-item>
              <b-list-group-item href="#">Action links are easy</b-list-group-item>
              <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>buttons</small>
            </div>
            <b-list-group>
              <b-list-group-item button>Button item</b-list-group-item>
              <b-list-group-item button>I am a button</b-list-group-item>
              <b-list-group-item button disabled>Disabled button</b-list-group-item>
              <b-list-group-item button>This is a button too</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>with badges</small>
            </div>
            <b-list-group>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Cras justo odio
                <b-badge variant="primary" pill>14</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <b-badge variant="primary" pill>2</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                Morbi leo risus
                <b-badge variant="primary" pill>1</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>variants</small>
            </div>
            <b-list-group>
              <b-list-group-item>This is a default list group item</b-list-group-item>
              <b-list-group-item variant="primary">This is a primary list group item</b-list-group-item>
              <b-list-group-item variant="secondary">This is a secondary list group item</b-list-group-item>
              <b-list-group-item variant="success">This is a success list group item</b-list-group-item>
              <b-list-group-item variant="danger">This is a danger list group item</b-list-group-item>
              <b-list-group-item variant="warning">This is a warning list group item</b-list-group-item>
              <b-list-group-item variant="info">This is a info list group item</b-list-group-item>
              <b-list-group-item variant="light">This is a light list group item</b-list-group-item>
              <b-list-group-item variant="dark">This is a dark list group item</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>variants active</small>
            </div>
            <b-list-group>
              <b-list-group-item href="#">This is a default list group item</b-list-group-item>
              <b-list-group-item href="#" variant="primary">This is a primary list group item</b-list-group-item>
              <b-list-group-item href="#" variant="secondary">This is a secondary list group item</b-list-group-item>
              <b-list-group-item href="#" variant="success">This is a success list group item</b-list-group-item>
              <b-list-group-item href="#" variant="danger">This is a danger list group item</b-list-group-item>
              <b-list-group-item href="#" variant="warning">This is a warning list group item</b-list-group-item>
              <b-list-group-item href="#" variant="info">This is a info list group item</b-list-group-item>
              <b-list-group-item href="#" variant="light">This is a light list group item</b-list-group-item>
              <b-list-group-item href="#" variant="dark">This is a dark list group item</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>inside cards</small>
            </div>
            <b-card-group deck>
              <b-card header="<b>Card with list group</b>">
                <b-list-group>
                  <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                  <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                  <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                </b-list-group>
                <p class="card-text mt-2">
                  Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                  nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                  consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                  ad sit ipsum anim Lorem.
                </p>
              </b-card>
              <b-card no-body header="<b>Card with flush list group</b>">
                <b-list-group flush>
                  <b-list-group-item href="#">Cras justo odio</b-list-group-item>
                  <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
                  <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
                </b-list-group>
                <b-card-body>
                  Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                  nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
                  consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
                  ad sit ipsum anim Lorem.
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>List group</strong> <small>custom content</small>
            </div>
            <b-list-group>
              <b-list-group-item href="#" active class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
              </b-list-group-item>
              <b-list-group-item href="#" class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </b-list-group-item>
              <b-list-group-item href="#" disabled class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Disabled List group item</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas
                  sed diam eget risus varius blandit.
                </p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-groups'
}
</script>

