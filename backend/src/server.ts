import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { getTestMessage } from "./controller/auth.controller";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/test", getTestMessage);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
