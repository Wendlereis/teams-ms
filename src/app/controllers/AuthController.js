import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import User from "../models/User";

export async function create(req, res) {
  const { usernameOrEmail, password } = req.body;

  const user = await User.findOne({
    where: {
      [Op.or]: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
    },
  });

  if (!user) {
    return res
      .status(401)
      .json({ error: "username or e-mail does not exists" });
  }

  if (!(await user.checkPassword(password))) {
    return res.status(401).json({ error: "password does not match" });
  }

  const { id, name, email } = user;

  return res.json({
    id,
    name,
    email,
    token: jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    }),
  });
}
