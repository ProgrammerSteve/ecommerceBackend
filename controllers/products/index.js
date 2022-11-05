const { handleAddProduct } =require("./handleAddProduct") ;
const { handleDeleteProduct } =require("./handleDeleteProduct");
const { handleGetProduct }= require("./handleGetProduct");
const { handleGetProducts }= require("./handleGetProducts");
const { handleUpdateProduct }= require("./handleUpdateProduct");

module.exports={
  handleAddProduct,
  handleDeleteProduct,
  handleGetProduct,
  handleGetProducts,
  handleUpdateProduct
};