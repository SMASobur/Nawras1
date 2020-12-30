import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ebe80578 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1e18499a = () => interopDefault(import('..\\pages\\amp.vue' /* webpackChunkName: "pages/amp" */))
const _fa30ab32 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _6dec5716 = () => interopDefault(import('..\\pages\\current_reservation.vue' /* webpackChunkName: "pages/current_reservation" */))
const _73a850cd = () => interopDefault(import('..\\pages\\delivery\\index.vue' /* webpackChunkName: "pages/delivery/index" */))
const _8823d46e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3518738f = () => interopDefault(import('..\\pages\\kitchen\\index.vue' /* webpackChunkName: "pages/kitchen/index" */))
const _ed758c06 = () => interopDefault(import('..\\pages\\order.vue' /* webpackChunkName: "pages/order" */))
const _20eb352c = () => interopDefault(import('..\\pages\\preorder.vue' /* webpackChunkName: "pages/preorder" */))
const _d4e6cb8a = () => interopDefault(import('..\\pages\\reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _74aa0c97 = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _869dc1d6 = () => interopDefault(import('..\\pages\\admin\\category\\create_category.vue' /* webpackChunkName: "pages/admin/category/create_category" */))
const _d7857498 = () => interopDefault(import('..\\pages\\admin\\category\\show_category.vue' /* webpackChunkName: "pages/admin/category/show_category" */))
const _12404935 = () => interopDefault(import('..\\pages\\admin\\menu\\create_menu.vue' /* webpackChunkName: "pages/admin/menu/create_menu" */))
const _ac9b89d8 = () => interopDefault(import('..\\pages\\admin\\menu\\show_menu.vue' /* webpackChunkName: "pages/admin/menu/show_menu" */))
const _b41259fa = () => interopDefault(import('..\\pages\\admin\\order\\all_orders.vue' /* webpackChunkName: "pages/admin/order/all_orders" */))
const _b004d17a = () => interopDefault(import('..\\pages\\admin\\reservation\\all_reservations.vue' /* webpackChunkName: "pages/admin/reservation/all_reservations" */))
const _707a7981 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _ebe80578,
    name: "admin"
  }, {
    path: "/amp",
    component: _1e18499a,
    name: "amp"
  }, {
    path: "/checkout",
    component: _fa30ab32,
    name: "checkout"
  }, {
    path: "/current_reservation",
    component: _6dec5716,
    name: "current_reservation"
  }, {
    path: "/delivery",
    component: _73a850cd,
    name: "delivery"
  }, {
    path: "/inspire",
    component: _8823d46e,
    name: "inspire"
  }, {
    path: "/kitchen",
    component: _3518738f,
    name: "kitchen"
  }, {
    path: "/order",
    component: _ed758c06,
    name: "order"
  }, {
    path: "/preorder",
    component: _20eb352c,
    name: "preorder"
  }, {
    path: "/reservation",
    component: _d4e6cb8a,
    name: "reservation"
  }, {
    path: "/shop",
    component: _74aa0c97,
    name: "shop"
  }, {
    path: "/admin/category/create_category",
    component: _869dc1d6,
    name: "admin-category-create_category"
  }, {
    path: "/admin/category/show_category",
    component: _d7857498,
    name: "admin-category-show_category"
  }, {
    path: "/admin/menu/create_menu",
    component: _12404935,
    name: "admin-menu-create_menu"
  }, {
    path: "/admin/menu/show_menu",
    component: _ac9b89d8,
    name: "admin-menu-show_menu"
  }, {
    path: "/admin/order/all_orders",
    component: _b41259fa,
    name: "admin-order-all_orders"
  }, {
    path: "/admin/reservation/all_reservations",
    component: _b004d17a,
    name: "admin-reservation-all_reservations"
  }, {
    path: "/",
    component: _707a7981,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
