import express from "express";
import routes from "./routes";
import cors from "cors";

import "./database";

const server = express();

function registerMiddlewares() {
  server.use(express.json());
  server.use(cors());
}

function registerRoutes() {
  server.use(routes);
}

function init() {
  registerMiddlewares();
  registerRoutes();

  return server;
}

export default init();
