"use client";

import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Bookings", path: "/booking", icon: "📅" },
    { name: "Notifications", path: "/notifications", icon: "🔔" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <div
      className="d-flex flex-column vh-100 sidebar"
      style={{ width: "250px" }}
    >
      {/* Navigation */}
      <Nav className="d-md-block bg-light sidebar">
        {navItems.map((item) => (
          <Nav.Item key={item.name} className="nav-item">
            <Link href={item.path} passHref legacyBehavior>
              <Nav.Link
                className={`d-flex nav-link align-items-center px-3 py-2 ${
                  pathname === item.path ? "active" : ""
                }`}
              >
                <span className="me-2">{item.icon}</span>
                {item.name}
              </Nav.Link>
            </Link>
          </Nav.Item>
        ))}
      </Nav>


      {/* Footer */}
      <div className="mt-auto p-3 border-top text-center">
        <p className="small mb-0">© 2025 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;