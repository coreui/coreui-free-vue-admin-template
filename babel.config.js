module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise', // already default included now
        'es6.array.iterator', // already default included now
        'es6.symbol',
        'es6.object.assign'
      ]
    }]
  ]
}
