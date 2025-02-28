// context/AuthContext.tsx
"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/utils/auth';
import  { jwtDecode } from 'jwt-decode';


interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {

        // const token = cookies.token;
        const token = localStorage.getItem("token");
            
        // If a token exists, verify it and set user state
        if (token) {
          try {
            const userData = verifyToken(token);
            const decoded = jwtDecode<{ id: string; name: string; email: string }>(token);
          if (decoded) {
            setUser(decoded as User); // Set the user if the token is valid
            // router.push('/');
            // window.location.reload();
            // window.location.href = '/'; // Redirect to home page if token is valid
          }
          } catch (error) {
            console.error("Invalid token", error);
            router.push('/login');
          }
          }
          else {
            // router.push('/login'); // Redirect to login if token is invalid
          }
      } 
    
  }, [router]);

  const login = (userData: User, token: string) => {
    setUser(userData);
  localStorage.setItem("token", token); // Store token in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    window.location.reload(); // Refresh page to update state
    router.push('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
