import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/login.vue')
    },
    {
        path: 'mews/:id',
        component: () => import('@/pages/news.vue')
    },
    {
        path: '/admin',
        component: () => import('@/pages/admin.vue'),
        children: [
            {
                path: 'add-news',
                component: () => import('@/pages/news/add.vue')
            },
            {
                path: 'news',
                component: () => import('@/pages/news/list.vue')
            },
            {
                path: 'news/:id',
                component: () => import('@/pages/news/itemNews.vue')
            }
        ]
    }
]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})