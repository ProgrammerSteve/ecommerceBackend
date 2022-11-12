const handleDeleteOrder=async(req,res,db)=>{
  const {order_id}= req.params;
  const orderItemQuery= await db.select('*').from('order_item').where({order_id})
  const trx = await db.transaction()
  try{
    const orderItemPromise= orderItemQuery.map(async(order_item)=>{  
      await trx('order_item').where(order_item).del()
      return order_item
    })
    const orderItemsArr=await Promise.all(orderItemPromise)
    const orderQuery= await trx.select('*').from('orders').where({order_id})
    const order=(orderQuery.length>0)?orderQuery[0]:{}
    await trx('orders').where({order_id}).del()
    await trx.commit();
    res.send({order_id,orderItemsArr,order})
  }catch(err){
    await trx.rollback(err)
    res.status(400).json(`error deleting order: ${err}`)
  }
}
module.exports={handleDeleteOrder};