import { Router } from "express";

import * as UserController from "./app/controllers/UserController";
import * as EventController from "./app/controllers/EventController";
import * as UserTeamController from "./app/controllers/UserTeamController";
import * as AuthController from "./app/controllers/AuthController";

import AuthMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/auth", AuthController.create);
routes.post("/user", UserController.create);

routes.use(AuthMiddleware);

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.destroy);

routes.get("/event", EventController.index);
routes.get("/event/:id", EventController.show);
routes.post("/event", EventController.create);
routes.put("/event/:id", EventController.update);
routes.delete("/event/:id", EventController.destroy);

routes.get("/user-team", UserTeamController.index);
routes.get("/user-team/:id", UserTeamController.show);
routes.post("/user-team", UserTeamController.create);
routes.put("/user-team/:id", UserTeamController.update);
routes.delete("/user-team/:id", UserTeamController.destroy);

export default routes;
