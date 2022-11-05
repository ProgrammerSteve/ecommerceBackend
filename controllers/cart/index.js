const { handleAddItemToCart } =require("./handleAddItemToCart") ;
const { handleCreateCart } =require("./handleCreateCart");
const { handleDecreaseQuantity }= require("./handleDecreaseQuantity");
const { handleDeleteCart }= require("./handleDeleteCart");
const { handleGetCart }= require("./handleGetCart");
const { handleIncreaseQuantity }= require("./handleIncreaseQuantity");
const { handleRemoveItemFromCart }= require("./handleRemoveItemFromCart");

module.exports={
  handleAddItemToCart,
  handleCreateCart,
  handleDecreaseQuantity,
  handleDeleteCart,
  handleGetCart,
  handleIncreaseQuantity,
  handleRemoveItemFromCart
};