const fs = require("fs");
const babelJest = require("babel-jest");

function getBabelrcConfig(file) {
  return JSON.parse(fs.readFileSync(file));
}

module.exports = babelJest.createTransformer(
  getBabelrcConfig(__dirname + "/modules/.babelrc")
);
