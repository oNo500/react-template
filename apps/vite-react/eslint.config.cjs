// 核心
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// 插件
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginQuery from "@tanstack/eslint-plugin-query";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  // ─── 基础配置 ────────────────────────────────────────────
  { ignores: ["dist"] },
  importPlugin.flatConfigs.recommended,
  ...pluginQuery.configs["flat/recommended"],
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],

    // ─── 语言特性 ────────────────────────────────────────────
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,  // 浏览器环境
        ...globals.node,     // Node 环境
      },
    },

    // ─── 插件配置 ────────────────────────────────────────────
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    // ─── ESLint 规则 ─────────────────────────────────────────
    rules: {
      // ✨ React 规则
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      
      // 🔧 TypeScript 规则
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      
      // 📝 代码质量规则
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  }
);