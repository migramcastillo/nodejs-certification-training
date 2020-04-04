/*
  This is an example of how to build a http server with the http native module of NodeJS
  Credits to https://github.com/shalusinghal/node-rest-api-without-express
 */

const http = require("http");
const router = require("./router");
const routes = require("./routes");

const port = 3005;

process.on("uncaughtException", err => {
  console.log("uncaughtException");
  console.error(err.stack);
  console.log(err);
});

const server = http.createServer(async (req, res) => {
  await router(req, res, routes);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
