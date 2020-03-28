import express from "express";

const server = express();

server.use("/", (req, res) => {
  return res.json({ ok: true });
});

server.listen(3333);
