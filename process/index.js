/*
  This is an example of how to caught a process exception
 */
const fs = require("fs");

process.on("uncaughtException", (err, origin) => {
  process.stderr.write(
    `Caught exception: ${err}\n` + `Exception origin: ${origin}\n`
  );
  process.exit(1);
});

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("end");
});
