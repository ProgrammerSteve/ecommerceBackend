const handleDeleteUser=(req,res,db)=>{
  const {user_id}= req.params;
  db('users')
    .where({user_id})
    .del()
    .then(resp=>{
      if(resp){
        res.json("success")
      }else{
        res.status(400).json("Unable to delete")
      }
    })
    .catch(e=>{
      res.status(400).json('error deleting user');
    })
}

module.exports={handleDeleteUser};