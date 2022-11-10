const handleGetOrder=async(req,res,db)=>{
  const {user_id}= req.params
  try{
    const orderIdPromise= await db.select('*').from('orders').where({user_id})
    if(orderIdPromise.length>0){
      const order_id=orderIdPromise[0].order_id
      const orderItems= await db.select('*').from('order_item').where({order_id})
      const productIds=orderItems.map(obj=>obj.product_id)
      const productsArr= await db.select('*').from('products').whereIn('product_id',productIds)
      const returnObj={
        order:orderIdPromise[0],
        products:productsArr,
        orderItems:orderItems
      }
      res.json(returnObj)
    }else{
      res.json([])
    }
  }catch(err){
    res.status(400).json(`error accessing order: ${err}`)
  }
}

module.exports={handleGetOrder};