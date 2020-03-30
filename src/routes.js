import { Router } from "express";

import * as UserController from "./app/controllers/UserController";
import * as EventController from "./app/controllers/EventController";

const routes = new Router();

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.create);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.destroy);

routes.get("/event", EventController.index);
routes.get("/event/:id", EventController.show);
routes.post("/event", EventController.create);
routes.put("/event/:id", EventController.update);
routes.delete("/event/:id", EventController.destroy);

export default routes;
