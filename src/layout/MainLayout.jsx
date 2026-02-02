import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-6 ">
      <Outlet />
    </main>
  );
}

export default MainLayout;
