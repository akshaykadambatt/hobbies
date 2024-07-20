import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
import type { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }: { matchUtilities: PluginAPI["matchUtilities"]; theme: PluginAPI["theme"] }) => {
      matchUtilities(
        {
          "animation-duration": (value: string) => {
            return {
              "animation-duration": `${value} !important`,
            };
          },
        },
        {
          values: theme("transitionDuration"),
        }
      );
    }),
  ],
};

export default config;
