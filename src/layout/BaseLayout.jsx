import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <Outlet />
    </div>
  );
}

export default BaseLayout;
