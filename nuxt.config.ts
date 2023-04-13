
// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
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

  components: true,
})
