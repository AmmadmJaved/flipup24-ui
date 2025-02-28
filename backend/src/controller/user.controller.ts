import { Request, Response } from "express";
import User from "../models/user.model";

// Get profile of the logged-in user
export const getProfile = (req: Request, res: Response) => {
  // We assume the user information is stored in `req.user` by the middleware
  res.json({
    message: "User profile",
    user: (req as any).user, // Getting user data from the `req.user` object
  });
};

// Get profile of the logged-in user
export const getAll = async (req: Request, res: Response) => {
  try {
    const users =  await User.find(); // Find all users in the database
    console.log("Request Body: ", users);
    res.json(users); // Send the list of users as JSON
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
};


// Get user by ID
export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
};

// Update user by ID
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
};

// Delete user by ID
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
};