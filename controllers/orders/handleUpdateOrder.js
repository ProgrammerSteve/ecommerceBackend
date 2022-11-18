const handleUpdateOrder=(req,res,db)=>{
  const {order_id}= req.params;
  const {status}= req.body;

  db('orders')
  .where({order_id})
  .update({status})
  .then(resp=>{
    if(resp){
      res.json("success updating order status")
    }else{
      res.status(400).json("Unable to update order status")
    }
  })
  .catch(e=>{
    res.status(400).json('error updating order');
  })
}

module.exports={handleUpdateOrder};



// CREATE TABLE orders (
//   order_id serial PRIMARY KEY,
//   user_id int,
//   status VARCHAR(20),
//   created_at TIMESTAMP NOT NULL,
//   amount real,
//   items int,
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// );