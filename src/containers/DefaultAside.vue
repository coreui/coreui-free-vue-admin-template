<template>
  <CTabs>
    <CTab active>
      <template slot="title">
        <i class="icon-list"></i>
      </template>
      <CListGroup class="list-group-accent">
        <CListGroupItem class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Today
        </CListGroupItem>
        <CListGroupItem href="#" class="list-group-item-accent-warning list-group-item-divider">
          <div class="avatar float-right">
            <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">
          </div>
          <div>Meeting with
            <strong>Lucas</strong>
          </div>
          <small class="text-muted mr-3">
            <i class="icon-calendar"></i>&nbsp;&nbsp;1 - 3pm
          </small>
          <small class="text-muted">
            <i class="icon-location-pin"></i>&nbsp;&nbsp;Palo Alto, CA
          </small>
        </CListGroupItem>
        <CListGroupItem href="#" class="list-group-item-accent-info">
          <div class="avatar float-right">
            <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
          </div>
          <div>Skype with <strong>Megan</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;4 - 5pm</small>
          <small class="text-muted"><i class="icon-social-skype"></i>&nbsp;&nbsp;On-line</small>
        </CListGroupItem>
        <hr class="transparent mx-3 my-0">
        <CListGroupItem class="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
          Tomorrow
        </CListGroupItem>
        <CListGroupItem href="#" class="list-group-item-accent-danger list-group-item-divider">
          <div>New UI Project - <strong>deadline</strong>
          </div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp;&nbsp;10 - 11pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp;&nbsp;creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/2.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/3.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/5.jpg" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img class="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </CListGroupItem>
        <CListGroupItem href="#" class="list-group-item-accent-success list-group-item-divider">
          <div><strong>#10 Startups.Garden</strong> Meetup</div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
          <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
        </CListGroupItem>
        <CListGroupItem href="#" class="list-group-item-accent-primary list-group-item-divider">
          <div><strong>Team meeting</strong></div>
          <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 4 - 6pm</small>
          <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ</small>
          <div class="avatars-stack mt-2">
            <div class="avatar avatar-xs">
              <img src="img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
            <div class="avatar avatar-xs">
              <img src="img/avatars/8.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
            </div>
          </div>
        </CListGroupItem>
      </CListGroup>
    </CTab>
    <CTab>
      <template slot="title">
        <i class='icon-speech'></i>
      </template>
      <div class="p-3">
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <CBadge variant="success" class="avatar-status"/>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <CBadge variant="danger" class="avatar-status"></CBadge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <CBadge variant="info" class="avatar-status"></CBadge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <CBadge variant="warning" class="avatar-status"></CBadge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
        <hr>
        <div class="message">
          <div class="py-3 pb-5 mr-3 float-left">
            <div class="avatar">
              <img src="img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              <CBadge variant="dark" class="avatar-status"></CBadge>
            </div>
          </div>
          <div>
            <small class="text-muted">Lukasz Holeczek</small>
            <small class="text-muted float-right mt-1">1:52 PM</small>
          </div>
          <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
          <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
        </div>
      </div>
    </CTab>
    <CTab>
      <template slot="title">
        <i class='icon-settings'></i>
      </template>
      <div class="p-3">
        <h6>Settings</h6>
        <div class="aside-options">
          <div class="clearfix mt-4">
            <small><b>Option 1</b></small>
            <CSwitch variant="success" label shape="pill" size="sm" class="float-right" checked />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 2</b></small>
            <CSwitch variant="success" label shape="pill" size="sm" class="float-right" />
          </div>
          <div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 3</b></small>
            <CSwitch variant="success" label shape="pill" size="sm" class="float-right" disabled defaultChecked/>
          </div>
          <div>
            <small class="text-muted">Disabled option.</small>
          </div>
        </div>
        <div class="aside-options">
          <div class="clearfix mt-3">
            <small><b>Option 4</b></small>
            <CSwitch variant="success" label shape="pill" size="sm" class="float-right" checked />
          </div>
        </div>
        <hr>
        <h6>System Utilization</h6>
        <div class="text-uppercase mb-1 mt-4">
          <small><b>CPU Usage</b></small>
        </div>
        <CProgress  class="progress-xs" variant="info" :value="25"></CProgress>
        <small class="text-muted">348 Processes. 1/4 Cores.</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>Memory Usage</b></small>
        </div>
        <CProgress  class="progress-xs" variant="warning" :value="70"></CProgress>
        <small class="text-muted">11444GB/16384MB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 1 Usage</b></small>
        </div>
        <CProgress  class="progress-xs" variant="danger" :value="95"></CProgress>
        <small class="text-muted">243GB/256GB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small><b>SSD 2 Usage</b></small>
        </div>
        <CProgress  class="progress-xs" variant="success" :value="10"></CProgress>
        <small class="text-muted">25GB/256GB</small>
      </div>
    </CTab>
  </CTabs>
</template>

<script>
export default {
  name: 'DefaultAside',
}
</script>
