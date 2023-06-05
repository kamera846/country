import { allCountries, countryByName } from '../api/v3.1/country'

export default {
    namespaced: true,
    state: {
        data: [],
        message: '',
        status: 200,
        _links: null
    },
    
    mutations: {
        SET_RESPONSE(state, params) {
            state.data = params?.data;
            state.message = params?.message;
            state.status = params?.status;
            state.links = params?.links;
        },
    },
    
    actions: {
        async countries({ commit }, params) {
            try {
                const response = await allCountries(params?.fields)
    
                const responseData = {
                    data: response?.data || null,
                    message: response?.data?.message || '',
                    status: response?.data?.status || 200,
                    _links: response?.data?._links || null,
                }
    
                commit('SET_RESPONSE', responseData);
            } catch (error) {
                const responseData = {
                    data: null,
                    message: `Failed fetch data. Error: ${ error }`,
                    status: 404,
                    _links: null,
                }
    
                commit('SET_RESPONSE', responseData);
            }
        },
    
        async search({ commit }, params) {
            try {
                const response = await countryByName(params?.name, params?.fullText)
    
                const responseData = {
                    data: response?.data || null,
                    message: response?.data?.message || '',
                    status: response?.data?.status || 200,
                    _links: response?.data?._links || null,
                }
    
                commit('SET_RESPONSE', responseData);
            } catch (error) {
                const responseData = {
                    data: null,
                    message: `Failed fetch data. Error: ${ error }`,
                    status: 404,
                    _links: null,
                }
    
                commit('SET_RESPONSE', responseData);
            }
        },
    },
    
    getters: {
        getResponse(state) {
            const response = {
                data: state?.data || null,
                message: state?.message || '',
                status: state?.status || 200,
                _links: state?._links || null,
            }
            return response
        },
    }
    
}