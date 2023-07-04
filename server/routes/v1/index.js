const router = require("express").Router();
const loginRoute = require("./login.route");
const searchRoute = require("./search.route");
const analysisRoute = require("./analysis.route");

const routes = [
  {
    path: "/login",
    route: loginRoute,
  },
  {
    path: "/search",
    route: searchRoute,
  },
  {
    path: "/analysis",
    route: analysisRoute,
  },
];

for (const route of routes) {
  router.use(route.path, route.route);
}

module.exports = router;
