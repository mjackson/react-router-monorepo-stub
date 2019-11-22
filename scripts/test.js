const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const packagesDir = path.resolve(__dirname, "../packages");
const allPackages = fs.readdirSync(packagesDir);

const args = process.argv.slice(2);
const target = args[0];

if (target && !allPackages.includes(target)) {
  console.error(`Invalid package: ${target}`);
  process.exit(1);
}

exec(`jest --projects packages/${target || "*"}`);
