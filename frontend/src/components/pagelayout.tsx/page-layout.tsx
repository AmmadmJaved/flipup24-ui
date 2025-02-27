import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useAuth } from "@/context/AuthContext";
import Header from "../header/header";

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
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

          <div className="flex flex-1">
            {/* Sidebar (Hidden on Small Screens) */}
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <main className="flex-1 p-4 mt-16 md:mt-0">
              {children}
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default PageLayout;
