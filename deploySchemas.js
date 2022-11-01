const fs = require('fs');
const users=fs.readFileSync('./tables/users.sql').toString();
const products=fs.readFileSync('./tables/products.sql').toString();
const orders=fs.readFileSync('./tables/orders.sql').toString();
const cart=fs.readFileSync('./tables/cart.sql').toString();
const cart_item=fs.readFileSync('./tables/cart_item.sql').toString();
const order_item=fs.readFileSync('./tables/order_item.sql').toString();

const deploySchemas= async(db)=>{
  await db.raw(cart_item);
  await db.raw(order_item);
  
  await db.raw(products);
  
  await db.raw(users);
  await db.raw(orders);
  await db.raw(cart);
}

module.exports={deploySchemas};