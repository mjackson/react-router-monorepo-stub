const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const packagesDir = path.resolve(__dirname, "../packages");

// react-router-native's build uses react-router's,
// so we need to build react-router first
process.chdir(path.join(packagesDir, "react-router"));
exec("yarn build");

process.chdir(path.join(packagesDir, "react-router-native"));
exec("yarn build");
