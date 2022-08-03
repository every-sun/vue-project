import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/UserList.vue')
    },
    {
        path: '/:userId',
        name: 'PostList',
        component: () => import('@/components/PostList')
    },
    {
        path: '/:userId/:title',
        name: 'PostDetail',
        component: () => import('@/components/PostDetail')
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})