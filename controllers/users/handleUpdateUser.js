const handleUpdateUser=(req,res,db)=>{
  const {user_id}= req.params;
  const {
    password,email,fullname,username,
    address,city,state,country
  }=req.body;
  db('users')
    .where({user_id})
    .update({
      password,email,fullname,username,
      address,city,state,country
    })
    .then(resp=>{
      if(resp){
        res.json("success")
      }else{
        res.status(400).json("Unable to update")
      }
    })
    .catch(e=>{
      res.status(400).json('error updating user');
    })
}	
module.exports={handleUpdateUser};