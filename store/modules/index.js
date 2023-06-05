/**
 * Automatically imports all the modules and exports as a single module object
 * source: https://medium.com/locale-ai/architecting-vuex-store-for-large-scale-vue-js-applications-24c36137e251
 */
const requireModule = require.context('.', false, /\.store\.js$/)
const modules = {}

requireModule.keys().forEach(filename => {
    // create the module name from fileName
    // remove the store.js extension
    const moduleName = filename
        .replace(/(\.\/|\.store\.js)/g, '')

    modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules