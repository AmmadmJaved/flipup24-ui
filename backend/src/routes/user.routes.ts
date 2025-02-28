import express from "express";
import { protect } from "../middlewares/auth.middleware";
import { deleteUser, getAll, getById, getProfile, updateUser } from "../controller/user.controller";


const router = express.Router();

// Profile route, protected by JWT
router.get("/profile", getProfile); //todo next to implement
router.get('/', getAll); // Get all users
router.get('/:id', getById); // Get user by ID
router.put('/:id', updateUser); // Update user by ID
router.delete('/:id', deleteUser); // Delete user by ID

export default router;

// Get all users: GET http://localhost:5000/api/users
// Get user by ID: GET http://localhost:5000/api/users/:id
// Update user: PUT http://localhost:5000/api/users/:id
// Delete user: DELETE http://localhost:5000/api/users/:id
