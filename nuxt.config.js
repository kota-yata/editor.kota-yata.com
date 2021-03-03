export default {
  // Target: https://go.nuxtjs.dev/config-target
  mode: 'spa',
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Summarizy',
    htmlAttrs: { lang: 'en', },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Summarize document' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
    script: [{ src: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.min.js', integrity: 'sha384-Rsf8MiIHKf4GYNodK6fZAeoKdbiBXCrgOdMVxIzYmk+gqnrHgC+AyneIM0UI2UFG', crossorigin: 'anonymous' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],
  webfontloader: { google: { families: ['Rammetto+One', 'Inter'], }, },
  styleResources: { scss: ['~/assets/variable.scss'], },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
