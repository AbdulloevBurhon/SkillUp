import { Outlet } from "react-router-dom";
import AuthHeader from "../components/Header/AuthHeader";

function AuthLayout() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
