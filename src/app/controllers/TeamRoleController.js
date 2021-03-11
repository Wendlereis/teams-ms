import TeamRole from "../models/TeamRole";

export async function index(_, res) {
  const teamRoles = await TeamRole.findAll();

  return res.status(200).json(teamRoles);
}
