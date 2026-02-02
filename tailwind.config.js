module.exports = {
  theme: {
    extend: {
      keyframes: {
        pageIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(6px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        pageIn: "pageIn 0.5s ease-out forwards",
      },
    },
  },
};
