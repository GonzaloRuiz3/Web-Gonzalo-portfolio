import * as VueRouter from "vue-router"

import Ejemplo from "./components/Ejemplo.vue";
import HelloWorld from "./components/HelloWorld.vue"
import Projects from "./components/Projects.vue"


export const routes = [
    { path: '/', name: "Home",  component: HelloWorld },
    { path: '/example', name: "Example",  component: Ejemplo },
    { path: '/cabeza', name: "Projects", component: Projects } 
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

  


export default router