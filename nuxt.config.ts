// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  swiper: {
    modules: ['navigation', 'pagination']},
  css: ['@/assets/css/font.css'],
  features: {inlineStyles: false},
  app:{
    baseURL:'/IsaacBatchi/'
  }
});

