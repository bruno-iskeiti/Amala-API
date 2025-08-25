import express, { Application } from "express";
import routes from "./routes";
import { connectDB } from "./models";

const app: Application = express();
app.use(express.json());

connectDB();

app.use("/api/v1", routes);

export default app;
