const express = require("express");
const userRouter = require("./user.router");
const { API_VERSION } = require("../../config");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  /* Endpoint estático: http://localhost:5000/api/v1/people */
  router.use("/users", userRouter);
}

module.exports = routerApi;