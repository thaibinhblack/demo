import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/admin',
        component: () => import('@/pages/admin.vue'),
        children: [
            {
                path: 'add-news',
                component: () => import('@/pages/news/add.vue')
            }
        ]
    }s
]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})