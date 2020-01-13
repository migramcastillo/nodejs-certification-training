const { parse } = require("querystring");
const helpers = require("./helpers");

const getPostData = req => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString(); //Buffer to string
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = async (req, res, routes) => {
  // Fount a match
  const routeMatch = routes.find(route => {
    const methodMatch = route.method === req.method;
    let pathMatch = false;

    if (typeof route.path === "object") {
      pathMatch = req.url.match(route.path);
    } else {
      pathMatch = route.path === req.url;
    }

    return pathMatch && methodMatch;
  });

  if (routeMatch) {
    let body = null;
    if (req.method === "POST" || req.method === "PUT") {
      body = await getPostData(req);
    }

    return routeMatch.handler(req, res, body);
  } else {
    return helpers.error(res, "Endpoint not found", 404);
  }
};
