export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Editor | kota-yata.com',
    htmlAttrs: { lang: 'en', },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WYSIWIG memo app with PDF preview' },
    ],
    link: [{ rel: 'icon', type: 'image/webp', href: '/sql.webp' }],
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
    '@nuxtjs/pwa',
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
  webfontloader: { google: { families: ['Inter'], }, },
  styleResources: { scss: ['~/assets/variable.scss'], },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    manifest: {
      name: 'kota-yata editor',
      // eslint-disable-next-line camelcase
      short_name: 'Editor',
      description: 'WYSIWYG Markdown editor with pdf viewer',
      lang: 'en',
      // eslint-disable-next-line camelcase
      background_color: '#f5f5f5',
      // eslint-disable-next-line camelcase
      theme_color: '#333333',
    }
  }
};
