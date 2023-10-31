const { defineConfig } = require("cypress");
// require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e'
    },
  experimentalModifyObstructiveThirdPartyCode: true,
});
