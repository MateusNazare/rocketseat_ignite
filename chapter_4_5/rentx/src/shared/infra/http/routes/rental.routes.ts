import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/UseCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/UseCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/UseCases/listRentalsByUser/ListRentalsByUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
    "/devolution/:id",
    ensureAuthenticated,
    devolutionRentalController.handle
);
rentalRoutes.get(
    "/user",
    ensureAuthenticated,
    listRentalsByUserController.handle
);

export { rentalRoutes };
