import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useAuth } from "@/context/AuthContext";
import Header from "../header/header";
import Sidebar1 from "../sidebar/Sidebar1";
import Header1 from "../header/Header1";

interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {user && (
        <>
          {/* Fixed Header */}
          

          <div className="flex flex-1">
            {/* Sidebar (Hidden on Small Screens) */}
            {/* <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            /> */}
            <Sidebar1/>
            {/* <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} /> */}

            {/* Main Content Area */}
            <main>
            <Header1/> 
              {children}
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default PageLayout;
