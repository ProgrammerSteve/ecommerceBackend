const handleRemoveItemFromCart=(req,res,db)=>{
  const {id}=req.params;
  db.select('*').from('cart_item').where({id})
  .del()
  .then(resp=>{
    if(resp){
      res.json("cart_item successfully deleted")
    }else{
      res.status(400).json("Unable to delete cart_item")
    }
  })
  .catch(e=>{
    res.status(400).json('error deleting cart_item');
  })

}

module.exports={handleRemoveItemFromCart};