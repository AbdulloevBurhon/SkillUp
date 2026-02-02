import ThemeSwitcher from "../ui/theme/switcher";
import LangSwitcher from "../ui/lang/LangSwitcher";
import Logo from "./logo";
function AuthHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200/60 dark:border-gray-700/60 shadow-sm dark:shadow-black/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center h-10">
          <Logo size="large" />
        </div>

        {/* Actions */}
        <div className="flex items-center h-10 space-x-3">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;
