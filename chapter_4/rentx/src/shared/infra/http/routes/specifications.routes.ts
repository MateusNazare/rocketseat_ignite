import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationController";

import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const specificationsController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticaticated);
specificationsRoutes.post("/", specificationsController.handle);

export { specificationsRoutes };
