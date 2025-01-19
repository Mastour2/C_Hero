/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        baseOne: "",
        baseTow: "",
        baseThree: "",
        baseBorderOne: "",
        baseBorderTow: "",
        prime: "rgba(var(--bg-1))",
        text: "rgba(var(--text))",
        border1: "rgba(var(--border-1))",
        border2: "rgba(var(--border-2))",
      },
      fontFamily: {
        code: ["JetBrains Mono", "serif"],
        nunito: ["Nunito Sans", "serif"]
      },
    }
  },

  plugins: []
};
