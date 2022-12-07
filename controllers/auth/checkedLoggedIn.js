//auth
function checkLoggedIn(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({ error: "you must log in" });
  }
  next();
}

module.exports = { checkLoggedIn };
