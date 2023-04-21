
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  ssr: false,
  target: 'server',

  head: {
    title: 'TrackUser',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tracking user' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.js' },
    { src: '~/plugins/toast.client.js' },
  ],

  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],

  router: {
    middleware: ['auth',]
  },

  components: true,
  modules: [
    '@nuxtjs/tailwindcss',
  ]
})
