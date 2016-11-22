import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = require('../views/Home')
const Swipe = require('../views/Swipe')
const Article = require('../views/Article')

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        component: Home
    }, {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    }, {
      path: '/article',
      name: 'article',
      component: Article
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }]
})

router.beforeEach((to, from, next) => {
    router.app.$store.dispatch('hideHeaderNav')
    next()
})

export default router
