import Event from "../models/Event";

export async function index(_, res) {
  const event = await Event.findAll();

  return res.status(200).json(event);
}

export async function show(req, res) {
  const { id } = req.params;

  const event = await Event.findByPk(id);

  return res.status(200).json(event);
}

export async function create(req, res) {
  const { name, start_date, final_date, event_type_id } = req.body;

  const event = await Event.create({
    start_date: new Date(start_date),
    final_date: new Date(final_date),
    name,
    event_type_id,
  });

  return res.status(201).json(event);
}

export async function update(req, res) {
  const { id } = req.params;
  const data = req.body;

  await Event.update(data, { where: { id } });

  return res.sendStatus(204);
}

export async function destroy(req, res) {
  const { id } = req.params;

  await Event.destroy({ where: { id } });

  return res.sendStatus(204);
}
