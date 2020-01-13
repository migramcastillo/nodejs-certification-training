const helpers = require("./helpers");

const routes = [
  {
    method: "GET",
    path: "/tickets",
    handler: async (req, res) => {
      try {
        const tickets = [
          {
            id: 1,
            name: "Roma"
          },
          {
            id: 2,
            name: "Paris"
          },
          {
            id: 3,
            name: "Playa del carmen"
          }
        ];

        return helpers.success(res, tickets);
      } catch (error) {
        return helpers.error(res, error);
      }
    }
  }
];

module.exports = routes;
