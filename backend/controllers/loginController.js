const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

let loginController = async (req, res) => {
  const { email, password } = req.body;

  let findUser = await User.findOne({ email: email });

  if (findUser) {
    if (findUser.emailVerified == true) {
      bcrypt.compare(password, findUser.password, function (err, result) {
        var token = jwt.sign(
          { id: findUser._id, email: findUser.email },
          "shhhhh",
          { expiresIn: "24h" }
        );
        if (result == true) {
          res.send({ success: "login successful", token: token });
        } else {
          res.send({ error: "Crendential Not Match" });
        }
      });
    } else {
      res.send({ error: "Please Verify Your Account" });
    }
  } else {
    res.send({ error: "user not found" });
  }
};

module.exports = loginController;
