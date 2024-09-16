
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl:'https://carbmanager.com',
    setupNodeEvents(on, config)
     {

    },
   // baseUrl: 'https://reqres.in/api', // Set the base URL
    screenshotOnRunFailure: true, // Take screenshots on test failure
    video: false, // Disable video recording
    viewportWidth: 1280, // Customize viewport width
    viewportHeight: 720, // Customize viewport height
    specPattern: "cypress/e2e/**/*.spec.js", // Path to your test files
    supportFile: "cypress/support/index.js", // Path to your support file
    fixturesFolder: "cypress/fixtures", // Path to your fixture files
    
  },
   videosFolder: "cypress/videos", // Path to video recordings
    screenshotsFolder: "cypress/screenshots", // Path to screenshots
    chromeWebSecurity: false,  
  },
);