const fs = require("fs");

const readableStream = fs.createReadStream("./long-text.txt");
const writableStream = fs.createWriteStream("./long-text-edited.txt");

//  Encoding standar for special characters
readableStream.setEncoding("utf-8");

readableStream.on("data", chunk => {
  writableStream.write(chunk, "utf-8", () => {
    console.log("Chunk has been written on writable stream");
  });
});
