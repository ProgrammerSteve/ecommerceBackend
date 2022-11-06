const handleGetProducts=(req,res,db)=>{
  db.select('*').from('products')
  .then(product=>{
    if(product.length){
      res.json(product);
    }else{
      res.status(400).json('error')
    }
  })
  .catch(err=>res.status(400).json('error getting product array'))
}

module.exports={handleGetProducts};