import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        dark:bg-gray-900
        text-black
        dark:text-white
      "
    >
      {/* Global container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Header />

        <main className="py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
