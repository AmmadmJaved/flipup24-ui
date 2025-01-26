'use client'
import React from "react";
import { Navbar} from "react-bootstrap";
import { Home, Phone, HelpCircle, LogIn, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
         {/* Header */}
      <header className="bg-white shadow-sm col-lg-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 text-green-500 font-bold text-2xl">
              <Home size={24} />
              <span>FLIPUP24</span>
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
              <a href="#" className="text-gray-700 hover:text-green-500 flex items-center space-x-1 float-right pl-0">
                <UserPlus size={18} />
                <span>SIGNUP</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
       
    </Navbar>
  );
};

export default Header;