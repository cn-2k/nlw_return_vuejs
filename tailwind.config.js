// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6",
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
