const handleAddOrUpdateItemInCart=(req,res,db)=>{

  const {id:cart_id,quantity}=req.params;
  const {product_id}=req.body

  const cartItem={
    cart_id,
    product_id,
    quantity
  }

 db.select('*').from('cart_item').where({cart_id})
  .then(data=>{
    const dataFiltered=data.filter(item=>item.product_id=product_id)[0]
    if(dataFiltered.length===1){
      db('cart_item').where({cart_id}).update(cartItem)
      .then(resp=>res.json('item added with new quantity'))
      .catch(err=>{
        res.status(400).json("Unable to add item")
      })
    }else{
      db.insert(cartItem).into('cart_item')
      .then(resp=>res.json('item added with new quantity'))
      .catch(err=>{
        res.status(400).json("Unable to add item")
      })
    }
    console.log(item.quantity)
  })
  .catch(err=>console.log(err))


  
  // console.log('starting handleAddProduct...')
  // db.insert(cartItem).into('cart_item')
  //   .returning('product_id')
  //   .then(arr=>{
  //     const {product_id}=arr[0]
  //     res.send(`product#: ${product_id} added to cart`)
  //   })
  //   .catch(err=>res.status(400).json(`error adding product to cart: ${err}`))

}
module.exports={handleAddOrUpdateItemInCart};


// CREATE TABLE cart (
//   id serial PRIMARY KEY,
//   user_id int,
//   created_at TIMESTAMP NOT NULL,
//   amount real,
//   items int,
//   FOREIGN KEY (user_id) REFERENCES users(user_id)
// );

// CREATE TABLE cart_item (
//   id serial PRIMARY KEY,
//   cart_id int,
//   product_id int,
//   quantity int,
//   FOREIGN KEY (cart_id) REFERENCES cart(id),
//   FOREIGN KEY (product_id) REFERENCES products(product_id)
// );