import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "ru",
    name: "Русский",
    flag: "https://flagcdn.com/w40/ru.png",
  },
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    code: "tj",
    name: "Тоҷикӣ",
    flag: "https://flagcdn.com/w40/tj.png",
  },
];

// Красивый контейнер для флага
function Flag({ src, alt }) {
  return (
    <div
      className="
        relative
        w-7 h-7
        rounded-full
        p-[2px]
        bg-gradient-to-tr
        from-blue-400
        via-purple-400
        to-pink-400
        shadow-md
      "
    >
      <div
        className="
          w-full h-full
          rounded-full
          overflow-hidden
          bg-white dark:bg-gray-800
          flex items-center justify-center
        "
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function LangSwitcher() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative select-none">
      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          group flex items-center gap-2
          px-3 py-1.5
          rounded-full
          border border-gray-200/50 dark:border-gray-700/50
          bg-white/80 dark:bg-gray-800/80
          backdrop-blur
          shadow-sm
          hover:shadow-lg
          hover:scale-[1.02]
          transition-all
          text-sm
        "
      >
        <Flag src={current.flag} alt={current.name} />

        <span className="hidden sm:block font-medium">{current.name}</span>

        {/* Arrow */}
        <span
          className={`
            text-xs opacity-60
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        >
          ▼
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 mt-2 w-48
          rounded-2xl
          border border-gray-200/60 dark:border-gray-700/60
          bg-white/90 dark:bg-gray-800/90
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
          z-50
          transition-all duration-200
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
          }
        `}
      >
        {languages.map((lang) => {
          const active = lang.code === current.code;

          return (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`
                w-full flex items-center gap-3
                px-4 py-3
                text-left text-sm
                transition
                ${
                  active
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 font-semibold"
                    : "hover:bg-gray-100/70 dark:hover:bg-gray-700/70"
                }
              `}
            >
              <Flag src={lang.flag} alt={lang.name} />

              <span>{lang.name}</span>

              {active && (
                <span className="ml-auto text-blue-500 text-xs">✓</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LangSwitcher;
