import Vue from 'vue'
import Vuex from 'vuex'

// Import auto exporter modules
import modules from './modules'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({ modules })
}

export default store