import { Router } from "express";



import { CreateSpecificationController } from "@modules/cars/useCases/createSpecifications/CreateSpecificationController";



import { ensureAdmin } from "../middlewares/ensureAdmin";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";



const specificationsRoutes = Router();



const specificationsController = new CreateSpecificationController();



specificationsRoutes.post(

    "/",

    ensureAuthenticated,

    ensureAdmin,

    specificationsController.handle

);



export { specificationsRoutes };

