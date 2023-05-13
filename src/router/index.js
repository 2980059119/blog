import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import( '../views/editor/index.vue')

    },
    {
        path: '/posts',
        name: 'posts',
        component: () => import( '../views/posts/index.vue')

    },
    {
        path: '/common',
        name: 'common',
        component: () => import( '../views/common/index.vue')

    },
    {
        path: '/test',
        name: 'test',
        component: () => import( '../views/test/index.vue')

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
