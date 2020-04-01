import UserTeam from "../models/UserTeam";
import Event from "../models/Event";
import User from "../models/User";
import Team from "../models/Team";
import TeamRole from "../models/TeamRole";

export async function index(_, res) {
  const userTeam = await UserTeam.findAll({
    attributes: [],
    include: [
      { model: Event, as: "event", attributes: ["name"] },
      { model: User, as: "user", attributes: ["name"] },
      { model: Team, as: "team", attributes: ["name"] },
      { model: TeamRole, as: "team_role", attributes: ["name"] },
    ],
  });

  return res.status(200).json(userTeam);
}

export async function show(req, res) {
  const { id } = req.params;

  const userTeam = await UserTeam.findByPk(id, {
    attributes: [],
    include: [
      { model: Event, as: "event", attributes: ["name"] },
      { model: User, as: "user", attributes: ["name"] },
      { model: Team, as: "team", attributes: ["name"] },
      { model: TeamRole, as: "team_role", attributes: ["name"] },
    ],
  });

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
