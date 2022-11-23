const handleAuth=async(req,res,next)=>{
  try{
    const token=req.headers.authorization.replace('Bearer ','')
    await jwt.verify(token,process.env.TOKEN_SECRET)
    req.token=token
    const user=users.filter(user=>user.name===decodedUser.name)
    req.user=user[0]
    next()
  }catch(err){
    res.status(401).send({err:'please authenticate'})
  }
}

module.exports={handleAuth};