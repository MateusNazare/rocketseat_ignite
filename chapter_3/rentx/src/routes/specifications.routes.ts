import { Router } from "express";

import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

const specificationsRoutes = Router();

const specificationsController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticaticated);
specificationsRoutes.post("/", specificationsController.handle);

export { specificationsRoutes };
