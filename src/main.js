import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uesVant from './plugins/plugins'
const app = createApp(App);
uesVant(app)
app.use(store);
app.use(router).mount('#app');

