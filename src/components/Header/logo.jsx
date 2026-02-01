import { useEffect, useState } from "react";

function Logo() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => a + 1080), 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center cursor-pointer select-none">
      <div
        className="
          w-24 h-24 p-1 rounded-full
          bg-linear-to-tr
          from-blue-400 via-purple-400 to-pink-400
          shadow-xl
          perspective-distant
        "
      >
        <div
          className="
            w-full h-full rounded-full overflow-hidden
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
              w-full h-full object-contain
              scale-75 backface-hidden
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
