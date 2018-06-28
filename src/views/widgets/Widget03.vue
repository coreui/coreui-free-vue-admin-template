<template>
  <div class={classes}>
    <div class={classCardHeader}>
      <i class={icon}></i>
      {children}
    </div>
    <div class={classCardBody}>
      <div>
        <div class="text-value">{vals[1]}</div>
        <div class="text-uppercase text-muted small">{keys[1]}</div>
      </div>
      <div>
        <div class="text-value">{vals[2]}</div>
        <div class="text-uppercase text-muted small">{keys[2]}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget03',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  }
}
</script>

