import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const route = [
    {
        path: '/',
        component: () => import('@/pages/index.vue')
    }
]