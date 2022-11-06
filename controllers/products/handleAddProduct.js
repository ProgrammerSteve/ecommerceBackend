const handleAddProduct=(req,res,db)=>{
  const {name,price,description,image_url}=req.body

  const product={
    name,
    price,
    description,
    image_url
  }

  console.log('starting handleAddProduct...')
  db.insert(product).into('products')
    .returning('name')
    .then(arr=>{
      const {name}=arr[0]
      res.send(`product created: ${name}`)
    })
    .catch(err=>res.status(400).json(`error creating product: ${err}`))
}
module.exports={handleAddProduct};