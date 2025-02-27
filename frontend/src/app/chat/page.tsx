"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"], // Force WebSocket and fallback
    reconnectionAttempts: 5, // Retry 5 times
    timeout: 10000, // 10 seconds timeout
  });

export default function ChatPage({ requestId }: { requestId: string }) {
    const [messages, setMessages] = useState<{ senderId: string; text: string }[]>([]);
    const [text, setText] = useState("");

    socket.on("connect", () => {
        console.log("✅ WebSocket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
        console.error("❌ WebSocket connection error:", err);
    });

    socket.on("disconnect", (reason) => {
        console.warn("⚠️ WebSocket disconnected:", reason);
    }); useEffect(() => {


        socket.emit("joinChat", requestId);
        socket.on("receiveMessage", (message) => setMessages((prev) => [...prev, message]));
    }, [requestId]);

    const sendMessage = () => {
        socket.emit("sendMessage", { requestId, senderId: "12345", text });
        setText("");
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">Chat</h2>
            <div className="space-y-2">
                {messages.map((msg, index) => (
                    <p key={index} className="bg-gray-200 p-2 rounded-lg">
                        {msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                className="border p-2 w-full mt-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={sendMessage} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Send
            </button>
        </div>
    );
}
