const handleDeleteProduct=(req,res,db)=>{
  const {product_id}= req.params;
  db('products')
    .where({product_id})
    .del()
    .then(resp=>{
      if(resp){
        res.json("successfully deleted")
      }else{
        res.status(400).json("Unable to delete product")
      }
    })
    .catch(e=>{
      res.status(400).json('error deleting product');
    })
}

module.exports={handleDeleteProduct};


//cascade delete all the cart_items that contain this product