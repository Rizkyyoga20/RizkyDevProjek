import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel'
//import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/

export default defineConfig({
  assetsInclude: ['**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'],
  plugins: [
    vue(),
    vercel({
      routes: [
        {
          src: '/(.*)',
          dest: '/index.html',
        },
      ],
    }),
    //vueDevTools(),
  ],
})

