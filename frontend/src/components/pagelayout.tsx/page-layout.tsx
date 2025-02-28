"use client"
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { AuthProvider, useAuth } from "@/context/AuthContext";
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
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {user && (
          <>
            <div className="flex flex-1">
              <Sidebar1 />
              {/* Main Content Area */}
              <main className="w-100">
                <Header1 />
                {children}
              </main>
            </div>
          </>
        )}
      </div>
    </AuthProvider>
  );
};

export default PageLayout;
