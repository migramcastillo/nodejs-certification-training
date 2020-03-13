const t = require("tap");

const getCatAsync = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cat");
    }, 3000);
  });

t.test("Get An Async Cat", async subtest => {
  const value = await getCatAsync();

  subtest.equal(value, "cat", "This is not a cat");
  subtest.end();
});
