import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'
import app from './app.vue'
import scriptView from './router/script-view.vue'
import scene from './router/scene.vue'
import report from './router/report.vue'
import VueRouter from 'vue-router'
import store from './vuex/store'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Resource)

const router = new VueRouter()
const App = Vue.extend(app)

router.map({
    '/script': {
        component: scriptView
    },
    '/scene': {
        component: scene
    },
    '/report': {
        component: report
    }
})
router.redirect({
    '/': '/script'
})
router.start(App, 'body')
