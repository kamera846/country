import { callingCodeApi } from '../api/v2/callingcode'

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
        async code({ commit }, params) {
            try {
                const response = await callingCodeApi(params?.code, params?.fields)
    
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
    
}