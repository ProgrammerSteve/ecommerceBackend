const handleIncrementQuantity=async(req,res,db)=>{
  const {id:cart_id}=req.params;
  const {product_id}=req.body

  const cartItemQuery= await db.select('*').from('cart_item').where({cart_id,product_id})
  const cartItemExists=cartItemQuery.length===1?true:false

  if(cartItemExists){
    let quantity=cartItemQuery[0].quantity
    let cartItem={...cartItemQuery[0],quantity:quantity+1}
    await db('cart_item').where({cart_id,product_id}).update(cartItem)
    res.json({message:"cart Item incremented",before:cartItemQuery[0],after:cartItem})
  }else{
    let cartItem={cart_id,product_id,quantity:1}
    await db.insert(cartItem).into('cart_item')
    const cartItemQueryNew= await db.select('*').from('cart_item').where({cart_id,product_id})
    res.json({message:"Created cart_item due to increment",before:{},after:cartItemQueryNew[0]})
  }
}

module.exports={handleIncrementQuantity};


//res.status(400).json("No cart item found")