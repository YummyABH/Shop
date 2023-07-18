import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home.vue'
import Catalog from './Catalog.vue'

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
    ]
})