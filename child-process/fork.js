const { fork } = require("child_process");

console.log("Waiting for children to exec");

const childLimit = 4;

for (let index = 0; index < childLimit; index++) {
  const child = fork("./heavy.js", [], { silent: true });

  child.on("message", data => {
    process.stdout.write("Child Index " + index + ": " + data + "\n");
  });

  child.on("exit", () => {
    console.log("Child process has finished, the index was:" + index);
  });
}
