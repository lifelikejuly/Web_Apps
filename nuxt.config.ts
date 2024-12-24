// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require('path')
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app:{
     baseURL: '/',
     buildAssetsDir: 'nuxt_assets',
    
  },
  experimental: {
    payloadExtraction: false
  },
  // nitro:{
  //   output: {
  //     publicDir: path.join(__dirname, 'docs')
  //   }
  // }
})
