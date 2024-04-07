// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/sass/style.scss',
  ],
  plugins: [],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    'nuxt-lazy-load'
  ],
  lazyLoad: {
    defaultImage: '/lazy_placeholder.png',
  }
})