module.exports = {
  globals: {
    __DEV__: true
  },
  testMatch: ["**/__tests__/**/*-test.js"],
  transform: {
    "\\.js$": "./jest-transformer.js"
  }
};
