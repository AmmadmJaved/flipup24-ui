import jwt from "jsonwebtoken";

const generateToken = (id: string, name: string, email: string,role : string) => {
  return jwt.sign({ id, name, email,role }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

export default generateToken;
