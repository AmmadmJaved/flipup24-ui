import React, { useState } from "react";
import { Home, Phone, HelpCircle, LogIn, UserPlus, Menu, LogOut, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center space-x-2 text-green-500 font-bold text-2xl">
              <Home size={24} />
              <span>FLIPUP24</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-500 flex items-center space-x-1">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#" className="hover:text-green-500 flex items-center space-x-1">
              <Phone size={18} />
              <span>Contact Us</span>
            </a>
            <a href="/become-a-partner" className="hover:text-green-500 flex items-center space-x-1">
              <HelpCircle size={18} />
              <span>Become a Partner</span>
            </a>
          </nav>

          {/* User Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <a href="/login" className="flex items-center space-x-1 hover:text-green-500">
                  <LogIn size={18} />
                  <span>Login</span>
                </a>
                <a href="/register" className="flex items-center space-x-1 hover:text-green-500">
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-green-500">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-500">
              Contact Us
            </a>
            <a href="/become-a-partner" className="block text-gray-700 hover:text-green-500">
              Become a Partner
            </a>
            {user ? (
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-md flex items-center space-x-2"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <>
                <a href="/login" className="block text-gray-700 hover:text-green-500">
                  Login
                </a>
                <a href="/register" className="block text-gray-700 hover:text-green-500">
                  Sign Up
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
