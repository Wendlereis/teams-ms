import Event from "../models/Event";
import EventType from "../models/EventType";

export async function index(_, res) {
  const event = await Event.findAll({
    attributes: ["id", "name", "start_date", "final_date"],
    include: [
      {
        model: EventType,
        as: "event_type",
        attributes: [["short_name", "name"]],
      },
    ],
  });

  return res.status(200).json(event);
}

export async function show(req, res) {
  const { id } = req.params;

  const event = await Event.findByPk(id, {
    attributes: ["id", "name", "start_date", "final_date"],
    include: [
      {
        model: EventType,
        as: "event_type",
        attributes: [["short_name", "name"]],
      },
    ],
  });

  return res.status(200).json(event);
}

export async function create(req, res) {
  const data = req.body;

  const event = await Event.create(data);

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
