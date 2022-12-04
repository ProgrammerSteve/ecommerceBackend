const express = require("express");
const { products } = require("../controllers");
const productRouter = express.Router();

//Products
productRouter.post("/", (req, res) => {
  products.handleAddProduct(req, res, knex);
});
productRouter.get("/:product_id", (req, res) => {
  products.handleGetProduct(req, res, knex);
});
productRouter.get("/", (req, res) => {
  products.handleGetProducts(req, res, knex);
});
productRouter.post("/:product_id", (req, res) => {
  products.handleUpdateProduct(req, res, knex);
});
productRouter.delete("/:product_id", (req, res) => {
  products.handleDiscontinueProduct(req, res, knex);
});

module.exports = productRouter;
