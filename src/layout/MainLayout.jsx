import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../pages/profile/sidebar";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
