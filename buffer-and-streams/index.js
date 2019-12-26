const fs = require("fs");

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = fs.createReadStream("./test.txt", { encoding: "utf-8" });

logChunks(readable);
