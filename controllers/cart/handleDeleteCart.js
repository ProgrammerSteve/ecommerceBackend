const handleDeleteCart=async(req,res,db)=>{
  const {id}= req.params;
  const cartItemQuery= await db.select('*').from('cart_item').where({cart_id:id})
  const trx = await db.transaction()
  try{
    const cartItemPromise= cartItemQuery.map(async(cart_item)=>{  
      await trx('cart_item').where(cart_item).del()
      return cart_item
    })
    const cartItemsArr=await Promise.all(cartItemPromise)
    const cartQuery= await trx.select('*').from('cart').where({id})
    const cart=(cartQuery.length>0)?cartQuery[0]:{}
    await trx('cart').where({id}).del()
    await trx.commit()
    res.send({cart_id:id,cartItemsArr,cart})
  }catch(err){
    await trx.rollback(err)
    res.status(400).json(`error deleting cart: ${err}`)
  }

  // db('cart')
  //   .where({id})
  //   .del()
  //   .then(resp=>{
  //     if(resp){
  //       res.json("cart successfully deleted")
  //     }else{
  //       res.status(400).json("Unable to delete cart")
  //     }
  //   })
  //   .catch(e=>{
  //     res.status(400).json('error deleting cart');
  //   })
}

module.exports={handleDeleteCart};


//need to account for cascading effects
//delete cart_items




// const {order_id}= req.params;
// const orderItemQuery= await db.select('*').from('order_item').where({order_id})
// const trx = await db.transaction()
// try{
//   const orderItemPromise= orderItemQuery.map(async(order_item)=>{  
//     await trx('order_item').where(order_item).del()
//     return order_item
//   })
//   const orderItemsArr=await Promise.all(orderItemPromise)
//   const orderQuery= await trx.select('*').from('orders').where({order_id})
//   const order=(orderQuery.length>0)?orderQuery[0]:{}
//   await trx('orders').where({order_id}).del()
//   await trx.commit();
//   res.send({order_id,orderItemsArr,order})
// }catch(err){
//   await trx.rollback(err)
//   res.status(400).json(`error deleting order: ${err}`)
// }