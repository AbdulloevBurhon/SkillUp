function Button({
  children,
  onClick,
  type = "button",
  variant = "login",
  loading = false,
  disabled = false,
}) {
  const styles = {
    login: `
      animate-btn
      w-full py-2.5
      rounded-xl
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white
      font-semibold
      tracking-wide
      transition-all
      hover:opacity-90
      hover:shadow-xl
      active:scale-[0.96]
    `,

    register: `
      w-full py-2.5
      rounded-xl
      border
      border-purple-500
      text-purple-500
      font-semibold
      hover:bg-purple-50
      transition-all
    `,

    default: `
      w-full py-2.5
      rounded-xl
      bg-gray-500
      text-white
    `,
  };

  const disabledStyle = `
    opacity-60
    cursor-not-allowed
    pointer-events-none
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative
        flex items-center justify-center
        ${styles[variant]}
        ${(disabled || loading) && disabledStyle}
      `}
    >
      {/* Spinner */}
      {loading && (
        <span
          className="
            absolute
            w-5 h-5
            border-2
            border-white/40
            border-t-white
            rounded-full
            animate-spin
          "
        />
      )}

      {/* Text */}
      <span
        className={`
          transition
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
