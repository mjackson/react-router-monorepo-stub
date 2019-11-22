const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const args = process.argv.slice(2);
const target = args[0];
const packagesDir = path.resolve(__dirname, "../packages");
const packages = target ? [target] : fs.readdirSync(packagesDir);

packages.forEach(packageName => {
  process.chdir(path.join(packagesDir, packageName));
  exec("yarn run test");
});
