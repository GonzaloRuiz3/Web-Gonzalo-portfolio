import * as VueRouter from "vue-router"

import Contacto from "./components/Contacto.vue";
import HelloWorld from "./components/HelloWorld.vue"
import Projects from "./components/Projects.vue"


export const routes = [
    { path: '/', name: "Home",  component: HelloWorld },
    { path: '/contacto', name: "Contacto",  component: Contacto },
    { path: '/proyectos', name: "Proyectos",  component: Projects },
    { path: '/play', name: "Play",  component: Aliens },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

  


export default router