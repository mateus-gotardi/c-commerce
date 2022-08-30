import Users from "../../../models/Users";
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_KEY;

const login = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      res
        .status(400)
        .json({
          error: true,
          message: "E-mail ou senha incorretos",
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (!same) {
          res
            .status(400)
            .json({ error: true, message: "E-mail ou senha incorretos" });
        } else {
          const token = jwt.sign({ email }, secret, { expiresIn: "2d" });
          res.status(200).json({
            user: { email: user.email, name: user.name, admin: user.admin },
            token: token,
            success: true,
          });
        }
      });
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};

export default login;
