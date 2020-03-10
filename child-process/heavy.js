console.log("Running heavy process");

let start = Date.now();
let loops = 0;
while (Date.now() - start < 3000) {
  //while the difference between Date.now() and start is less than 3 seconds
  loops += 1;
}

process.send(`Finished with: ${loops} loops`);
