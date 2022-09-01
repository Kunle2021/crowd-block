const routes = (module.exports = require("next-routes")());

routes
  .add("/project/new", "/project/new")
  .add("/project/:address", "project/view")
  .add("/project/:address/requests", "project/requests")
  .add("/project/:address/requests/create", "project/requests/create");
//(colon indicates wildcard variable - used when passing the address)
