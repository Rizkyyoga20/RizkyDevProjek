import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'],
  plugins: [
    vue(),
    vercel({
      cleanUrls: true,
      trailingSlash: false,
      routes: [
        {
          src: '/(.*)',
          dest: '/index.html',
          status: 200,
        },
      ],
    }),
  ],
})
