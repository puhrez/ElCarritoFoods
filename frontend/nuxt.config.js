module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'El Carrito Foods | Local + Económico + Artesanal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'La solución local para tu paladar global. El Carrito Foods es un servicio gastronómico que utiliza productos locales y técnicas artesanales para proveer comida integra, nutritiva y accesible.' },
      { property: "og:title", content: "El Carrito Foods | Local + Económico + Artesanal" },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "http://dev.elcarritofoods.com" },
      { property: "fb:app_id", content: "132061870754806" },
      { property: "og:locale", content: "es_PR" },
      { property: "og:site_name", content: "El Carrito Foods" },
      { property: "restaurant:contact_info:email", content: "info@elcarritofoods.com" },
      { property: "og:image", content: "http://dev.elcarritofoods.com/logo.png" },
      { property: "og:image:alt", content: "El logo del Carrito Foods" },
      { property: "og:description", content: "La solución local para tu paladar global. El Carrito Foods es un servicio gastronómico que utiliza productos locales y técnicas artesanales para proveer comida íntegra, nutritiva y accesible." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Press+Start+2P|Roboto' }
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    '@/static/base.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  render: {
    gzip: { threshold: 9 }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  }
}
