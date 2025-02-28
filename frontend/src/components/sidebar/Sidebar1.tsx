import React, { useState } from "react";
import { Home, Package, ShoppingCart, MessageSquare, BarChart, FileText, CheckSquare, DollarSign, HelpCircle, Settings, LogOut, ChevronLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const Sidebar1: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div className={`bg-gray-900 text-white ${isMinimized ? "w-20" : "w-64"} transition-all duration-300`}>
      {/* h-screen */}
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isMinimized && <h1 className="text-lg font-semibold">
          <a href="/" className="flex items-center space-x-2 text-green-500 font-bold text-2xl">
            <Home size={24} />
            <span>FLIPUP24</span>
          </a></h1>}
        <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 hover:bg-gray-700 rounded">
          <ChevronLeft className={`w-5 h-5 transform ${isMinimized ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        <SidebarItem icon={<Home />} label="Dashboard" isMinimized={isMinimized} active route="/" />
        <SidebarItem icon={<Package />} label="Users" isMinimized={isMinimized} route="/user" />
        <SidebarItem icon={<ShoppingCart />} label="Service Request" isMinimized={isMinimized} route="/customer-request" />
        <SidebarItem icon={<MessageSquare />} label="Messages" isMinimized={isMinimized} route="/chat" />
        <SidebarItem icon={<BarChart />} label="Statistics" isMinimized={isMinimized} route="/" />
        <SidebarItem icon={<FileText />} label="Invoices" isMinimized={isMinimized} badge="1" route="/" />
        <SidebarItem icon={<CheckSquare />} label="To Do list" isMinimized={isMinimized} route="/" />
        <SidebarItem icon={<DollarSign />} label="Finances" isMinimized={isMinimized} route="/" />

        {/* Help & Support */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <SidebarItem icon={<HelpCircle />} label="Help & Center" isMinimized={isMinimized} route="/" />
          <SidebarItem icon={<Settings />} label="Settings" isMinimized={isMinimized} route="/" />
        </div>

        {/* Logout */}
        <button onClick={logout} >
          <SidebarItem icon={<LogOut />} label="Log Out" isMinimized={isMinimized} route="/" />
        </button>

      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; isMinimized: boolean; active?: boolean; badge?: string; route: string; }> = ({ icon, label, isMinimized, active, badge, route }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(route); // Navigate to the given route on click
  };
  return (
    <div onClick={handleClick} className={`flex items-center px-4 py-3 ${active ? "bg-gray-700" : "hover:bg-gray-800"} cursor-pointer rounded-md mx-2 relative`}>
      {icon}
      {!isMinimized && <span className="ml-4">{label}</span>}
      {badge && <span className="absolute right-4 bg-red-500 text-xs px-2 py-1 rounded-full">{badge}</span>}
    </div>
  );
};

export default Sidebar1;
