import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        component: () => import('@/pages/index.vue')
    }
]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})