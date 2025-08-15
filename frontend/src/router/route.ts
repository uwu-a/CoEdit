import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import IndexView from '../model/index.vue'
import WorkView from '../model/work.vue'

// 定义路由类型
const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'Home', component: IndexView},
    {path: '/edit', name: 'About', component: WorkView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
