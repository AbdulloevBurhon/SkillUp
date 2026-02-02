import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function BaseLayout() {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />

      {/* ДАЁМ ВЫСОТУ ДЕТЯМ */}
      <div className="flex-1 min-h-0">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
