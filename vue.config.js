const { DefinePlugin } = require('webpack')
const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const coreuiLibraryShortVersion =
  JSON.parse(packageJson).config.coreui_library_short_version || ''

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env': {
          COREUI_LIBRARY_SHORT_VERSION: '"' + coreuiLibraryShortVersion + '"',
        },
      }),
    ],
  },
})
