import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/UseCases/createRental/CreateRentalController";

import { ensureAuthenticaticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticaticated, createRentalController.handle);

export { rentalRoutes };
