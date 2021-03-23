import { createApp } from 'vue'
import App from './App.vue'
import Beehive from '../libs/beehive/index.js';
new Beehive({
    dom: '#app',
    root: App,
    createApp: createApp
})

// import app from './pages/framework/components.vue';

// createApp(app).mount('#app')
