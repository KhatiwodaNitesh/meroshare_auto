require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://meroshare.cdsc.com.np/",
    env: { ...process.env },
  },
});

// // cypress.config.js
// require("dotenv").config({ path: ".env.ms" }); // <-- Add this line

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://meroshare.cdsc.com.np",
//     env: {
//       USER_NAME: process.env.USER_NAME,
//       PASSWORD: process.env.PASSWORD,
//       DP: process.env.DP,
//       MAX_IPO_PRICE: process.env.MAX_IPO_PRICE,
//       KITTA: process.env.KITTA,
//       CRN: process.env.CRN,
//       TRANSACTION_PIN: process.env.TRANSACTION_PIN,
//       BANK_NAME: process.env.BANK_NAME,
//       TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
//       TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
//     },
//     setupNodeEvents(on, config) {
//       return config;
//     },
//   },
// });
