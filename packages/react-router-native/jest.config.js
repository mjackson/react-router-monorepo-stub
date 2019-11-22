module.exports = {
  globals: {
    __DEV__: true
  },
  preset: "react-native",
  testMatch: ["**/__tests__/**/*-test.js"],
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
};
