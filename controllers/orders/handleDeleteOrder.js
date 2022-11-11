const handleDeleteOrder=(req,res,db)=>{

  const {order_id}= req.params;


  
  db('order')
    .where({order_id})
    .del()
    .then(resp=>{
      if(resp){
        res.json("order successfully deleted")
      }else{
        res.status(400).json("Unable to delete order")
      }
    })
    .catch(e=>{
      res.status(400).json('error deleting order');
    })

}

module.exports={handleDeleteOrder};


//need to account for cascading effects
//delete order_items
