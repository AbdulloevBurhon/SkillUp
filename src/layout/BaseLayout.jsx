import { Outlet } from "react-router-dom";
function BaseLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Outlet />
    </div>
  );
}

export default BaseLayout;
