import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
