const base = require('./jest.config.base.js');

module.export = {
  ...base,
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  collectCoverageFrom: ['**/src/**/*.js', '**/src/**/*.ts', '**/src/**/*.tsx', '!**/playground/**/*.*'],
};
