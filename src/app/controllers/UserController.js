import User from "../models/User";

export async function create(req, res) {
  const data = req.body;

  const user = await User.create(data);

  return res.json(user);
}
