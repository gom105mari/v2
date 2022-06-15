import { createApp } from 'vue';
import { createVuestic } from 'vuestic-ui';
import App from './App.vue';
import 'vuestic-ui/dist/vuestic-ui.css';

createApp(App).use(createVuestic()).mount('#app');
