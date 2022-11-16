const handleGetCart=async(req,res,db)=>{
  const {id}= req.params;
  try{
    const cartItemQuery= await db.select('*').from('cart_item').where({cart_id:id})
    const cartQuery= await db.select('*').from('cart').where({id})
    res.json({cart:cartQuery,cartItems:cartItemQuery})
  }catch(err){
    res.status(400).json(`error connecting to tables: ${err}`)
  }

}

module.exports={handleGetCart};