import { ref, h } from "vue"
import { createI18n } from 'vue-i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import router from "./router"


import {vueApp, emitter} from "./core_instances"


// I18n
const i18n = createI18n({ 
    locale: "en", 
});

// Communications

// Main Vue & config setup as an async function to allow "await" services
const mainSetup = async function() {
 

    vueApp.use(router);
    vueApp.use(i18n);

    vueApp.mount('#app');
}; 

mainSetup();
