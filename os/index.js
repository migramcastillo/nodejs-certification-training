const os = require("os");

const jump = os.EOL;

process.stdout.write(`Arch of this computer: ${os.arch()} ${jump}`);

// console.log(os.constants);

process.stdout.write(
  `Available CPUs on this computer: ${os.cpus().length} ${jump}`
);

process.stdout.write(
  `Available RAM memory on this computer: ${os.freemem()} ${jump}`
);

process.stdout.write(
  `Total RAM memory on this computer: ${os.totalmem()} ${jump}`
);

process.stdout.write(
  `RAM memory on this computer on use: ${os.totalmem() - os.freemem()} ${jump}`
);

console.log("Available network interfaces: ", os.networkInterfaces());