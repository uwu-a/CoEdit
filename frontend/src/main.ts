// import { setupToolbar } from './setup-toolbar'
// import { setupUniver } from './setup-univer'
// import './style.css'
//
// function main() {
//   const univerAPI = setupUniver()
//   window.univerAPI = univerAPI
//   setupToolbar(univerAPI)
// }
//
// main()

import App from "./App.vue";
import {createApp} from "vue";
import router from "./router/route.ts";
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()

createApp(App).use(router).use(ElementPlus).use(pinia).mount("#app");
