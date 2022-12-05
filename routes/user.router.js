const express = require("express");
const { user } = require("../controllers");
const { knex } = require("../database/database");
const userRouter = express.Router();

//User
userRouter.post("/user", (req, res) => {
  user.handleCreateUser(req, res, knex);
});
userRouter.get("/user/:user_id", (req, res) => {
  user.handleGetUser(req, res, knex);
});
userRouter.post("/user/:user_id", (req, res) => {
  user.handleUpdateUser(req, res, knex);
});
userRouter.delete("/user/:user_id", (req, res) => {
  user.handleDeleteUser(req, res, knex);
});

module.exports = userRouter;
