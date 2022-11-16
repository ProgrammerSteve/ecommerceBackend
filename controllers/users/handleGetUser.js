const handleGetUser=async(req,res,db)=>{
  const {user_id}=req.params;
  try{
    const userQuery= await db.select('*').from('users').where({user_id})
    const cartQuery= await db.select('*').from('cart').where({user_id})
    user=userQuery.length>0?userQuery[0]:{}
    cart=cartQuery.length>0?cartQuery[0]:{}
    const cart_id=cart.hasOwnProperty('id')?cart.id:null;
    const cartItems= await db.select('*').from('cart_item').where({cart_id})
    res.json({user,cart,cartItems})
  }catch(err){
    res.status(400).json(`error connecting to tables: ${err}`)
  }
};
module.exports={handleGetUser};