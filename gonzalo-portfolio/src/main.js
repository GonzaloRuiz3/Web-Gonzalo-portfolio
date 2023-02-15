import { ref, h } from "vue"
import { createI18n } from 'vue-i18n'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone)
library.add(faEnvelope)

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
    vueApp.component('font-awesome-icon', FontAwesomeIcon);
    vueApp.mount('#app');
}; 

mainSetup();
