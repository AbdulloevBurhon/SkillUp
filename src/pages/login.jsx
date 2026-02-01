import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{ minHeight: "80dvh" }}
      className="
        w-full
        grid place-items-center
        overflow-hidden
        relative
        bg-gradient-to-br
        from-blue-100
        via-purple-100
        to-pink-100
        dark:from-gray-900
        dark:via-gray-800
        dark:to-gray-900
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl" />

      {/* Card */}
      <div
        className="
          relative z-10
          w-[92%] max-w-sm
          p-8
          rounded-2xl
          bg-white/90
          dark:bg-gray-800/90
          backdrop-blur-xl
          border border-gray-200/50
          dark:border-gray-700/50
          shadow-xl
          transition-all
          hover:shadow-2xl
        "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">Вход</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="
            w-full mb-4 px-4 py-2.5
            rounded-xl
            border border-gray-300
            dark:border-gray-600
            bg-transparent
            focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-500
            outline-none
            transition
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full mb-5 px-4 py-2.5
            rounded-xl
            border border-gray-300
            dark:border-gray-600
            bg-transparent
            focus:ring-2 focus:ring-blue-500/50
            focus:border-blue-500
            outline-none
            transition
          "
        />

        {/* Button */}
        <button
          className="
            w-full py-2.5
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            text-white
            font-semibold
            tracking-wide
            hover:opacity-90
            hover:shadow-lg
            active:scale-95
            transition
          "
        >
          Войти
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
          <span className="text-sm text-gray-500">или</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
