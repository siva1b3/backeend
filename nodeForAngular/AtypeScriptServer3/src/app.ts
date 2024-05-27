// app.ts
import express, { Application } from "express";
import cors from "cors";
import locationRoutes from "./routes/locationRoutes";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api/locations", locationRoutes);
export default app;
