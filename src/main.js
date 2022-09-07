import { createApp } from 'vue';
import { createVuestic } from 'vuestic-ui';
import mitt from 'mitt';
import App from './App.vue';
import 'vuestic-ui/dist/vuestic-ui.css';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(createVuestic()).mount('#app');
