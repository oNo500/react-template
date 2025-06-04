/** @satisfies {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  objectWrap: 'preserve',
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: ['^react', '^next', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // tailwind 相关配置
  tailwindFunctions: ['clsx', 'cn', 'twMerge'],
  // tailwindAttributes: ['className', 'class'],
};

export default config;
