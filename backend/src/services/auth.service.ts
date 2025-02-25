import bcrypt from "bcryptjs";
import User from "../models/user.model";
import generateToken from "../utils/jwt.utils";

export const registerUser = async (name: string, email: string, password: string) => {
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });

  return { user, token: generateToken(user.id) };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  return { user, token: generateToken(user.id) };
};
