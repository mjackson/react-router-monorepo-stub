module.exports = {
  globals: {
    __DEV__: true
  },
  testMatch: ["**/__tests__/**/*-test.js"],

  // For some reason Jest is not able to find and use our
  // Babel config in modules/.babelrc without this custom
  // transform, but adding this fixes it... ?
  transform: {
    "\\.js$": "./jest-transformer.js"
  }
};
