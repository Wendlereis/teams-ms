import User from "../models/User";

export async function index(_, res) {
  const user = await User.findAll();

  return res.status(200).json(user);
}

export async function show(req, res) {
  const { id } = req.params;

  const user = await User.findByPk(id);

  return res.status(200).json(user);
}

export async function create(req, res) {
  const user = req.body;

  const { id, name, username, email } = await User.create(user);

  return res.status(201).json({ id, name, username, email });
}

export async function update(req, res) {
  const { id } = req.params;
  const data = req.body;

  await User.update(data, { where: { id } });

  return res.sendStatus(204);
}

export async function destroy(req, res) {
  const { id } = req.params;

  await User.destroy({ where: { id } });

  return res.sendStatus(204);
}
