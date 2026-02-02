import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, LogOut, X } from "lucide-react";

function Sidebar({ open, onClose, topOffset = 0 }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.aside
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x > 120 || info.velocity.x > 600) {
                onClose();
              }
            }}
            initial={{ x: "100%", scale: 0.95 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: "100%", scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              top: topOffset,
              height: `calc(100vh - ${topOffset}px)`,
            }}
            className="
              fixed right-0
           w-[65vw] sm:w-56 md:w-56 lg:w-60 max-w-[280px]
              z-40

              bg-white/90 dark:bg-gray-800/90
              backdrop-blur-xl
              border-l border-gray-200/40 dark:border-gray-700/40
              shadow-2xl
              flex flex-col
              rounded-l-2xl
              overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
              <span className="text-lg font-bold">Меню</span>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-200/80 dark:bg-gray-700/80 hover:scale-105 transition"
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
            <div className="p-2 border-t dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
              <SidebarButton icon={<LogOut />} text="Выйти" danger />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* Button */
function SidebarButton({ icon, text, danger }) {
  return (
    <button
      className={`
        flex items-center gap-3
        w-full px-3 py-2 rounded-xl
        font-medium

        transition-all

        ${
          danger
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }

        hover:scale-[1.02]
        active:scale-95
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Sidebar;
