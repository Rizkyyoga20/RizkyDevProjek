import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF,svg,SVG}'],
  plugins: [
    vue(),
    vercel({
      redirects: [
        {
          source: '/:path((?!index\\.html).*)',
          destination: '/index.html',
          permanent: false,
        },
      ],
    }),
  ],
})

