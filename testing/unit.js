const assert = require("assert").strict;

const transformIntoNumbers = arrayValues => {
  return arrayValues.map(value => Number(value));
};

const doubler = arrayValues => {
  return arrayValues.map(value => Number(value) * Number(value));
};

const input = [1, 2, "3", 4, "-5", "6"];
const expected = [1, 2, 3, 4, -5, 6];
const expectedDoubler = [1, 4, 9, 16, 25, 36];

const output = transformIntoNumbers(input);
const outputDoubler = doubler(input);

assert.deepEqual(output, expected, "transformIntoNumber Function fails");
assert.deepEqual(outputDoubler, expectedDoubler, "doubler Function failed");

process.stdout.write("Everything works \n");
