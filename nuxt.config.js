export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Country | Orderfaz',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Orderfaz - Web FrontEnd Recruitment Test' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/globe.ico' }
        ]
    },

    env: {
        baseApiUrl: 'https://restcountries.com'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/styles/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: require('sass')
            }
        }
    }
}
