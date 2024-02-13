// store.js
import { createStore } from 'vuex';
import { fetchSpecialsList, fetchNewsList } from './apiConfig';
import { apiList } from './apiConstants';

export default createStore({
    state: {
        specialsList: [],
        newsList: [],
        showButton: true
    },
    mutations: {
        setSpecialsList(state, data) {
            state.specialsList = data;
        },
        setNewsList(state, data) {
            state.newsList = [...state.newsList, ...data];
        },
        setShowButton(state, value) {
            state.showButton = value;
        }
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
        async fetchNews({ commit, state }) {
            try {
                const currentPage = state.newsList.length > 0 ? Math.ceil(state.newsList.length / 10) + 1 : 1;
                const { data, currentPage: updatedPage, lastPage } = await fetchNewsList(currentPage, apiList);
                console.log('Current Page:', updatedPage);
                console.log('Last Page:', lastPage);

                commit('setNewsList', data);

                if (updatedPage === lastPage) {
                    commit('setShowButton', false);
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        getSpecialsList: state => state.specialsList,
        getNewsList: state => state.newsList,
        getShowButton: state => state.showButton
    },
});
