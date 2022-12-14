const express = require("express");
const { cart, auth } = require("../controllers");
const { knex } = require("../database/database");
const cartRouter = express.Router();
const { checkedLoggedIn } = auth;

//Cart
cartRouter.post("/:id", (req, checkedLoggedIn, res) => {
  cart.handleCreateCart(req, res, knex);
});
cartRouter.get("/:id", (req, res) => {
  products.handleGetCart(req, res, knex);
});
cartRouter.delete("/:id", (req, res) => {
  cart.handleDeleteCart(req, res, knex);
});
cartRouter.post("/add/:id/:quantity", (req, res) => {
  cart.handleAddOrUpdateItemInCart(req, res, knex);
});
cartRouter.post("/remove/:id", (req, res) => {
  cart.handleRemoveItemFromCart(req, res, knex);
});
cartRouter.post("/increment/:id", (req, res) => {
  cart.handleIncrementQuantity(req, res, knex);
});
cartRouter.post("/decrement/:id", (req, res) => {
  cart.handleDecrementQuantity(req, res, knex);
});

module.exports = cartRouter;
