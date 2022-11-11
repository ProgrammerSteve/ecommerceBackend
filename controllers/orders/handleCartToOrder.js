const handleCartToOrder=(req,res,db)=>{
  console.log("test")
}

module.exports={handleCartToOrder};

//use user id from req.param to get cart info
//retrieve cart and cart items
//use status from req.body and create order object/arr of order_item objs
//delete cart and cart items
//create order and order items

// CREATE TABLE orders (
//   order_id serial PRIMARY KEY,
//   user_id int,
//   status VARCHAR(20),
//   created_at TIMESTAMP NOT NULL,
//   amount real,
//   items int,
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// );

// CREATE TABLE order_item (
//   id serial PRIMARY KEY,
//   order_id int,
//   product_id int,
//   quantity int,
//   FOREIGN KEY (order_id) REFERENCES orders(order_id),
//   FOREIGN KEY (product_id) REFERENCES products(product_id)
// );

// CREATE TABLE cart (
//   id serial PRIMARY KEY,
//   user_id int,
//   created_at TIMESTAMP NOT NULL,
//   amount real,
//   items int,
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// );

// CREATE TABLE cart_item (
//   id serial PRIMARY KEY,
//   cart_id int,
//   product_id int,
//   quantity int,
//   FOREIGN KEY (cart_id) REFERENCES cart(id),
//   FOREIGN KEY (product_id) REFERENCES products(product_id)
// );