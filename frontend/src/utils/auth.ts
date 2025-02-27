// lib/auth.ts
import jwt from 'jsonwebtoken';

// Secret key for JWT signing (In real apps, use environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey';

// Function to sign a JWT token
export const signToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Function to verify a JWT token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET); // Returns the decoded payload if the token is valid
  } catch (err) {
    return null; // Return null if the token is invalid or expired
  }
};
