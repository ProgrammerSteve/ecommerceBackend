const handleGetOrders= async(req,res,db)=>{
  try{
    const orderIdPromise= await db.select('*').from('orders')
    if(orderIdPromise.length>0){
      const promiseArr=orderIdPromise.map(async(obj)=>{
        let order_id=obj.order_id
        let orderItems= await db.select('*').from('order_item').where({order_id})
        let productIds=orderItems.map(obj=>obj.product_id)
        let productsArr= await db.select('*').from('products').whereIn('product_id',productIds)
        return({
          order:obj,
          products:productsArr,
          orderItems:orderItems
        })
      })
      Promise.all(promiseArr).then((results)=> {
        res.json(results)
      })
      
    }else{
      res.json([])
    }
  }catch(err){
    res.status(400).json(`error accessing orders: ${err}`)
  }
}
module.exports={handleGetOrders};