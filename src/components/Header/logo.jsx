import { useEffect, useState } from "react";

function Logo({ size = "normal" }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => a + 1080), 2000);
    return () => clearInterval(id);
  }, []);

  // Адаптивные размеры
  const sizes = {
    small: `
      w-8 h-8
      sm:w-9 sm:h-9
      md:w-10 md:h-10
    `,

    normal: `
      w-10 h-10
      sm:w-12 sm:h-12
      md:w-14 md:h-14
      lg:w-16 lg:h-16
    `,

    large: `
      w-12 h-12
      sm:w-14 sm:h-14
      md:w-18 md:h-18
      lg:w-20 lg:h-20
    `,
  };

  return (
    <div className="flex items-center h-full cursor-pointer select-none">
      <div
        className={`
          ${sizes[size]}

          p-1
          rounded-full
          bg-linear-to-tr
          from-blue-400 via-purple-400 to-pink-400
          shadow-xl
          transition-all
        `}
      >
        <div
          className="
            w-full h-full
            rounded-full
            overflow-hidden
            backdrop-blur-sm
            transition-transform duration-700 ease-out
          "
          style={{
            transform: `rotateY(${angle}deg)`,
          }}
        >
          <img
            src="/log.png"
            alt="SkillUp"
            className="
              w-full h-full
              object-contain
              scale-80
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
