const handleDiscontinueProduct=async(req,res,db)=>{
  const {product_id}= req.params;
  const cartItemQuery= await db.select('*').from('cart_item').where({product_id})
  const productQuery= await db.select('*').from('products').where({product_id})
  const trx = await db.transaction()
  try{
    const cartItemPromise= cartItemQuery.map(async(cart_item)=>{  
      await trx('cart_item').where(cart_item).del()
      return cart_item
    })
    await Promise.all(cartItemPromise)
    await trx('products').where({product_id}).update({...productQuery[0], name:`${productQuery[0].name}-DISCONTINUED`})
    await trx.commit()
    res.send({productDiscontinued:productQuery[0], cartItemsDeleted:cartItemQuery})
  }catch(err){
    await trx.rollback(err)
    res.status(400).json(`error deleting product/cartItems: ${err}`)
  }
}
module.exports={handleDiscontinueProduct};

//cannot completely delete a product since it'll exist in previous orders with the item have already been processed