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
    w-[45px] h-[45px]
sm:w-[53px] sm:h-[53px]
md:w-[69px] md:h-[69px]
lg:w-[101px] lg:h-[101px]


          p-1
          rounded-full
          bg-linear-to-tr
          from-blue-400 via-purple-400 to-pink-400
          shadow-xl
          perspective-distant
          transition-all
        "
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
              backface-hidden
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
