import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/

export default defineConfig({
  root: './src',
  assetsInclude: ['**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'],
  plugins: [
    vue(),
    //vueDevTools(),
  ],
})

