import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  type = "text",
  placeholder = "",
  leftIcon = null,
  showToggle = false,

  error = false,
  disabled = false,

  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const realType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative w-full group">
      {/* Left icon */}
      {leftIcon && (
        <span
          className={`
            absolute left-3 top-1/2 -translate-y-1/2
            transition

            ${
              error
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-400 group-focus-within:text-blue-500"
            }
          `}
        >
          {leftIcon}
        </span>
      )}

      {/* Input */}
      <input
        type={realType}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          px-4 py-2.5
          rounded-xl
          border

          bg-white
          dark:bg-gray-900/80

          text-gray-900
          dark:text-gray-100

          placeholder:text-gray-400
          dark:placeholder:text-gray-500

          outline-none
          transition-all
          duration-200

          focus:ring-4

          ${
            error
              ? `
                border-red-500
                focus:ring-red-500/30
                focus:border-red-500
              `
              : `
                border-gray-300
                dark:border-gray-600

                focus:ring-blue-500/40
                focus:border-blue-500
              `
          }

          ${leftIcon ? "pl-10" : ""}
          ${showToggle ? "pr-10" : ""}

          ${disabled ? "opacity-60 cursor-not-allowed" : ""}

          ${className}
        `}
        {...props}
      />

      {/* Password toggle */}
      {showToggle && type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`
            absolute right-3 top-1/2 -translate-y-1/2
            transition

            ${
              error
                ? "text-red-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            }
          `}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}

export default Input;
