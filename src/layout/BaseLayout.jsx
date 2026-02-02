import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div className="min-h-screen overflow-auto">
      <Outlet />
    </div>
  );
}

export default BaseLayout;
