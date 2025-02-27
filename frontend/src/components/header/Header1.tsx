import React, { useState } from "react";
import { Search, MessageSquare, Bell, LogOut, User, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Header1: React.FC = () => {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    return (
        <header className="flex justify-between items-center bg-white shadow-md p-3">
            {/* Left: Welcome Text */}
            {
                user &&
                <h1 className="text-lg font-semibold">
                    Welcome Back, <span className="text-gray-700">{user.name}</span> 👏
                </h1>
            }
            {/* Center: Search Bar */}
            <div className="relative w-1/3">
                <input
                    type="text"
                    placeholder="Search Anything"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>

            {/* Right: Icons & Profile */}
            <div className="flex items-center space-x-6">
                <MessageSquare className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />

                {/* Profile */}

                <div className="flex items-center space-x-2 cursor-pointer">

                    {
                        user &&
                        <>

                            <button
                                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                                onClick={() => setOpen(!open)}>
                                {/* {user.name} */}
                                <User className="w-5 h-5" />
                                <ChevronDown className="w-4 h-4 ml-2" />
                            </button>
                        </>
                    }
                    <div className="relative">
                        {/* User Info - Click to Toggle Dropdown */}


                        {/* Dropdown Menu */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                                        <User className="w-4 h-4" />
                                        <span>Profile</span>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                                        <LogOut className="w-4 h-4" />
                                        <span onClick={logout}>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header1;
