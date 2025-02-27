"use client";
import { useState } from "react";
import ChatPage from "../chat/page";

export default function CustomerPage() {
  const [requestId, setRequestId] = useState<string | null>(null);

  const createRequest = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/request/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: "12345" }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to create request");
      }
  
      const data = await res.json();
      setRequestId(data._id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Customer Request</h2>
      <button onClick={createRequest} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Create Request
      </button>
      {requestId && <p className="text-green-600">Request Created: {requestId}</p>}
      <ChatPage requestId={requestId?requestId:""} />
    </div>
  );
}
