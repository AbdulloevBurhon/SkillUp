import { Outlet } from "react-router-dom";
import Sidebar from "../pages/profile/sidebar";

function ProfileLayout() {
  return (
    <div className="flex h-full w-full max-w-[1280px] mx-auto min-h-0 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
