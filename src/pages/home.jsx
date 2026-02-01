import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="
        h-95 sm:h-screen
        w-full
        flex
        items-center
        justify-center
        relative
        overflow-hidden

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
      <div className="pointer-events-none absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-pink-400/30 rounded-full blur-[140px]" />

      {/* Content */}
      <div
        className="
          relative z-10
          text-center

          max-w-2xl
          px-4

          animate-authIn
        "
      >
        {/* Title */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl

            font-extrabold
            mb-6

            bg-gradient-to-r
            from-blue-500
            via-purple-500
            to-pink-500
            bg-clip-text
            text-transparent
          "
        >
          Добро пожаловать в SkillUp 🚀
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-base
            sm:text-lg
            md:text-xl

            text-gray-700
            dark:text-gray-300

            mb-8
          "
        >
          Развивай навыки. Учись. Становись лучше каждый день.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
          "
        >
          <Link
            to="/register"
            className="
              px-6 py-3
              rounded-xl
              font-semibold

              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white

              shadow-lg
              hover:scale-105
              transition
            "
          >
            Начать бесплатно
          </Link>

          <Link
            to="/login"
            className="
              px-6 py-3
              rounded-xl
              font-semibold

              border
              border-gray-300
              dark:border-gray-600

              text-gray-700
              dark:text-gray-300

              hover:bg-gray-100
              dark:hover:bg-gray-800

              transition
            "
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
