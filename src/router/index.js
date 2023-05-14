import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/index/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/posts',
        name: 'posts',
        component: () => import( '../views/posts/index.vue')

    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import( '../views/categories/index.vue')

    }, {
        path: '/about',
        name: 'about',
        component: () => import( '../views/about/index.vue')

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
