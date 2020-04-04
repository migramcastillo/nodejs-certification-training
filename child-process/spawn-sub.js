/*
  Executing child spawn with environment variables
 */
const { fork, spawn, exec } = require("child_process");
const child = spawn("node ./sub.js", {
  shell: true,
  env: {
    NODE_ENV: "production"
  }
});

child.on("error", err => {
  console.error(err);
});

child.stdout.on("data", data => {
  process.stdout.write(data);
});
