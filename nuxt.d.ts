declare module 'nuxt-swiper' {
    interface SwiperOptions {
      prefix?: string;
      styleLang?: 'css' | 'scss';
      modules?: string[];
    }
    export interface NuxtConfig {
      swiper?: SwiperOptions;
    }
  }