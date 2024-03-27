// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/sass/style.scss',
  ],

  plugins: [
    '~/plugins/lazyLoading.js',
    '~/plugins/theming.js'
  ],

  modules: ["@nuxtjs/tailwindcss"]
})