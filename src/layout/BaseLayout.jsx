import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import AuthHeader from "../components/Header/AuthHeader";

function BaseLayout() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const isProfilePage = location.pathname.startsWith("/profile");

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Header control */}
      {!isProfilePage && (isAuthPage ? <AuthHeader /> : <Header />)}

      <div className="flex-1 min-h-0">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
