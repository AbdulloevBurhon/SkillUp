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
      transition={{ duration: 0.4 }}
      className="h-screen bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col relative">
        {/* Header */}
        <Header
          ref={headerRef}
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
        />

        {/* Body */}
        <div className="flex flex-1 min-h-0 relative overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            topOffset={headerHeight}
          />

          {/* Content */}
          <main className="flex-1 overflow-y-auto relative z-10">
            <div className="px-6 py-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileLayout;
