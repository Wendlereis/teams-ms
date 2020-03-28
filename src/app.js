import express from "express";
import routes from "./routes";

const server = express();

function registerMiddlewares() {
  server.use(express.json());
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
