import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  // Load .env
  const viteEnv = loadEnv(mode, process.cwd(), '')
  const env = {}

  // Filter env to variables starting with VITE_APP or VUE_APP
  Object.entries({...process.env, ...viteEnv}).forEach(([key, value]) => {
    if (key.startsWith('VITE_APP') || key.startsWith('VUE_APP')) {
      env[key] = value
    }
  })

  return {
    plugins: [vue()],
    base: './',
    css: {
      postcss: {
        plugins: [
          autoprefixer({}) // add options if needed
        ],
      }
    },
    resolve: {
      alias: [
        // webpack path resolve to vitejs
        {
          find: /^~(.*)$/,
          replacement: '$1',
        },
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '/src'),
        },
      ],
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
        '.scss',
      ],
    },
    server: {
      port: 3000,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      },
    },
    define: {
      // vitejs does not support process.env so we have to redefine it
      'process.env': env,
    },
  }
})
