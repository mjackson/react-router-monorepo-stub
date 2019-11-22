const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const allPackages = fs.readdirSync(path.resolve(__dirname, "../packages"));
const target = process.argv[2];

if (target && !allPackages.includes(target)) {
  console.error(`Invalid package: ${target}`);
  process.exit(1);
}

exec(`jest --projects packages/${target || "*"}`);
