import { defineConfig } from 'vite'
//import { viteStaticCopy } from 'vite-plugin-static-copy'
import copy from 'rollup-plugin-copy'
import path from 'path';
import vue from '@vitejs/plugin-vue'
//import path from 'path'

// FDS Style path to allow for usage of SCSS variables
//const fdsScssPath = path.resolve(__dirname, "./node_modules/fds-style/src/stylesheets/fds-style.scss")
const fdsScssPath = './node_modules/fds-style/src/stylesheets/fds-style.scss';
const fdsFontsPath = './node_modules/fds-style/src/fonts/';
const fdsImagesPath = './node_modules/fds-style/src/img/';

const config = {
  server: { port: 3000 },
  base: '/fpac-design-system/',
  plugins: [
    copy({
      targets: [
        { src: fdsFontsPath, dest: 'public' },
        { src: fdsImagesPath, dest: 'public' }
      ]
    }),
    vue()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${fdsScssPath}";`
      }
    }
  }
}

export default defineConfig(config);
