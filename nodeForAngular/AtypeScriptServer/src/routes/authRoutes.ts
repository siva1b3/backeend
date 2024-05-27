// authRoutes.ts
import express, { Request, Response } from "express";
import { authenticateUser } from "../services/AuthService";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res
      .status(400)
      .json({ success: false, message: "UserName and password are required" });
    return;
  }

  try {
    const result = await authenticateUser(userName, password);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
