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
// Socket.io
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/request", requstRoutes);
app.use("/api/users", userRoutes);
app.use("/test", getTestMessage);

// // Socket.io
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Frontend URL
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("User Connected:", socket.id);

//   socket.on("joinChat", (requestId) => {
//     socket.join(requestId);
//     console.log(`User joined chat room: ${requestId}`);
//   });

//   socket.on("sendMessage", async (data) => {
//     const { requestId, senderId, text } = data;
//     console.log("Message received:", data);
//     // await chatModel.findOneAndUpdate({ requestId }, { $push: { messages: { senderId, text, timestamp: new Date() } } }, { upsert: true });
//     // io.to(requestId).emit("receiveMessage", { senderId, text, timestamp: new Date() });
//     io.emit("receiveMessage", data); // Send message to all clients
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected:", socket.id);
//   });
// });
// Enable CORS for WebSocket connections
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3001", // Allow Next.js client
    methods: ["GET", "POST"],
  },
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log(`🔗 User connected: ${socket.id}`);

  socket.on("message", (msg) => {
    console.log("📩 Received message:", msg);
    io.emit("message", msg); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});

app.use(cors()); // Allow CORS for HTTP requests
app.use(express.json()); // Parse JSON data

// Test API Route
app.get("/", (req, res) => {
  res.send("Socket.io Server is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
