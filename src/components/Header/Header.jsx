import { forwardRef } from "react";

import ThemeSwitcher from "../ui/theme/switcher";
import LangSwitcher from "../ui/lang/LangSwitcher";
import Logo from "./logo";
import { EllipsisVertical } from "lucide-react";

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
        <div className="flex items-center h-12">
          <Logo size="large" />
        </div>

        {/* Actions */}
        <div className="flex items-center h-16 md:h-20">
          <LangSwitcher />
          <ThemeSwitcher />

          {showMenu && (
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <EllipsisVertical />
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
