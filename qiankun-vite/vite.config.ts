import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from '@rollup/plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3000/',
  plugins: [vue()],
  build: {
    // assetsInlineLimit: 0, // 为了让图片单独打包
    target: "esnext",
    lib: {
      name:'viteApp',
      entry: './src/main.ts',
      formats: ['umd'],
    },
  },
})
