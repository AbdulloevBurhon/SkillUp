import ThemeSwitcher from "../ui/theme/switcher";
import LangSwitcher from "../ui/lang/LangSwitcher";
import Logo from "./logo";

function AuthHeader() {
  return (
    <header
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
          px-4 py-3
        "
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;
