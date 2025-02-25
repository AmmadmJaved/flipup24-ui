import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined> =>
 {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" }); // Directly send response if token is missing
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;

    // Call next() to continue to the next middleware
    next();
  } catch (error) {
    // If token is invalid, send response directly
     res.status(401).json({ message: "Invalid token" });
  }
};
