import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import express from "express";

// Register a new user
export const register = async (req: any, res: Response) => {
    try {
      // Logging the entire req.body to debug
      console.log("Request Body: ", req.body);
      const { name, email, password } = req.body;
      const result = await registerUser(name, email, password);
      res.status(201).json(result); // Respond with user and token
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });  // TypeScript now knows 'error' is of type 'Error'
      } else {
        res.status(400).json({ message: "An unexpected error occurred" }); // Fallback for non-Error types
      }
    }
  };

// Login an existing user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    res.json(result); // Respond with user and token
  } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });  // TypeScript now knows 'error' is of type 'Error'
      } else {
        res.status(400).json({ message: "An unexpected error occurred" }); // Fallback for non-Error types
      }
  }
};

// Test route to check if backend is running
// Function to return a test response
export const getTestMessage = (req: Request, res: Response) => {
  res.status(200).json({ message: "Backend is running" });
};