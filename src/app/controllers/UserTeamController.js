import UserTeam from "../models/UserTeam";

export async function index(_, res) {
  const userTeam = await UserTeam.findAll();

  return res.status(200).json(userTeam);
}

export async function show(req, res) {
  const { id } = req.params;

  const userTeam = await UserTeam.findByPk(id);

  return res.status(200).json(userTeam);
}

export async function create(req, res) {
  const data = req.body;

  const userTeam = await UserTeam.create(data);

  return res.status(201).json(userTeam);
}

export async function update(req, res) {
  const { id } = req.params;
  const data = req.body;

  await UserTeam.update(data, { where: { id } });

  return res.sendStatus(204);
}

export async function destroy(req, res) {
  const { id } = req.params;

  await UserTeam.destroy({ where: { id } });

  return res.sendStatus(204);
}
