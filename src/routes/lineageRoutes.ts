import { Router } from "express";
import lineagesControllers from "../controllers/lineages.controllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { lineageSchema } from "../schemas/Lineage.js";

const lineageRoutes = Router();

lineageRoutes.post(
    "/create",
    validateSchema(lineageSchema),
    lineagesControllers.create
);

lineageRoutes.get(
    "/",
    lineagesControllers.findAll
);

export default lineageRoutes;