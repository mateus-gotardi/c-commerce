const jwt = require("jsonwebtoken");
const secret = process.env.JWT_KEY;
import Users from "../../models/Users";

const WithAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).json({ error: "Unauthorized: no token provided" });
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Unauthorized: token invalid" });
      } else {
        req.email = decoded.email;
        Users.findOne({ where: { email: decoded.email } })
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(401).json({ error: err });
          });
      }
    });
  }
};
export default WithAuth;
