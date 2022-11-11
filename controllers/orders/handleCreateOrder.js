// req body JSON input
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

  const trx = await db.transaction();
  try{
    const orderIdArr= await trx.insert(order).into('orders').returning('order_id')
    const {order_id}=orderIdArr[0]
    const orderItemPromise= orderItems.map(async(obj)=>{  
      order_item={
        ...obj,
        order_id
      }
      console.log("order_item: ",order_item)
      await trx.insert(order_item).into('order_item')
      return order_item
    })
    const orderItemsArr=await Promise.all(orderItemPromise)
    await trx.commit();
    res.send({order_id,orderItemsArr,...order})
  }catch(err){
    await trx.rollback(err)
    res.status(400).json(`error creating order: ${err}`)
  }
}
module.exports={handleCreateOrder};

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
