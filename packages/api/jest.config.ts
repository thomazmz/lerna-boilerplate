module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '**/node_modules/**',
    '**/index.ts',
  ],
  collectCoverageFrom: [
    '!**/node_modules/**',
    './src/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    'global': {
      'branches': 0,
      'functions': 0,
      'lines': 0,
      'statements': 0,
    }
  }
};