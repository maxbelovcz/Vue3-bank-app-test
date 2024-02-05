// store.js
import { createStore } from 'vuex';
import { fetchSpecialsList } from './apiConfig';

export default createStore({
    state: {
        specialsList: [],
    },
    mutations: {
        setSpecialsList(state, data) {
            state.specialsList = data;
        },
    },
    actions: {
        async fetchSpecials({ commit }) {
            try {
                const data = await fetchSpecialsList();
                commit('setSpecialsList', data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        getSpecialsList: state => state.specialsList,
    },
});
