import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig({
  files: ["**/*.{js,jsx}"],

  ignores: ["dist", "node_modules"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
  },

  plugins: {
    react,
  },

  extends: [
    js.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
  ],

  settings: {
    react: { version: "detect" },
  },

  rules: {
    // React ko unused mat samjho
    "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],

    // Tailwind class warnings disable
    "react/no-unknown-property": "off",

    // kabhi class error throw karta hai, prevent karne ke liye
    "no-undef": "off",
  },
});
