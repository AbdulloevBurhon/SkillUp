import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../pages/profile/sidebar";
import Header from "../components/Header/Header";

function ProfileLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Анимация при входе
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`
        h-screen flex flex-col
        bg-white dark:bg-gray-900 overflow-hidden
        transition-all duration-900 ease-out

        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <Header ref={headerRef} onMenuClick={() => setSidebarOpen((p) => !p)} />

      <div className="flex flex-1 min-h-0 relative overflow-hidden">
        {/* Overlay */}
        <div
          onClick={() => setSidebarOpen(false)}
          className={`
            fixed inset-0 z-30
            bg-black/40 transition-opacity duration-300
            ${
              sidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        />

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          topOffset={headerHeight}
        />

        <main className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfileLayout;
