module.exports = {
  preset: 'jest-playwright-preset',
  testTimeout: 10000,
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './playwright/test_results/html-report',
      filename: 'report.html',
      expand: true,
    }],
  ],
  testMatch: ['<rootDir>/playwright/e2e/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/playwright/node_modules/'],
};
