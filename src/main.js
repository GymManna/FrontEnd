import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" // vue-router
import axios from 'axios'; // axios
import mitt from 'mitt'; // mitt(event bus)
import globalmethod from './plugins/GlobalMethod'; // 전역 메소드. moveTo()
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const app = createApp(App);
const emitter = mitt();

// Vuex
import store from './store'
import Vuex from 'vuex';
app.use(store);
app.use(Vuex);
app.config.productionTip = false;

app.use(router); // vue-router
app.use(globalmethod); // 전역 메소드 적용
app.component('font-awesome-icon', FontAwesomeIcon); // fontawesome
app.config.globalProperties.emitter = emitter; // mitt(evetn bus)
app.config.globalProperties.$axios = axios; // axios
app.mount('#app');
