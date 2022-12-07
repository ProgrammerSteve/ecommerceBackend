const { handleAuth } = require("./handleAuth");
const { handleLoginUser } = require("./handleLoginUser");
const { handleAccessToken } = require("./handleAccessToken");
const { checkedLoggedIn } = require("./checkedLoggedIn");

module.exports = {
  handleAuth,
  handleLoginUser,
  handleAccessToken,
  checkedLoggedIn,
};
