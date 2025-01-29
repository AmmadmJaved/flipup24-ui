import React from 'react';
import { Home, Calendar, Bell, User, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  activeItem = 'home', 
  onItemClick 
}) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'bookings', label: 'Bookings', icon: <Calendar className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  const categories = [
    'Electronics',
    'Home Services',
    'Auto Repair',
    'Personal Care',
    'Education',
    'Pet Services'
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 w-64 bg-white shadow-sm transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-200 ease-in-out z-30
      `}>
        <div className="flex justify-between items-center p-4 md:hidden">
          <span className="font-bold text-lg">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
        {/* Categories */}
       <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-bold text-lg mb-4 bg-yellow-300 px-3 py-1">CATEGORY</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center justify-between">
                      <span>{category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* <nav className="px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onItemClick?.(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeItem === item.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className={`${activeItem === item.id ? 'text-blue-500' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Sidebar;