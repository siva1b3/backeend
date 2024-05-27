// LoactionData.ts
import express, { Request, Response } from "express";
import { getAllLocationData } from "../services/LocationDataFetchService";
import { Location } from "../types/LocationDataTypes";

const router = express.Router();

router.get("/getAllLoactionData", async (req: Request, res: Response) => {
  try {
    const countries: Location[] = await getAllLocationData();
    res.json({ success: true, data: countries });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
