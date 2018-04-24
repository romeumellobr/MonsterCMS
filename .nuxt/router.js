import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5eaef090 = () => import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */).then(m => m.default || m)
const _307c5c9b = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _29cf9e2c = () => import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */).then(m => m.default || m)
const _49c44751 = () => import('../pages/posts/edit.vue' /* webpackChunkName: "pages/posts/edit" */).then(m => m.default || m)
const _65c26c7a = () => import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */).then(m => m.default || m)
const _71f165d2 = () => import('../pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */).then(m => m.default || m)
const _f1405210 = () => import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */).then(m => m.default || m)
const _51e05d97 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/users",
			component: _5eaef090,
			name: "users"
		},
		{
			path: "/posts",
			component: _307c5c9b,
			name: "posts"
		},
		{
			path: "/categories",
			component: _29cf9e2c,
			name: "categories"
		},
		{
			path: "/posts/edit",
			component: _49c44751,
			name: "posts-edit"
		},
		{
			path: "/posts/:id",
			component: _65c26c7a,
			name: "posts-id"
		},
		{
			path: "/categories/:id",
			component: _71f165d2,
			name: "categories-id"
		},
		{
			path: "/users/:id",
			component: _f1405210,
			name: "users-id"
		},
		{
			path: "/",
			component: _51e05d97,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
