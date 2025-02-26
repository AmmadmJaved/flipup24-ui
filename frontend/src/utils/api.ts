// utils/api.ts
const API_URL = "http://localhost:5000/api/auth"; // Replace with your backend URL

interface User {
  name?: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: User) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  if (res.status !== 201) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data; // Return the response from backend (e.g., user data and token)
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message || "Invalid credentials");
  }

  return data.token; // Return the JWT token
};
