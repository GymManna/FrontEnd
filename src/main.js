import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" // vue-router
import axios from 'axios'; // axios
import mitt from 'mitt'; // mitt(event bus)
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const app = createApp(App);
const emitter = mitt();

app.use(router); // vue-router
app.component('font-awesome-icon', FontAwesomeIcon); // fontawesome
app.config.globalProperties.emitter = emitter; // mitt(evetn bus)
app.config.globalProperties.$axios = axios; // axios
app.mount('#app');
