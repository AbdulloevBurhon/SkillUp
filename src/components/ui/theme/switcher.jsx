import DarkMode from "../../../hooks/darkMode/darkMode";

function ThemeSwitcher() {
  const [colorTheme, setTheme] = DarkMode();

  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="
        flex items-center justify-center
        w-9 h-9
        rounded-full
        border
        dark:border-gray-700
        hover:bg-gray-200
        dark:hover:bg-gray-700
        transition
        text-lg
      "
      title="Toggle theme"
    >
      {colorTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeSwitcher;
