import React from 'react';
import { Home, Phone, HelpCircle, LogIn, UserPlus, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-lg"
              onClick={onMenuClick}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2 text-green-500 font-bold text-2xl">
              <Home size={24} />
              <span>FLIPUP24</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1">
              <Home size={18} />
              <span>HOME</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1">
              <Phone size={18} />
              <span>CONTACT US</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1">
              <HelpCircle size={18} />
              <span>FAQ</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1">
              <LogIn size={18} />
              <span>LOGIN</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1">
              <UserPlus size={18} />
              <span>SIGNUP</span>
            </a>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <LogIn size={24} className="text-gray-700" />
            <UserPlus size={24} className="text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;