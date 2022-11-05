const handleGetUser=(req,res,db)=>{
  const {user_id}=req.params;
  db.select('*').from('users').where({user_id})
  .then(user=>{
    if(user.length){
      res.json(user[0]);
    }else{
      res.status(400).json('Not Found')
    }
  })
  .catch(err=>res.status(400).json('error getting user'))
};




module.exports={handleGetUser};