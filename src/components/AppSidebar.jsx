// src/components/AppSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

const AppSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Resume", path: "/resume", icon: <FiUser /> },
    { name: "Projects", path: "/projects", icon: <FiFolder /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-2 text-lg w-full rounded-md transition-all duration-200 hover:bg-blue-800 hover:text-white
     ${location.pathname === path ? "bg-blue-700 text-white font-semibold" : ""}`;

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center p-4 z-50 shadow">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <nav className="h-full flex flex-col justify-center items-center space-y-6 mt-20 lg:mt-0">
          {linkItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkClasses(item.path)}
              onClick={() => setIsOpen(false)} // close on mobile link click
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default AppSidebar;
