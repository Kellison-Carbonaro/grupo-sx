import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bootstrap from './bootstrap';
import router from "./router";
import { VueMaskDirective } from 'v-mask';

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};


createApp(App, bootstrap).use(router).directive('mask', vMaskV3).mount('#app')
