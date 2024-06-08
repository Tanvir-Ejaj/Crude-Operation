const User = require("../model/userModel");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

let registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({ error: "Please Fill All Inputs" });
  }

  if (password && password.length < 6) {
    return res.send({ error: "Password Is Too Short" });
  }

  let existingUser = await User.find({ email: email });

  if (existingUser.length > 0) {
    return res.send({ error: "User Already Exist" });
  } else {
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tanvirejij@gmail.com",
        pass: "rcre rwdm dxyw gtlm",
      },
      secure: false,
    });
    const info = await transporter.sendMail({
      from: "<tanvirejij@gmail.com>",
      to: email,
      subject: "Verification",
      html: `<b>This is your verification code: ${otp}</b>`,
    });

    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });
      user.save();

      res.send({
        success: "Registration Successfull. Please Check Your Email",
        name: user.name,
        email: user.email,
      });
    });
  }
};

module.exports = registrationController;
