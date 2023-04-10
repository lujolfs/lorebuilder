import {Router} from "express";
import lineageRoutes from "./lineageRoutes.js";

const routes = Router();

routes.use("/lineages", lineageRoutes);

export default routes;