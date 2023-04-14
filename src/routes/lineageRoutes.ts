import { Router } from "express";
import lineagesControllers from "../controllers/lineages.controllers.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { lineageSchema, lineageSchemaUpdate } from "../schemas/Lineage.js";

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

lineageRoutes.get(
    "/:id",
    lineagesControllers.findById
)

/* lineageRoutes.put(
    "/update",
    validateSchema(lineageSchemaUpdate),
    lineagesControllers.update
) */

/* lineageRoutes.delete(
    "/:id",
    lineagesControllers.deleteLineage
) */

export default lineageRoutes;