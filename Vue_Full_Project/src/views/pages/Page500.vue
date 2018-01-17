<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">500</h1>
            <h4 class="pt-3">Houston, we have a problem!</h4>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
          </div>
          <b-input-group>
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-search"></i>
              </span>
            </div>
            <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">
            <div class="input-group-append">
              <b-button variant="info">Search</b-button>
            </div>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page500'
}
</script>
