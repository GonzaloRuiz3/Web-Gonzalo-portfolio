import * as VueRouter from "vue-router"

import Contacto from "./components/Contacto.vue";
import HelloWorld from "./components/HelloWorld.vue"
import Projects from "./components/Projects.vue"


export const routes = [
    { path: '/', name: "Home",  component: HelloWorld },
    { path: '/contacto', name: "Contacto",  component: Contacto }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

  


export default router