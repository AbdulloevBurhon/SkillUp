import { forwardRef } from "react";
import { EllipsisVertical } from "lucide-react";
import ThemeSwitcher from "../ui/theme/switcher";
import LangSwitcher from "../ui/lang/LangSwitcher";
import Logo from "./logo";

const Header = forwardRef(({ onMenuClick }, ref) => {
  const showMenu = typeof onMenuClick === "function";

  return (
    <header
      ref={ref}
      className="
        sticky top-0 z-50 w-full
        backdrop-blur-xl
        bg-white/80 dark:bg-gray-900/80
        border-b border-gray-200/60 dark:border-gray-700/60
        transition-all duration-300
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex justify-between items-center
          px-4 py-4 md:py-5
        "
      >
        {/* Logo */}
        <div className="flex items-center h-10">
          <Logo size="large" />
        </div>

        {/* Actions */}
        <div className="flex items-center h-10 space-x-3">
          <LangSwitcher />
          <ThemeSwitcher />

          {showMenu && (
            <button
              onClick={onMenuClick}
              className="
                p-2 rounded-lg
                text-gray-800 dark:text-gray-200
                bg-transparent
                hover:bg-gray-100 dark:hover:bg-gray-700
                hover:shadow-lg
                transition-all duration-200
                active:scale-95
                focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              "
            >
              <EllipsisVertical size={22} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
