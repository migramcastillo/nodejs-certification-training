//  Source https://www.cuelogic.com/blog/nodejs-streams
const fs = require("fs");
const readableStream = fs.createReadStream("./long-text.txt");

let data = "";
let chunk;
let iterationCounter = 0;

readableStream.on("readable", () => {
  //  Read data in chunks
  while ((chunk = readableStream.read()) != null) {
    data += chunk;

    //  Show every chunk iteration with its buffer size
    console.log(
      "\x1b[36m%s\x1b[0m",
      `------------- Reading chunk, iteration Nº ${iterationCounter} ----------------`
    );
    console.log("Buffer size: ", chunk.length);
    iterationCounter++;
  }
});

readableStream.on("end", () => {
  // Show when the reading finishes
  console.log("Readable stream has finished");
});
