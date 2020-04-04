/*
  Example serving generating a serving a big file with streams using pump,
  this is a good example of how NodeJS streams perfromance works
 */
const fs = require("fs");
const http = require("http");
const pump = require("pump");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./big.file");
  pump(stream, res, done);
});

function done(err) {
  if (err) {
    return console.error("File was not fully streamed to the user", err);
  }

  console.log("File was fully streamed to the user");
}

server.listen(3000);
