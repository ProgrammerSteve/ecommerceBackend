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
  if(isEmailUsed){
    res.status(400).json('email already in use')
    return
  }
  if(isUsernameUsed){
    res.status(400).json('username already in use')
    return
  }
  try{
    await db.insert(user).into('users').returning('email').then(email=>console.log('account created for: ', email))
    res.send(user)
  }catch(err){
    res.status(400).json('error creating user in database')
    return
  }
}

module.exports={handleCreateUser};