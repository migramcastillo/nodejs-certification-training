//  Source https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/

//  Simple usage
const buffer = Buffer.alloc(8);

console.log({buffer});
console.log("Typeof buffer: ", typeof buffer);

//  Buffer from array of integer values
const bufferFrom = Buffer.from([8,6,7,5,3,0,9]);

console.log({bufferFrom});

//  Buffer string
const bufferString = Buffer.alloc(16); 
bufferString.write("I'm a string!", "utf-8");
console.log({bufferString});

//  Keep writing on the buffer string
bufferString.write("Hello", "utf-8");
console.log({bufferString});

//  What's the new value?
console.log("Buffer string new value: ", bufferString.toString());

//  So the first 8 characters were replaced, can we add some kind of index?
bufferString.write(" world! I'm a string", 5, "utf-8");

console.log("Buffer string with offset: ", bufferString.toString());

//  The length of the buffer is static as it seems
bufferString[13] = "h".charCodeAt();
bufferString[14] = "1".charCodeAt();

console.log(bufferString.toString());