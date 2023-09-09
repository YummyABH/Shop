import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home.vue'
import Catalog from './Catalog.vue'
import ProductPage from './ProductPage.vue'
import AboutCompany from './AboutCompany.vue'
import Contacts from './Contacts.vue'
import Payment from './Payment.vue'
import Guarantee from './Guarantee.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/catalog',
            component: Catalog,
        },
        {
            path: '/ProductPage',
            component: ProductPage,
        },
        {
            path: '/AboutCompany',
            component: AboutCompany,
        },
        {
            path: '/Contacts',
            component: Contacts,
        },
        {
            path: '/Payment',
            component: Payment,
        },
        {
            path: '/Guarantee',
            component: Guarantee,
        },
    ]
})