import express, { json } from 'express';
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();

const app = express();
app.use(json());
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}`));