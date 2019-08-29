module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  globals: {},
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  notify: false,
  notifyMode: 'always',
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/src/**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    "^lodash-es$": "lodash"
  }
};
