// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { verifyToken } from '@/utils/auth';


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
    const cookies = parseCookies();
    const token = cookies.token;
    
    // If a token exists, verify it and set user state
    if (token) {
      const userData = verifyToken(token);
      if (userData) {
        setUser(userData as User); // Set the user if the token is valid
      } else {
        destroyCookie(null, 'token'); // Remove invalid token if any
        router.push('/login'); // Redirect to login if token is invalid
      }
    }
  }, [router]);

  const login = (userData: User, token: string) => {
    setUser(userData);
    setCookie(null, 'token', token, {
      maxAge: 30 * 24 * 60 * 60, // Cookie expires in 30 days
      path: '/',
      httpOnly: true, // Cookie is only accessible by the server
      secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
    });
  };

  const logout = () => {
    setUser(null);
    destroyCookie(null, 'token');
    router.push('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
