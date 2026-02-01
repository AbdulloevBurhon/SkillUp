function Input({
  type = "text",
  variant = "default",
  disabled = false,
  error = false,
  className = "",
  ...props
}) {
  const styles = {
    default: `
      border-gray-300/70
      dark:border-gray-600/70
      focus:ring-blue-500/40
      focus:border-blue-500
    `,

    email: `
      animate-input-1
      border-gray-300/70
      focus:ring-blue-500/40
      focus:border-blue-500
    `,

    password: `
      animate-input-2
      border-gray-300/70
      focus:ring-purple-500/40
      focus:border-purple-500
    `,

    error: `
      border-red-500
      focus:ring-red-500/40
      focus:border-red-500
    `,
  };

  const disabledStyle = `
    opacity-60
    cursor-not-allowed
    bg-gray-100
    dark:bg-gray-700
  `;

  return (
    <input
      type={type}
      disabled={disabled}
      className={`
  w-full px-4 py-2.5
  rounded-xl
  border
  bg-white dark:bg-gray-800/70
  outline-none
  transition-all
  focus:ring-4
  ${styles[error ? "error" : variant]}
  ${disabled && disabledStyle}
  ${className}
`}
      {...props}
    />
  );
}

export default Input;
