"use client";

import { getSocket } from "@/config/socket";
import React, { useEffect, useMemo, useState } from "react";

export default function Messages() {
  const [counter, setCounter] = useState(0);

  const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
  const socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
    // console.log("the socket", socket);
    // socket.on("message", (data: string) => {
    //     console.log("The recived message is", data);
    //   setMessages((prevMessages) => [...prevMessages, data]);
    // });
    // socket.emit("message", "Tushar");

    // socket.on("add", (payload) => {
    //     console.log("The recived message is", payload);
    //     setMessages((prevMessages) => [...prevMessages, payload]);
    // });
    // socket.on("minus", (payload) => {
    //   setCounter((prev) => prev - 1);
    // });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const sendMessage = () => {
    debugger;
    if (message.trim()) {
    //   socket.emit("message", message);
    //   setMessages((prevMessages) => [...prevMessages, message]);
      socket.emit("add", message);
      setMessage("");
    }
  };

  const handleClick = (type: string) => {
    if (type === "add") {
      socket.emit("add", 1);
    } else {
      socket.emit("minus", 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Real-time Chat</h1>
      <div className="border p-4 h-60 overflow-y-auto bg-gray-100 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 bg-white my-2 rounded shadow">
            {msg}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          className="border p-2 w-full"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}