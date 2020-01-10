// Source: https://www.cuelogic.com/blog/nodejs-streams

const fs = require("fs");

//  Create readable stream
const readerStream = fs.createReadStream("./test.txt");
//  Create writable stream
const writerStream = fs.createWriteStream("./output.txt");

//  "Pipes" the content from test.txt to output.txt
readerStream.pipe(writerStream);

console.log(
  "Program Ended, check current directory and you should see output.txt file"
);
