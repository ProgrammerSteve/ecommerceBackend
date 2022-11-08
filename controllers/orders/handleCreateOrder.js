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

// req body
// {
//   "orderItems":[
//       {
//               "product_id":1,
//               "quantity":2
//       },
//       {
//               "product_id":3,
//               "quantity":1
//       }
//   ],
//   "status":"pending"
// }

const handleCreateOrder= async(req,res,db)=>{
  const {user_id}= req.params;
  const {orderItems,status}=req.body;
  const created_at= new Date();

  const productIds=orderItems.map(obj=>obj.product_id)
  const productsArr= await db.select('*').from('products').whereIn('product_id',productIds)
  const amount=productsArr.reduce((acc,obj)=>acc+obj.price,0)
  const items=productsArr.length;

  const order={user_id,status,created_at,amount,items}

  db.insert(order).into('orders').returning('order_id')
  .then(arr=>{
    const {order_id}=arr[0]
    res.send({order_id,...order})
  })
  .catch(err=>res.status(400).json(`error creating order: ${err}`))
}

module.exports={handleCreateOrder};


//NEED TO CREATE INDIVIDUAL ORDER_ITEMS IN TRANSACTION