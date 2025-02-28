"use client";
import { useEffect, useMemo, useState } from "react";
import PageLayout from "@/components/pagelayout.tsx/page-layout";
import RequestService from "@/services/RequestService";
import { getSocket } from "@/config/socket";
import { toast, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomerPage() {
  const [serviceName, setServiceName] = useState("");
  const [requestTime, setRequestTime] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState<number | string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const socket = useMemo(() => {
    const socket = getSocket();
    return socket.connect();
  }, []);

  useEffect(() => {
    // console.log("the socket", socket);
    socket.on("message", (payload) => {
      debugger;
      setMessages((prevMessages) => [...prevMessages, payload]);
      handleToast(payload);
    });
    socket.on("add", (payload) => {
      debugger;
      setMessages((prevMessages) => [...prevMessages, payload]);
      handleToast(payload);
  });

  }, []);

 // Accept request handler
 const acceptRequest = (request: any) => {
  // You can handle the acceptance logic here, such as updating the status or sending a response to the server.
  alert(`Accepted request for ${request.serviceName}`);
  // Optionally, remove the request from the list
};

// Toast handler for displaying incoming requests
const handleToast = (request: any) => {
  toast.info(
    <div>
      <p>New service request received for {request.serviceName}</p>
      <p>Time: {request.requestTime}</p>
      <p>Location: {request.location}</p>
      <p>Cost: ${request.cost}</p>
      <button
        onClick={() => acceptRequest(request)} // Accept request
        className="bg-blue-500 text-white py-1 px-4 rounded mt-2"
      >
        Accept Request
      </button>
    </div>,
    {
      position: "top-right" as ToastPosition,
      autoClose: false, // We want to keep it open until user interacts
      closeOnClick: false, // Disable auto-close
      draggable: false,
      progress: undefined,
    }
  );
};



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceName || !requestTime || !location || !cost) {
      alert("Please fill in all fields.");
      return;
    }
    const requestData = {
      serviceName, requestTime, location, cost,
      customerId: "1", status: "Pending"
    } // request data
    const data = await RequestService.createServiceRequest(requestData); // create request service
    // socket.emit("message", requestData);
    socket.emit("add", data);
    // Here you can handle the form submission (send to a backend, etc.)
    alert("Service request submitted successfully!");

    // After form submission, show the toast

    // Reset the form after submission
    setServiceName("");
    setRequestTime("");
    setLocation("");
    setCost("");
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold text-center mb-6">Request a Service</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">Select Service Type</label>
              <select
                id="serviceName"
                name="serviceName"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a Service</option>
                <option value="Household">Household</option>
                <option value="Automobile">Automobile</option>
                <option value="Delivery Service">Delivery Service</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="requestTime" className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <input
                type="datetime-local"
                id="requestTime"
                name="requestTime"
                value={requestTime}
                onChange={(e) => setRequestTime(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Estimated Cost</label>
              <input
                type="number"
                id="cost"
                name="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit Request
            </button>
          </form>
        </div>
        {/* Toast Container */}
        <ToastContainer />
      </div>
    </PageLayout>

  );
}
