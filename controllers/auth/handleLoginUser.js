const { handleAccessToken } = require("./handleAccessToken")

const handleLoginUser=async (req,res,db,jwt)=>{
  const {password,email}=req.body
  let user
  let userPassword

  if(!password || !email){
    res.status(400).json('email and password not in body of request')
  }
  try{
    let fetchUser= await db.select('*').from('users').where({email})
    user=fetchUser.length===1?fetchUser[0]:{}
    userPassword=user.password
  }catch(err){
    userPassword=null
    res.status(400).json('account does not exist')
    return
  }
  if(password===userPassword){
    const token=handleAccessToken(user,jwt)
    res.send(token)
  }else{
    res.status(400).json('passwords do not match')
  }
}

module.exports={handleLoginUser};