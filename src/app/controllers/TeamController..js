import Team from "../models/Team";

export async function index(_, res) {
  const teams = await Team.findAll();

  return res.status(200).json(teams);
}
