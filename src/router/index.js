import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/pages/Main";
import Cartoon_1 from "@/pages/Cartoon_1";
import Cartoon_7 from "@/pages/Cartoon_7";
import Cartoon_11 from "@/pages/Cartoon_11";
import Cartoon_12 from "@/pages/Cartoon_12";
import Cartoon_13 from "@/pages/Cartoon_13";
import Cartoon_14 from "@/pages/Cartoon_14";
import Cartoon_15 from "@/pages/Cartoon_15";
import Cartoon_16 from "@/pages/Cartoon_16";
import Cartoon_17 from "@/pages/Cartoon_17";
import Cartoon_18 from "@/pages/Cartoon_18";
import Cartoon_19 from "@/pages/Cartoon_19";
import Cartoon_20 from "@/pages/Cartoon_20";
import Cartoon_21 from "@/pages/Cartoon_21";
import Cartoon_22 from "@/pages/Cartoon_22";
import Cartoon_23 from "@/pages/Cartoon_23";
import Cartoon_13_1 from "@/pages/Cartoon_13_1";
import Cartoon_13_2 from "@/pages/Cartoon_13_2";
import Cartoon_24 from "@/pages/Cartoon_24";

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
        path: '/7',
        name: 'Cartoon_7',
        component: Cartoon_7,
    },
    {
        path: '/11',
        name: 'Cartoon_11',
        component: Cartoon_11,
    },{
        path: '/12',
        name: 'Cartoon_12',
        component: Cartoon_12,
    },
    {
        path: '/13',
        name: 'Cartoon_13',
        component: Cartoon_13,
    },
    {
        path: '/13_1',
        name: 'Cartoon_13_1',
        component: Cartoon_13_1,
    },
    {
        path: '/13_2',
        name: 'Cartoon_13_2',
        component: Cartoon_13_2,
    },
    {
        path: '/14',
        name: 'Cartoon_14',
        component: Cartoon_14,
    },
    {
        path: '/15',
        name: 'Cartoon_15',
        component: Cartoon_15,
    },
    {
        path: '/16',
        name: 'Cartoon_16',
        component: Cartoon_16,
    },
    {
        path: '/17',
        name: 'Cartoon_17',
        component: Cartoon_17,
    },
    {
        path: '/18',
        name: 'Cartoon_18',
        component: Cartoon_18,
    },{
        path: '/19',
        name: 'Cartoon_19',
        component: Cartoon_19,
    },
    {
        path: '/20',
        name: 'Cartoon_20',
        component: Cartoon_20,
    },
    {
        path: '/21',
        name: 'Cartoon_21',
        component: Cartoon_21,
    },
    {
        path: '/22',
        name: 'Cartoon_22',
        component: Cartoon_22,
    },
    {
        path: '/23',
        name: 'Cartoon_23',
        component: Cartoon_23,
    },
    {
        path: '/24',
        name: 'Cartoon_24',
        component: Cartoon_24,
    },







]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router