// Libs
import { defineConfig } from 'cypress'

// Test config
export default defineConfig({
  env: {
    apiUrl: 'http://localhost:3000/api',
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1024,
  viewportHeight: 600,
  e2e: {
    video: false,
    screenshotsFolder: false,
    screenshotOnRunFailure: false,
    supportFile: 'tests/support/e2e.ts',
    specPattern: 'tests/e2e/**/*.test.ts',
    baseUrl: 'http://localhost:3000',
  },
})
