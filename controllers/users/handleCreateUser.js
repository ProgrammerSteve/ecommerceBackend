const handleCreateUser=async (req,res,db)=>{
  const {password,email,fullname,username,address,city,state,country}=req.body
  const created_at=new Date();
  const user={
    password,email,fullname,username,address,
    city,state,country,created_at
  }
  const isEmailUsed= await db.select('*')
    .from('users')
    .where({email})
    .then(user=>user.length?true:false)
    .catch(err=>res.status(400).json('error verifying user email'));
  const isUsernameUsed= await db.select('*')
    .from('users')
    .where({username})
    .then(user=>user.length?true:false)
    .catch(err=>res.status(400).json('error verifying user username'));
  if(!isEmailUsed){
    if(!isUsernameUsed){
      await db.insert(user).into('users').returning('email').then(email=>console.log('account created for: ', {email}))
      res.send(user)
    }else{
      res.status(400).json('username already in use')
    }
  }else{
    res.status(400).json('email already in use')
  }
}


module.exports={handleCreateUser};