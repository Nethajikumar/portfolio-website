// src/components/AppSidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
    `flex items-center gap-3 px-4 py-3 text-lg w-full rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-primary
     ${location.pathname === path ? "bg-primary/20 text-primary font-semibold shadow-[inset_4px_0_0_0_hsl(var(--primary))] bg-gradient-to-r from-primary/10 to-transparent" : "text-muted-foreground"}`;

  return (
    <>
      {/* Mobile top bar */}
      <div className="xl:hidden fixed top-0 left-0 w-full bg-[#070913]/90 backdrop-blur-2xl border-b border-white/5 text-foreground flex justify-between items-center p-4 z-[60]">
        <h1 className="text-xl font-black bg-gradient-to-r from-primary via-[#a855f7] to-secondary text-transparent bg-clip-text">NK.DEV</h1>
        <button
          onClick={toggleSidebar}
          className="p-2 -mr-2 text-2xl text-foreground hover:text-primary transition-all active:scale-90"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Backdrop Overlay for mobile/tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#070913]/95 backdrop-blur-3xl border-r border-white/5 text-foreground z-50 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 flex flex-col`}
      >
        <div className="hidden xl:flex items-center justify-center h-32 mb-4 border-b border-white/5 bg-white/5">
          <h2 className="text-3xl font-black bg-gradient-to-r from-primary via-[#a855f7] to-secondary text-transparent bg-clip-text tracking-tighter">NK.DEV</h2>
        </div>

        {/* Available for Work Status Widget */}
        <div className="px-6 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
             <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] uppercase font-black tracking-widest text-green-500">Live Status</span>
               <span className="text-xs font-bold text-white/90 italic">Available for Work</span>
             </div>
          </div>
        </div>

        <nav className="flex flex-col space-y-3 px-6 mt-20 xl:mt-2">
          {linkItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkClasses(item.path)}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-bold tracking-tight">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Optional decorative element at bottom of sidebar */}
        <div className="mt-auto p-8 opacity-40">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center">© 2026 Nethaji K</p>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
