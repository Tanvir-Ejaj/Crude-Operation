const secureApi = (req, res, next) => {
  if (req.headers.authorization == "tushar1122") {
    next();
  } else {
    res.status(401);
    res.send({ error: "Invalid API" });
  }
};

module.exports = secureApi;
