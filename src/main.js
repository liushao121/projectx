import Vue from 'vue'
import app from './app.vue'
import router from './router/mainRouter'
import store from './vuex/store'
import util from './asset/util.js'
import { sync } from 'vuex-router-sync'

import './styles.css'
// CheckBox 样式
import './asset/icheck/skins/square/blue.css'
// import './asset/bootstrap/dist/css/bootstrap.min.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'
sync(store, router)
const index = new Vue({ render: h => h(app), router, store }).$mount('#app')
