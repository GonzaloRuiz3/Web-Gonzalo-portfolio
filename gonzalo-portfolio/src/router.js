import * as VueRouter from "vue-router"

import Ejemplo from "./components/Ejemplo.vue";
import HelloWorld from "./components/HelloWorld.vue"


export const routes = [
    { path: '/', name: "Home",  component: HelloWorld },
    { path: '/example', name: "Example",  component: Ejemplo }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

  


export default router