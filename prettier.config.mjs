/** @satisfies {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  singleQuote: true,
  printWidth: undefined,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['^react', '^next', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // tailwind 相关配置
  tailwindFunctions: ['clsx', 'cn', 'twMerge'],
  // tailwindAttributes: ['className', 'class'],
};

export default config;
