//  Source: https://www.cuelogic.com/blog/nodejs-streams

const fs = require("fs");
const zlib = require("zlib");

// You can chain pipe methods, this pipes content to a brotli compress file
fs.createReadStream("./test.txt")
  .pipe(zlib.createBrotliCompress())
  .pipe(fs.createWriteStream("./test.txt.br"));

console.log("Your file has been compressed with brotli encoding");
