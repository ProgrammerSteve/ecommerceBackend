const handleDecrementQuantity=async(req,res,db)=>{
  const {id:cart_id}=req.params;
  const {product_id}=req.body

  const cartItemQuery= await db.select('*').from('cart_item').where({cart_id,product_id})
  const cartItemExists=cartItemQuery.length===1?true:false

  if(cartItemExists){
    let quantity=cartItemQuery[0].quantity
    let cartItem={...cartItemQuery[0],quantity:quantity-1}
    if(quantity===1){
      await db('cart_item').where({cart_id,product_id}).del()
      res.json({message:"cart Item deleted",before:cartItemQuery[0],after:cartItem})
    }else{
      await db('cart_item').where({cart_id,product_id}).update(cartItem)
      res.json({message:"decremented by 1",before:cartItemQuery[0],after:cartItem})
    }
  }else{
    res.status(400).json("No cart item found")
  }
}
module.exports={handleDecrementQuantity};


//add some more try and catches to account for all possible scenarios


// CREATE TABLE cart_item (
//   id serial PRIMARY KEY,
//   cart_id int,
//   product_id int,
//   quantity int,
//   FOREIGN KEY (cart_id) REFERENCES cart(id),
//   FOREIGN KEY (product_id) REFERENCES products(product_id)
// );
