/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#0B0B0B",       // ლოგოს შავი (D)
        "main-gold": "#4B3F72",       // ლოგოს იასამნისფერი (DH)
        "second-gold": "#6C63FF",     // DANI HOTEL ტექსტის ინდიგო
        "main-gray": "#6B6B6B",       // ნეიტრალური ნაცრისფერი
        "second-gray": "#9A9A9A",     // ღია ნაცრისფერი ტექსტისთვის
        "third-gray": "#D6D6D6",      // ძალიან ღია ნაცრისფერი
        "main-light": "#EDEDED"       // ლოგოს ფონის ფერი
      },
      fontFamily: {
        winslowBook: ["Winslow Book", "serif"],
      },
    },
  },
  plugins: [],
};
