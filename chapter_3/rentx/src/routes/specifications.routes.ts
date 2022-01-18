import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationController";

const specificationsRoutes = Router();

const specificationsController = new CreateSpecificationController();

specificationsRoutes.post("/", specificationsController.handle);

export { specificationsRoutes };
