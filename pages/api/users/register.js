import Users from "../../../models/Users";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    const existentUser = await Users.findOne({ where: { email: email } });
    if (!existentUser) {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await Users.create({
          name,
          email,
          password: hashedPassword,
        });
        return res.status(200).json({success: true, message: 'user created successfully', user});
      } catch (error) {
        console.log(error);
      }
    } else {
      res
        .status(400)
        .json({ error: true, message: "E-mail já registrado" });
    }
  } else {
    res.status(400).json({ error: true, message: "invalid req method" });
  }
};

export default register;
