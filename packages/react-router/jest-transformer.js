const fs = require("fs");
const babelJest = require("babel-jest");

function getBabelrcConfig(file) {
  return JSON.parse(fs.readFileSync(file));
}

module.exports = babelJest.createTransformer(
  // For some reason babel-jest is not able to find and use
  // modules/.babelrc without this custom transformer. All
  // we are doing here is reading in the configuration that
  // it should have already found for us...
  getBabelrcConfig(__dirname + "/modules/.babelrc")
);
