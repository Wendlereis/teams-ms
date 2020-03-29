import { Router } from "express";

import * as UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/", UserController.create);

export default routes;
