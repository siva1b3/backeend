// app.ts
import express, { Application } from "express";
import cors from "cors";

import locationRoutes from "./routes/locationRoutes";
import userAuthRoutes from "./routes/userAuthRoutes";

const app: Application = express();

app.use(cors());
// debugger;
app.use(express.json());

app.use("/api/locations", locationRoutes);
app.use("/api/auth", userAuthRoutes);

export default app;
