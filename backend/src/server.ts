import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import requstRoutes from "./routes/request.routes";
import { getTestMessage } from "./controller/auth.controller";

import http from "http";
import { Server } from "socket.io";
import chatModel from "./models/chat.model";



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/request", requstRoutes);
app.use("/api/users", userRoutes);
app.use("/test", getTestMessage);

// Socket.io
const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });
const io = new Server(server, {
    cors: {
        origin: "*",
      },
    transports: ["websocket", "polling"],
  });

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinChat", (requestId) => {
    socket.join(requestId);
    console.log(`User joined chat room: ${requestId}`);
  });

  socket.on("sendMessage", async (data) => {
    const { requestId, senderId, text } = data;
    console.log("Message received:", data);
    await chatModel.findOneAndUpdate({ requestId }, { $push: { messages: { senderId, text, timestamp: new Date() } } }, { upsert: true });
    io.to(requestId).emit("receiveMessage", { senderId, text, timestamp: new Date() });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
