const { spawn } = require("child_process");

const child = spawn("node ./heavy-spawn.js", { shell: true });

child.stdout.on("data", data => {
  process.stdout.write(data);
});
