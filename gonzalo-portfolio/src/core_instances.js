import { h, createApp } from "vue"
import App from "./App.vue"
import mitt from 'mitt';

export const emitter = mitt();

export const vueApp = createApp({
    render: ()=>h(App)
});

