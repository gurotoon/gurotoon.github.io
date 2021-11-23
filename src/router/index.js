import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Cartoon_1 from "@/pages/Cartoon_1";
import Cartoon_14 from "@/pages/Cartoon_14";

Vue.use(VueRouter)

const routes  = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/1',
        name: 'Cartoon_1',
        component: Cartoon_1,
        meta: { transition: 'overlay-up-down' },
    },
    {
        path: '/14',
        name: 'Cartoon_14',
        component: Cartoon_14,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router