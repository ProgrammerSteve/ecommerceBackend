const { handleAddOrUpdateItemInCart } =require("./handleAddOrUpdateItemInCart") ;
const { handleCreateCart } =require("./handleCreateCart");
const { handleDecrementQuantity }= require("./handleDecrementQuantity");
const { handleDeleteCart }= require("./handleDeleteCart");
const { handleGetCart }= require("./handleGetCart");
const { handleIncrementQuantity }= require("./handleIncrementQuantity");
const { handleRemoveItemFromCart }= require("./handleRemoveItemFromCart");

module.exports={
  handleAddOrUpdateItemInCart,
  handleCreateCart,
  handleDecrementQuantity,
  handleDeleteCart,
  handleGetCart,
  handleIncrementQuantity,
  handleRemoveItemFromCart
};