const routes = (module.exports = require("next-routes")());

routes
  .add("/project/new", "/project/new")
  .add("/project/:address", "project/view");
//(colon indicates wildcard variable - used when passing the address)
