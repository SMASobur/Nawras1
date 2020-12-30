import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_5b921cea from 'nuxt_plugin_workbox_5b921cea' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_83b4bb0e from 'nuxt_plugin_nuxticons_83b4bb0e' // Source: .\\nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_60cab168 from 'nuxt_plugin_plugin_60cab168' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_distplugintemplate2991bf45_03b2f220 from 'nuxt_plugin_distplugintemplate2991bf45_03b2f220' // Source: .\\dist.plugin.template.2991bf45.js (mode: 'all')
import nuxt_plugin_nuxtgooglemaps_992ff570 from 'nuxt_plugin_nuxtgooglemaps_992ff570' // Source: .\\nuxt-google-maps.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_587a2dd7 from 'nuxt_plugin_cookieuniversalnuxt_587a2dd7' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_apollomodule_7caff8fb from 'nuxt_plugin_apollomodule_7caff8fb' // Source: .\\apollo-module.js (mode: 'all')
import nuxt_plugin_axios_f12e67a2 from 'nuxt_plugin_axios_f12e67a2' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_moment_745c4b49 from 'nuxt_plugin_moment_745c4b49' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_notifier_3e43155b from 'nuxt_plugin_notifier_3e43155b' // Source: ..\\plugins\\notifier.js (mode: 'all')
import nuxt_plugin_apolloerrorhandler_4a9e745a from 'nuxt_plugin_apolloerrorhandler_4a9e745a' // Source: ..\\plugins\\apollo-error-handler.js (mode: 'all')
import nuxt_plugin_apollowatchloadinghandler_994d5338 from 'nuxt_plugin_apollowatchloadinghandler_994d5338' // Source: ..\\plugins\\apollo-watch-loading-handler.js (mode: 'all')
import nuxt_plugin_vstripeelements_6a2d2966 from 'nuxt_plugin_vstripeelements_6a2d2966' // Source: ..\\plugins\\v-stripe-elements.js (mode: 'client')
import nuxt_plugin_vuexpersist_13f465a2 from 'nuxt_plugin_vuexpersist_13f465a2' // Source: ..\\plugins\\vuex-persist (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - restaurant_client","title":"restaurant_client","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Restaurant client app"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"restaurant_client"},{"hid":"author","name":"author","content":"shafi"},{"hid":"theme-color","name":"theme-color","content":"#333333"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"restaurant_client"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"restaurant_client"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Restaurant client app"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fv-stripe-elements@v1.2.0\u002Fdist\u002Fv-stripe-elements.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.5af1c3ca.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png","sizes":"512x512"}],"style":[],"script":[{"innerHTML":"window.initMap = function (){\n      window.dispatchEvent(new Event('maps-module:loaded'));\n      window.addEventListener('maps-module:initiated', function(){\n        setTimeout(function(){\n          window.dispatchEvent(new Event('maps-module:loaded'));\n        });\n      });\n    }","type":"text\u002Fjavascript"},{"src":"\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyA7hcdnNTKyEyxGiCtQ_FTRNU-lQktGeac&libraries=places&callback=initMap","defer":true,"async":true}],"__dangerouslyDisableSanitizers":["script"],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_5b921cea === 'function') {
    await nuxt_plugin_workbox_5b921cea(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_83b4bb0e === 'function') {
    await nuxt_plugin_nuxticons_83b4bb0e(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_60cab168 === 'function') {
    await nuxt_plugin_plugin_60cab168(app.context, inject)
  }

  if (typeof nuxt_plugin_distplugintemplate2991bf45_03b2f220 === 'function') {
    await nuxt_plugin_distplugintemplate2991bf45_03b2f220(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtgooglemaps_992ff570 === 'function') {
    await nuxt_plugin_nuxtgooglemaps_992ff570(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_587a2dd7 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_587a2dd7(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_7caff8fb === 'function') {
    await nuxt_plugin_apollomodule_7caff8fb(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_f12e67a2 === 'function') {
    await nuxt_plugin_axios_f12e67a2(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_745c4b49 === 'function') {
    await nuxt_plugin_moment_745c4b49(app.context, inject)
  }

  if (typeof nuxt_plugin_notifier_3e43155b === 'function') {
    await nuxt_plugin_notifier_3e43155b(app.context, inject)
  }

  if (typeof nuxt_plugin_apolloerrorhandler_4a9e745a === 'function') {
    await nuxt_plugin_apolloerrorhandler_4a9e745a(app.context, inject)
  }

  if (typeof nuxt_plugin_apollowatchloadinghandler_994d5338 === 'function') {
    await nuxt_plugin_apollowatchloadinghandler_994d5338(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vstripeelements_6a2d2966 === 'function') {
    await nuxt_plugin_vstripeelements_6a2d2966(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuexpersist_13f465a2 === 'function') {
    await nuxt_plugin_vuexpersist_13f465a2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
