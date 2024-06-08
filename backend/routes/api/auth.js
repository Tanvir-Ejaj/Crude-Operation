const express = require("express");
const route = express.Router();
const registrationController = require("../../controllers/registrationController");
const secureApi = require("../../middleware/secureApi");
const loginController = require("../../controllers/loginController");
const otpController = require("../../controllers/otpVerficationController");
const resendOtpController = require("../../controllers/resendOtpController");
const forgetPasswordController = require("../../controllers/forgetPasswordController");
const newPasswordController = require("../../controllers/newPasswordController");

route.post("/registration", secureApi, registrationController);
route.post("/otpverify", otpController);
route.post("/login", secureApi, loginController);
route.post("/resendotp", resendOtpController);
route.post("/forgetpassword", forgetPasswordController);
route.post("/newpassword", newPasswordController);

module.exports = route;
