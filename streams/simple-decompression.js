//  Source: https://www.cuelogic.com/blog/nodejs-streams

const fs = require("fs");
const zlib = require("zlib");

// This line takes the test.txt.br file and decompress the content into test-decompressed.txt
fs.createReadStream("./test.txt.br")
  .pipe(zlib.createBrotliDecompress())
  .pipe(fs.createWriteStream("./test-decompressed.txt"));

console.log("Your file has been decompressed");
