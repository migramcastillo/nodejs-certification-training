const assert = require("assert");
const assertStrict = assert.strict;

assert.ok("Some");
assert.ok("Value");
assert.ok("Is Ok");

//  This will pass if strict mode hasn't been set
assert.deepEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, "5"]);

assertStrict.deepEqual(
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, "5"],
  "Not in my town budy"
);
