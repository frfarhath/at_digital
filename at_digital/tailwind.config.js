/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "375px", // Custom small breakpoint (Optional)
        lg: "1024px", // Default Tailwind lg
        xl: "1280px", // Default Tailwind xl
        md:"769px"
      },
    },
  },
  plugins: [],
};
