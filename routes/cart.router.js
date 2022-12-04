const express = require("express");
const { cart } = require("../controllers");
const cartRouter = express.Router();

//Cart
cartRouter.post("/:id", (req, res) => {
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
