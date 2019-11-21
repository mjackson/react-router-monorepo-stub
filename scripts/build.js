const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

// react-router-native's build uses react-router's,
// so we need to build react-router first
process.chdir(__dirname + "/../packages/react-router");
exec("yarn build");

process.chdir(__dirname + "/../packages/react-router-native");
exec("yarn build");
