import express from "express";
import { protect } from "../middlewares/auth.middleware";
import { getProfile } from "../controller/user.controller";


const router = express.Router();

// Profile route, protected by JWT
router.get("/profile", getProfile); //todo next to implement

export default router;
