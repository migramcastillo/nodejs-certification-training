/*
  This is an example taken from Node Cookbook: Actionable Solutions

  This is an example of how to watch a specific folder and listen for new files created
  in that folder
 */
const fs = require("fs");
const human = require("human-time");

const interval = 5007;
const file = process.argv[2];
var exists = false;

if (!file) {
  console.error("Supply a file");
  process.exit(1);
}

const created = ({ birthtime }) => {
  return !exists && Date.now() - birthtime < interval;
};

const missing = ({ birthtime, mtime, atime, ctime }) => {
  return !(birthtime | mtime | atime | ctime);
};

const updated = (cur, prv) => cur.mtime !== prv.mtime;

fs.watchFile(file, { interval }, (cur, prev) => {
  if (missing(cur)) {
    const msg = exists ? "removed" : "doesn't exist";
    exists = false;
    return console.log(`${file} ${msg}`);
  }

  if (created(cur)) {
    exists = true;
    return console.log(`${file} created ${human(cur.mtime)}`);
  }

  exists = true;

  if (updated(cur, prev)) {
    return console.log(`${file} updated ${human(cur.mtime)}`);
  }

  console.log(`${file} modified ${human(cur.mtime)}`);
});
