import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import { sync } from 'vuex-router-sync'

// console.log('router: ', router)
// console.log('store: ', store)

sync(store, router)

const app = new Vue({
    store,
    router,
    render: h => h(App)
    // ...App
})

export { app, router, store }
