const handleGetProduct=(req,res,db)=>{
  const {product_id}=req.params;
  db.select('*').from('products').where({product_id})
  .then(product=>{
    if(product.length){
      res.json(product[0]);
    }else{
      res.status(400).json('Not Found')
    }
  })
  .catch(err=>res.status(400).json('error getting product'))
}

module.exports={handleGetProduct};