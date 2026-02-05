import { createRouter, createWebHistory } from 'vue-router'
import LinkTree from '@/views/Linktree.vue'
import Projects from '@/views/Projects.vue'

const routes = [
    {
        path: '/',
        name: 'linktree',
        component: LinkTree
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router