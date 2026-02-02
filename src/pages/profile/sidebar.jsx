import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut, X } from "lucide-react";

function Sidebar({ open, onClose, topOffset = 0 }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
          style={{
            top: topOffset,
            height: `calc(100vh - ${topOffset}px)`,
          }}
          className="
            fixed right-0
            w-[85vw] sm:w-72 md:w-64 lg:w-80 max-w-[420px]
            z-40

            bg-white/90 dark:bg-gray-800/90
            backdrop-blur-xl
            border-l border-gray-200/40 dark:border-gray-700/40
            shadow-xl
            flex flex-col
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
            <span className="text-lg font-bold">Меню</span>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 flex flex-col overflow-y-auto p-2 gap-2">
            <SidebarButton icon={<User />} text="Профиль" />
            <SidebarButton icon={<Settings />} text="Настройки" />
          </nav>

          {/* Footer */}
          <div className="p-2 border-t dark:border-gray-700 sticky bottom-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl">
            <SidebarButton icon={<LogOut />} text="Выйти" />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

/* Button */
function SidebarButton({ icon, text }) {
  return (
    <button
      className="
        flex items-center gap-3
        w-full px-3 py-2 rounded-xl
        bg-blue-500 text-white
        hover:bg-blue-600 transition
      "
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Sidebar;
