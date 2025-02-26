import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  const mongoURI = process.env.MONGO_URI;

  // Check if the MONGO_URI is defined
  if (!mongoURI) {
    console.error("MongoDB URI is not defined in the .env file");
    process.exit(1);  // Exit if URI is not found
  }

  try {
    // Attempt to connect to MongoDB using the URI
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);  // Exit if connection fails
  }
};

export default connectDB;
