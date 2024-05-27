// locationRoutes.ts
import express from "express";
import { getAllLocationData } from "../controllers/locationController";
const router = express.Router();
router.get("/getAllLocations", getAllLocationData);
export default router;
