const handleDeleteCart=(req,res,db)=>{
  const {id}= req.params;
  db('cart')
    .where({id})
    .del()
    .then(resp=>{
      if(resp){
        res.json("cart successfully deleted")
      }else{
        res.status(400).json("Unable to delete cart")
      }
    })
    .catch(e=>{
      res.status(400).json('error deleting cart');
    })
}

module.exports={handleDeleteCart};


//need to account for cascading effects
//delete cart_items
