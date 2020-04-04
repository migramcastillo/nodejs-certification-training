/*
  Example executing spawn with the shell option
 */
const { spawn } = require("child_process");

const child = spawn("find . -type f | wc -l", {
  stdio: "inherit",
  shell: true
  // cwd: "path to the folder that you want to list"
});

child.on("error", err => {
  console.error(`Error on child process:`, err);
});
