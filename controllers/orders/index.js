const { handleCreateOrder } =require("./handleCreateOrder") ;
const { handleDeleteOrder } =require("./handleDeleteOrder");
const { handleGetOrder }= require("./handleGetOrder");
const { handleGetOrders }= require("./handleGetOrders");
const { handleUpdateOrder }= require("./handleUpdateOrder");

module.exports={
  handleCreateOrder,
  handleDeleteOrder,
  handleGetOrder,
  handleGetOrders,
  handleUpdateOrder
};