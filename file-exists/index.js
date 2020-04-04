/*
  This is an example of how to replace the fs.exists deprectaed API
 */
const fs = require("fs");

const exists = file =>
  new Promise((resolve, reject) => {
    fs.access(file, err => {
      if (err) {
        if (err.code !== "ENOENT") {
          return reject(err);
        }

        return resolve({ file, exists: false });
      }

      resolve({ file, exists: true });
    });
  });

exists(process.argv[2])
  .then(({ file, exists }) => {
    console.log(`File ${file} ${exists ? "does exist" : "doesnt exist"}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
