const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      {
        light_grey_primary: {

          "primary": "#5d1693",

          "secondary": "#ef4ab5",

          "accent": "#484da5",

          "neutral": "#2B222F",

          "base-100": "#E7E8F4",

          "info": "#74C1F1",

          "success": "#156655",

          "warning": "#F2BF40",

          "error": "#E76F8B",
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
};

module.exports = config;
