module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@coreui/icons)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: ['<rootDir>/tests/unit/**/*.spec.js'],
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!**/node_modules/**'
  ],
  coverageReporters: ['html', 'text-summary']
}
