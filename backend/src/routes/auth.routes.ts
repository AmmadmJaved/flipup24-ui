import express from "express";
import { getTestMessage, login, register } from "../controller/auth.controller";

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

router.get("/test", getTestMessage);

export default router;
