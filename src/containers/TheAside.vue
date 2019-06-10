<template>
  <CSidebar aside fixed light :display="false">
    <CTabs add-tab-classes="c-p-0">
      <CTab active>
        <template slot="title">
          <i class="cui-list"></i>
        </template>
        <CListGroup class="c-list-group-accent">
          <CListGroupItem
            class="c-list-group-item-accent-secondary c-bg-light c-text-center c-font-weight-bold c-text-muted c-text-uppercase c-small"
          >
            Today
          </CListGroupItem>
          <CListGroupItem href="#" class="c-list-group-item-accent-warning c-list-group-item-divider">
            <div class="c-avatar c-float-right">
              <img class="c-img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div>Meeting with
              <strong>Lucas</strong>
            </div>
            <small class="c-text-muted c-mr-3">
              <i class="cui-calendar"></i>&nbsp;&nbsp;1 - 3pm
            </small>
            <small class="c-text-muted">
              <i class="cui-location-pin"></i>&nbsp;&nbsp;Palo Alto, CA
            </small>
          </CListGroupItem>
          <CListGroupItem href="#" class="c-list-group-item-accent-info">
            <div class="c-avatar c-float-right">
              <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div>Skype with <strong>Megan</strong>
            </div>
            <small class="c-text-muted mr-3">
              <i class="cui-calendar"></i>&nbsp;&nbsp;4 - 5pm
            </small>
            <small class="c-text-muted">
              <CIcon name="socialSkype" height="11"/></i>&nbsp;&nbsp;On-line
            </small>
          </CListGroupItem>
          <hr class="c-transparent c-mx-3 c-my-0">
          <CListGroupItem class="c-list-group-item-accent-secondary c-bg-light c-text-center c-font-weight-bold c-text-muted c-text-uppercase c-small">
            Tomorrow
          </CListGroupItem>
          <CListGroupItem href="#" class="c-list-group-item-accent-danger c-list-group-item-divider">
            <div>New UI Project - <strong>deadline</strong>
            </div>
            <small class="c-text-muted c-mr-3"><i class="cui-calendar"></i>&nbsp;&nbsp;10 - 11pm</small>
            <small class="c-text-muted"><i class="cui-home"></i>&nbsp;&nbsp;creativeLabs HQ</small>
            <div class="c-avatars-stack c-mt-2">
              <div class="c-avatar c-avatar-xs">
                <img class="c-img-avatar" src="img/avatars/2.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img class="c-img-avatar" src="img/avatars/3.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img class="c-img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img class="c-img-avatar" src="img/avatars/5.jpg" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img class="c-img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com">
              </div>
            </div>
          </CListGroupItem>
          <CListGroupItem href="#" class="c-list-group-item-accent-success c-list-group-item-divider">
            <div><strong>#10 Startups.Garden</strong> Meetup</div>
            <small class="c-text-muted c-mr-3"><i class="cui-calendar"></i>&nbsp; 1 - 3pm</small>
            <small class="c-text-muted"><i class="cui-location-pin"></i>&nbsp; Palo Alto, CA</small>
          </CListGroupItem>
          <CListGroupItem href="#" class="c-list-group-item-accent-primary c-list-group-item-divider">
            <div><strong>Team meeting</strong></div>
            <small class="c-text-muted c-mr-3"><i class="cui-calendar"></i>&nbsp; 4 - 6pm</small>
            <small class="c-text-muted"><i class="cui-home"></i>&nbsp; creativeLabs HQ</small>
            <div class="c-avatars-stack c-mt-2">
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/2.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/3.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/4.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/5.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/6.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="c-avatar c-avatar-xs">
                <img src="img/avatars/8.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
              </div>
            </div>
          </CListGroupItem>
        </CListGroup>
      </CTab>
      <CTab>
        <template slot="title">
          <i class='cui-speech'></i>
        </template>
        <div class="c-p-3">
          <div class="c-message">
            <div class="c-py-3 c-pb-5 c-mr-3 c-float-left">
              <div class="c-avatar">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
                <CBadge variant="success" class="c-avatar-status"/>
              </div>
            </div>
            <div>
              <small class="c-text-muted">Lukasz Holeczek</small>
              <small class="c-text-muted c-float-right c-mt-1">1:52 PM</small>
            </div>
            <div class="c-text-truncate c-font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
          </div>
          <hr>
          <div class="c-message">
            <div class="c-py-3 c-pb-5 c-mr-3 c-float-left">
              <div class="c-avatar">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
                <CBadge variant="danger" class="c-avatar-status"></CBadge>
              </div>
            </div>
            <div>
              <small class="c-text-muted">Lukasz Holeczek</small>
              <small class="c-text-muted c-float-right c-mt-1">1:52 PM</small>
            </div>
            <div class="c-text-truncate c-font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
          </div>
          <hr>
          <div class="c-message">
            <div class="c-py-3 c-pb-5 c-mr-3 c-float-left">
              <div class="c-avatar">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
                <CBadge variant="info" class="c-avatar-status"></CBadge>
              </div>
            </div>
            <div>
              <small class="c-text-muted">Lukasz Holeczek</small>
              <small class="c-text-muted c-float-right c-mt-1">1:52 PM</small>
            </div>
            <div class="c-text-truncate c-font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
          </div>
          <hr>
          <div class="c-message">
            <div class="c-py-3 c-pb-5 c-mr-3 c-float-left">
              <div class="c-avatar">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
                <CBadge variant="warning" class="c-avatar-status"></CBadge>
              </div>
            </div>
            <div>
              <small class="c-text-muted">Lukasz Holeczek</small>
              <small class="c-text-muted c-float-right c-mt-1">1:52 PM</small>
            </div>
            <div class="c-text-truncate c-font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
          </div>
          <hr>
          <div class="c-message">
            <div class="c-py-3 c-pb-5 c-mr-3 c-float-left">
              <div class="c-avatar">
                <img src="img/avatars/7.jpg" class="c-img-avatar" alt="admin@bootstrapmaster.com">
                <CBadge variant="dark" class="c-avatar-status"></CBadge>
              </div>
            </div>
            <div>
              <small class="c-text-muted">Lukasz Holeczek</small>
              <small class="c-text-muted c-float-right c-mt-1">1:52 PM</small>
            </div>
            <div class="c-text-truncate c-font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
          </div>
        </div>
      </CTab>
      <CTab>
        <template slot="title">
          <i class="cui-settings"></i>
        </template>
        <div class="c-p-3">
          <h6>Settings</h6>
          <div class="c-aside-options">
            <div class="c-clearfix c-mt-4">
              <small><b>Option 1</b></small>
              <CSwitch variant="success" label shape="pill" size="sm" class="c-float-right" checked />
            </div>
            <div>
              <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
            </div>
          </div>
          <div class="c-aside-options">
            <div class="c-clearfix c-mt-3">
              <small><b>Option 2</b></small>
              <CSwitch variant="success" label shape="pill" size="sm" class="c-float-right" />
            </div>
            <div>
              <small class="c-text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
            </div>
          </div>
          <div class="c-aside-options">
            <div class="c-clearfix c-mt-3">
              <small><b>Option 3</b></small>
              <CSwitch variant="success" label shape="pill" size="sm" class="c-float-right" disabled default-checked/>
            </div>
            <div>
              <small class="c-text-muted">Disabled option.</small>
            </div>
          </div>
          <div class="c-aside-options">
            <div class="c-clearfix c-mt-3">
              <small><b>Option 4</b></small>
              <CSwitch variant="success" label shape="pill" size="sm" class="c-float-right" checked />
            </div>
          </div>
          <hr>
          <h6>System Utilization</h6>
          <div class="c-text-uppercase c-mb-1 c-mt-4">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress class="c-progress-xs" variant="info" :value="25"/>
          <small class="c-text-muted">348 Processes. 1/4 Cores.</small>
          <div class="c-text-uppercase c-mb-1 c-mt-2">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress class="c-progress-xs" variant="warning" :value="70"/>
          <small class="c-text-muted">11444GB/16384MB</small>
          <div class="c-text-uppercase c-mb-1 c-mt-2">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress class="c-progress-xs" variant="danger" :value="95"/>
          <small class="c-text-muted">243GB/256GB</small>
          <div class="c-text-uppercase c-mb-1 c-mt-2">
            <small><b>SSD 2 Usage</b></small>
          </div>
          <CProgress class="c-progress-xs" variant="success" :value="10"></CProgress>
          <small class="c-text-muted">25GB/256GB</small>
        </div>
      </CTab>
    </CTabs>
  </CSidebar>
</template>

<script>
export default {
  name: 'TheAside',
}
</script>
