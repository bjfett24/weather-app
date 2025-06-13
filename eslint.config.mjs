import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginPrettier from "eslint-plugin-prettier"; // The plug8in to run Prettier as an ESLint rule
import configPrettier from "eslint-config-prettier"; // The config to disable conflicting ESLint rules

export default defineConfig([
  {
    files: ["webpack.config.js", "**/*.config.{js,mjs,cjs}"], // Target webpack.config.js and other common config file patterns
    languageOptions: {
      // Enable Node.js global variables and features
      globals: {
        ...globals.node, // Brings in 'module', 'require', '__dirname', etc.
      },
      // Specify sourceType: 'commonjs' for webpack.config.js which uses require/module.exports
      // For eslint.config.mjs itself, it's 'module', but this override is specific.
      sourceType: "commonjs", // Essential for webpack.config.js to recognize require/module.exports
    },
    rules: {
      // You can add specific rules for config files if needed, e.g., to allow console.log
      // 'no-console': 'off',
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },

  {
    languageOptions: {
      globals: globals.browser, // Or globals.browser, globals.node if both apply
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Runs Prettier as an ESLint rule and reports differences as errors
      "prettier/prettier": "error",
    },
  },

  configPrettier,
]);
