const express = require("express");
const { orders } = require("../controllers");
const orderRouter = express.Router();

//Orders
orderRouter.post("/:user_id", (req, res) => {
  orders.handleCreateOrder(req, res, knex);
});
orderRouter.post("/cart/:user_id", (req, res) => {
  orders.handleCartToOrder(req, res, knex);
});
orderRouter.get("/:user_id", (req, res) => {
  orders.handleGetOrder(req, res, knex);
});
orderRouter.get("/", (req, res) => {
  orders.handleGetOrders(req, res, knex);
});
orderRouter.post("/update/:order_id", (req, res) => {
  orders.handleUpdateOrder(req, res, knex);
});
orderRouter.delete("/:order_id", (req, res) => {
  orders.handleDeleteOrder(req, res, knex);
});

module.exports = orderRouter;
