const User = require("../model/userModel");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

let resendOtpController = async (req, res) => {
  const { email } = req.body;

  let existingUser = await User.find({ email: email });
  try {
    if (existingUser.length > 0) {
      if ((existingUser.emailVerified = true)) {
        return res.send({ error: "Email is already verified" });
      } else {
        let newotp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
        });
        await User.findOneAndUpdate({ email: email }, { otp: newotp });
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "tanvirejij@gmail.com",
            pass: "rcre rwdm dxyw gtlm",
          },
          secure: false,
        });

        const info = await transporter.sendMail({
          from: '"Exam-2"<tanvirejij@gmail.com>',
          to: email,
          subject: "Verification",
          html: `<b>This is your verification code: ${newotp}</b>`,
        });
        res.send({ success: "Email sent. Please Check your Email" });
      }
    } else {
      res.send({ error: "User not found" });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = resendOtpController;
