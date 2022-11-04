const fs = require('fs');
const users=fs.readFileSync('./tables/users.sql').toString();
const products=fs.readFileSync('./tables/products.sql').toString();
const orders=fs.readFileSync('./tables/orders.sql').toString();
const cart=fs.readFileSync('./tables/cart.sql').toString();
const cart_item=fs.readFileSync('./tables/cart_item.sql').toString();
const order_item=fs.readFileSync('./tables/order_item.sql').toString();

const deploySchemas= async(db)=>{
  console.log("deploying products:");
  await db.raw(products);
  console.log("deploying users:");
  await db.raw(users);
  console.log("deploying orders:");
  await db.raw(orders);
  console.log("deploying cart:");
  await db.raw(cart);
  console.log("deploying cart_item:");
  await db.raw(cart_item);
  console.log("deploying order_item:");
  await db.raw(order_item);
}

module.exports={deploySchemas};