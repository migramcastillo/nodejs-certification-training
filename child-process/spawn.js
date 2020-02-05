const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

//  This is the same as makes
//  find . -type f | wc -l
//  Pseudo code meaning: The exit of find.stoud will be the stdin arg of wc
find.stdout.pipe(wc.stdin);

wc.stdout.on("data", data => {
  console.log(`Number of files ${data}`);
});
