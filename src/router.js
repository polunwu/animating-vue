import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import(/* webpackChunkName: "list" */ './views/Card.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Simple.vue')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Stagger.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/State.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Timeline.vue')
    },
    {
      path: '/master',
      name: 'master',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Master.vue')
    }
  ]
})
