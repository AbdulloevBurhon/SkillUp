import { useState, useRef, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import Sidebar from "../pages/profile/sidebar";
import Header from "../components/Header/Header";

function ProfileLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Header */}
      <Header ref={headerRef} onMenuClick={() => setSidebarOpen(true)} />

      {/* Body */}
      <div className="flex flex-1 min-h-0 relative overflow-hidden">
        {/* Overlay */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`
            fixed inset-0 z-30
            bg-black/40
            transition-opacity duration-300

            ${
              sidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        />

        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          topOffset={headerHeight}
        />

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
          <Outlet />
        </main>
      </div>
    </motion.div>
  );
}

export default ProfileLayout;
