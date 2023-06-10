import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '@/views/home.vue')
  },
  {
    path: '/posts/:alias',
    name: 'posts',
    component: () => import( '@/views/posts/index.vue')

  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import( '@/views/categories/index.vue')

  }, {
    path: '/about',
    name: 'about',
    component: () => import( '@/views/about/index.vue')

  }, {
    path: '/archives',
    name: 'archives',
    component: () => import( '@/views/archives/index.vue')

  }, {
    path: '/tags',
    name: 'tags',
    component: () => import( '@/views/tags/index.vue')

  }, {
    path: '/test',
    name: 'test',
    component: () => import( '@/views/test/index.vue')
  }, {
    path: '/404',
    component: () => import('@/views/features/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/features/401.vue'),
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory("/blog/"),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {  // 如果未匹配到路由
    from.name ? next({name: from.name}) : next('/404')
  } else {
    next()  // 如果匹配到正确跳转
  }
})

export default router
