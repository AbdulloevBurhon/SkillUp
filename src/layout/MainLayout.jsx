import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
