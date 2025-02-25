import { Request, Response } from "express";

// Get profile of the logged-in user
export const getProfile = (req: Request, res: Response) => {
  // We assume the user information is stored in `req.user` by the middleware
  res.json({
    message: "User profile",
    user: (req as any).user, // Getting user data from the `req.user` object
  });
};
