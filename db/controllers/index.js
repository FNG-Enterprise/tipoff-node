require("dotenv").config();

async function signup() {
  return 'signup request received';
};

async function checkLogin() {
  return 'login request received';
};


module.exports.signup = signup;
module.exports.checkLogin = checkLogin;