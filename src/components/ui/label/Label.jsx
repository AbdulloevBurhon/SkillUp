function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block
        text-sm
        font-medium
        text-gray-600
        dark:text-gray-400

        select-none
        mb-1

        ${className}
      `}
    >
      {children}
    </label>
  );
}

export default Label;
