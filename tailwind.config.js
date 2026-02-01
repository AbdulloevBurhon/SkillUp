module.exports = {
  theme: {
    extend: {
      keyframes: {
        authIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },

      animation: {
        authIn: "authIn 0.7s ease-out forwards",
      },
    },
  },
};
