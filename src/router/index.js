import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/UserList.vue')
    },
    {
        path: '/:userId',
        name: 'PostList',
        component: () => import('@/views/PostList')
    },
    {
        path: '/:userId/:id',
        name: 'PostDetail',
        component: () => import('@/views/PostDetail')
    },
    {
        path: '/test',
        name: 'SimpleWithIcon',
        component: () => import('@/components/SimpleWithIcon')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})