import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
        bg-white/90 dark:bg-gray-800/90
        backdrop-blur-xl
        border-r border-gray-200/40 dark:border-gray-700/40
        shadow-xl
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
        <span
          className={`
            text-lg font-bold transition-all duration-300
            ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
          `}
        >
          Меню
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2 p-2">
        {/* Profile */}
        <SidebarButton
          icon={<User size={20} />}
          text="Профиль"
          isOpen={isOpen}
          color="bg-blue-500 hover:bg-blue-600"
        />

        {/* Settings */}
        <SidebarButton
          icon={<Settings size={20} />}
          text="Настройки"
          isOpen={isOpen}
          color="bg-green-500 hover:bg-green-600"
        />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Logout */}
        <SidebarButton
          icon={<LogOut size={20} />}
          text="Выйти"
          isOpen={isOpen}
          color="bg-red-500 hover:bg-red-600"
        />
      </nav>
    </aside>
  );
}

/* Reusable Button */
function SidebarButton({ icon, text, isOpen, color }) {
  return (
    <button
      className={`
        flex items-center gap-3
        w-full px-3 py-2 rounded-xl
        text-white transition
        ${color}
        ${!isOpen && "justify-center px-0"}
      `}
    >
      {icon}

      {/* Text */}
      <span
        className={`
          whitespace-nowrap transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
        `}
      >
        {text}
      </span>
    </button>
  );
}

export default Sidebar;
