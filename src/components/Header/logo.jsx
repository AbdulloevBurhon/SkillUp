import { useEffect, useState } from "react";

function Logo({ size = "normal" }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => a + 1080), 2000);
    return () => clearInterval(id);
  }, []);

  const sizes = {
    small: "w-10 h-10",
    normal: "w-14 h-14",
    large: "w-20 h-20",
  };

  return (
    <div className="flex items-center cursor-pointer select-none">
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
              scale-75
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
