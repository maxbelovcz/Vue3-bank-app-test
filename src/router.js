import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Credits from './pages/Credits.vue';
import currencyExchange from './pages/currencyExchange.vue';
import Deposits from './pages/Deposits.vue';
import Mortgage from './pages/Mortgage.vue';
import onlineBank from './pages/onlineBank.vue';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        alias: '/'
    },
    {
        path: '/credits',
        name: 'Credits',
        component: Credits
    },
    {
        path: '/mortgage',
        name: 'Mortgage',
        component: Mortgage
    },
    {
        path: '/deposits',
        name: 'Deposits',
        component: Deposits
    },
    {
        path: '/currencyExchange',
        name: 'currencyExchange',
        component: currencyExchange
    },
    {
        path: '/onlineBank',
        name: 'onlineBank',
        component: onlineBank
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router