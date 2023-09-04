module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        Poppins: "Poppins",
        secondary: 'Rajdhani',
        tertiary: 'Aldrich',
      },
      colors: {
        primary: "#3E82FC",
        lightprimary: "#ECF3FF",
      },
      backgroundImage: {
        Hero: "url('assets/background.png')",
      },
    },
  },
  plugins: [],
};
