const handleCreateCart=(req,res,db)=>{
  const {user_id}= req.params;
  const created_at= new Date();
  const cart={user_id, created_at}
  knex.insert(cart).into('cart').then(()=>res.send("cart created..."))
  .catch(err=>res.status(400).json('error creating cart'))
}

module.exports={handleCreateCart};