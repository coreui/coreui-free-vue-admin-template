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
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    '<rootDir>/tests/unit/Dashboard.spec.js'
  ],
  verbose: true,
  testURL: "http://localhost/",
  collectCoverage: true,
  collectCoverageFrom: [
      "src/**/*.{js,vue}",
      "!**/node_modules/**"
  ],
  coverageReporters: ["html", "text-summary"]
}
