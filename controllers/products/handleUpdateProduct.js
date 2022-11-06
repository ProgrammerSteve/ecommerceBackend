const handleUpdateProduct=(req,res,db)=>{
  const {product_id}= req.params;
  const {name,price,description,image_url}=req.body
  const product={
    name,
    price,
    description,
    image_url
  }
  db('products')
    .where({product_id})
    .update(product)
    .then(resp=>{
      if(resp){
        res.json("success updating")
      }else{
        res.status(400).json("Unable to update")
      }
    })
    .catch(e=>{
      res.status(400).json('error updating product');
    })
}
module.exports={handleUpdateProduct};