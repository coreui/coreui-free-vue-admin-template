const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production' ? '/demos/vue/4.2/free/' : '/',
  transpileDependencies: true,
})
