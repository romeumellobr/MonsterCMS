require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const dbname =  false ? 'MonsterCMS_Test' : 'MonsterCMS';

/* harmony default export */ __webpack_exports__["a"] = ({
  app: {
    name: 'MonsterCMS',
    version: '0.0.1'
  },
  database: {
    driver: 'mongo',
    host: 'localhost',
    port: 27017,
    dbname: dbname,
    username: 'admin',
    password: '123456',
    options: {}
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares_middlewares__ = __webpack_require__(4);







const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].server.port;

// Import and Set Nuxt.js options
let nuxtConfig = __webpack_require__(13);
nuxtConfig.dev = !(app.env === 'production');

// Instantiate nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](nuxtConfig);

// Build in development
if (nuxtConfig.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(e => {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Middlewares are imported here.
Object(__WEBPACK_IMPORTED_MODULE_3__middlewares_middlewares__["a" /* default */])(app);

// Hook Nuxt up!
// https://github.com/nuxt-community/koa-template/blob/master/template/server/index.js
app.use(ctx => {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_static__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(7);


// All middlewares are used here.
// Check other Koa official middlewares: https://github.com/koajs






/* harmony default export */ __webpack_exports__["a"] = (app => {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async (ctx, next) => {
    try {
      await next();

      // Handle 404 - throw it as an error.
      if (ctx.status === 404 && ctx.res.headersSent === false) {
        ctx.throw(404);
      }

      // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}
      if (ctx.status === 200 && ctx.res.headersSent === false) {
        ctx.body = {
          status: 200,
          data: ctx.body
        };
      }
    } catch (err) {
      ctx.status = err.status || 500;

      ctx.type = 'json';
      ctx.body = {
        status: ctx.status,
        message: err.message
      };

      ctx.app.emit('error', err, ctx);
    }
  });

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(__WEBPACK_IMPORTED_MODULE_0_koa_static___default()(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].static_dir.root));

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default()());

  // Add routes by group.
  const mount = __webpack_require__(12);
  app.use(mount('/api', Object(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */])(app)));
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_trie_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_trie_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_trie_router__);


var _this = this;


const fs = __webpack_require__(9);
const jwt = __webpack_require__(10);
const authenticate = __webpack_require__(16);

const router = new __WEBPACK_IMPORTED_MODULE_0_koa_trie_router___default.a();

const middleware3 = async (ctx, next) => {
  console.log('Time: ', Date.now());
  await next();
};

const middleware1 = async (ctx, next) => {
  console.log("I'll be logged first. ");
  await next();
  console.log("I'll be logged last. ");
};

const middleware2 = async (ctx, next) => {
  console.log("I'll be logged second. ");
  await next();
  console.log("I'll be logged third. ");
};

// Dummy users.
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* harmony default export */ __webpack_exports__["a"] = (app => {

  // Home page.
  router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
    ctx.type = 'json';

    ctx.body = {
      message: 'Olá!'
    };
  });

  // Get all users.
  router.get('/users', jwt, async (ctx, next) => {
    ctx.type = 'json';
    ctx.body = users;
  });

  router.post('/api/login', async (ctx, next) => {
    authenticate(_this);
  });

  // Get the user by id.
  router.get('/users/:id', async (ctx, next) => {
    const id = parseInt(ctx.params.id);
    console.log(users[id]);
    if (id >= 0 && id < users.length) {
      ctx.body = users[id];
    } else {
      ctx.throw(404);
    }
  });

  return router.middleware();
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-trie-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const koaJwt = __webpack_require__(11);

module.exports = koaJwt({
  secret: 'MonsterCMS' // Should not be hardcoded
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://nuxtjs.org/api/configuration-build
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css']
};

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(11);

module.exports = function (ctx) {
  if (ctx.request.body.password === 'password') {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: 'admin' }, 'MonsterCMS'), //Should be the same secret key as the one used is ./jwt.js
      message: "Successfully logged in!"
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map