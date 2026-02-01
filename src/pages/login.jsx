import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{ height: "80dvh" }}
      className="
        w-full
        overflow-hidden
        grid place-items-center
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
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-blue-400/25 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-purple-400/25 rounded-full blur-[120px]" />

      {/* Card */}
      <div
        className="
          relative z-10
          animate-authIn
          w-[90%] max-w-sm
          p-8
           -translate-y-10
           +sm:-translate-y-12
+translate-y-6
          rounded-3xl
          bg-white/90
          dark:bg-gray-800/90
          backdrop-blur-2xl
          border border-gray-200/40
          dark:border-gray-700/40
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          transition-all
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
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
            border border-gray-300/70
            dark:border-gray-600/70
            bg-transparent
            focus:ring-2 focus:ring-blue-500/40
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
            border border-gray-300/70
            dark:border-gray-600/70
            bg-transparent
            focus:ring-2 focus:ring-blue-500/40
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
            active:scale-[0.97]
            transition
          "
        >
          Войти
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300/70 dark:bg-gray-600/70" />
          <span className="text-sm text-gray-500">или</span>
          <div className="flex-1 h-px bg-gray-300/70 dark:bg-gray-600/70" />
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
