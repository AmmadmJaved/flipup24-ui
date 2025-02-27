import express from "express";
import { protect } from "../middlewares/auth.middleware";
import { getProfile } from "../controller/user.controller";


const router = express.Router();

// Profile route, protected by JWT
router.get("/profile", getProfile); //todo next to implement

// Protected route for customers
// router.get("/customer-dashboard", verifyRole(["customer"]), (req, res) => {
//     res.json({ message: "Welcome Customer!" });
//   });
  
//   // Protected route for partners
//   router.get("/partner-dashboard", verifyRole(["partner"]), (req, res) => {
//     res.json({ message: "Welcome Partner!" });
//   });

export default router;
