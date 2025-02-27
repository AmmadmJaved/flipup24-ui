import { useState, useEffect } from "react";
import {jwtDecode } from "jwt-decode";

// Define the type of decoded JWT
interface DecodedToken {
  id: string;
  role: "customer" | "partner";
  exp: number;
}

const useRole = (): "customer" | "partner" | null => {
  const [role, setRole] = useState<"customer" | "partner" | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token"); // Remove expired token
          setRole(null);
        } else {
          setRole(decoded.role);
        }
      } catch (error) {
        console.error("Invalid token", error);
        setRole(null);
      }
    }
  }, []);

  return role;
};

export default useRole;
