//  We are going to emulate a logger for events to store continuosly on a file
const fs = require('fs');

// New writable stream, flags a means appending (old data will be preserved)
const logger = fs.createWriteStream('./log.txt', { flags: 'a' });

logger.setDefaultEncoding('utf-8');

//  type would be a syslog code predefined 'warning', 'error', 'info'
//  message would be the string message to write
const writeInLogger = (type, message) => {
    const date = new Date();
    const messageLog = `[${date}], Type: [${String(type).toUpperCase()}], ${message}`;
    logger.write(messageLog + "\n", () => {
        //Show on console the message also on write finish
        console.log(messageLog);
    });
};

writeInLogger('danger', 'undefined is not a function');
writeInLogger('danger', 'Cannot read property "t" of undefined');
writeInLogger('warning', 'Date type is not defined');
writeInLogger('info', 'Debugging message');