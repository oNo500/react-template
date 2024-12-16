import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  optimizeDeps: { exclude: ['fsevents'] },
  // 别名
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
