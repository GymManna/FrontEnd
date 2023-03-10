import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" // vue-router

const app = createApp(App);

app.use(router);
app.mount('#app');
