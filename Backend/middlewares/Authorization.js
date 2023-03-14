const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
  if (!req.headers.authorization) {
    res.send({ msg: "please login" });
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.send({ msg: "please login" });
      } else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  }
};

module.exports = {
  authorization,
};
