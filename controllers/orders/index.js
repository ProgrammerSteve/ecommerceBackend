const { handleCreateOrder } =require("./handleCreateOrder") ;
const { handleDeleteOrder } =require("./handleDeleteOrder");
const { handleGetOrder }= require("./handleGetOrder");
const { handleGetOrders }= require("./handleGetOrders");
const { handleUpdateOrder }= require("./handleUpdateOrder");
const {handleCartToOrder}=require("./handleCartToOrder.js");

module.exports={
  handleCreateOrder,
  handleDeleteOrder,
  handleGetOrder,
  handleGetOrders,
  handleUpdateOrder,
  handleCartToOrder
};