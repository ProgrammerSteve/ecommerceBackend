function handleAccessToken(username,jwt) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports={handleAccessToken};