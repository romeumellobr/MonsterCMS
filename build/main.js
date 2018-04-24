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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var dbname =  false ? 'koatest' : 'koa';

/* harmony default export */ __webpack_exports__["a"] = ({
  app: {
    name: 'something',
    version: '1.0.0'
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(5);







var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].server.port;

// Import and Set Nuxt.js options
var nuxtConfig = __webpack_require__(12);
nuxtConfig.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](nuxtConfig);

// Build in development
if (nuxtConfig.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Middlewares are imported here.
Object(__WEBPACK_IMPORTED_MODULE_3__middlewares__["a" /* default */])(app);

// Hook Nuxt up!
// https://github.com/nuxt-community/koa-template/blob/master/template/server/index.js
app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(9);


// All middlewares are used here.
// Check other Koa official middlewares: https://github.com/koajs



var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return next();

            case 3:

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
              _context.next = 13;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              ctx.status = _context.t0.status || 500;

              ctx.type = 'json';
              ctx.body = {
                status: ctx.status,
                message: _context.t0.message
              };

              ctx.app.emit('error', _context.t0, ctx);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_static___default()(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].static_dir.root));

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default()());

  // Add routes by group.
  var mount = __webpack_require__(11);
  app.use(mount('/api', Object(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */])(app)));
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_trie_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_trie_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_trie_router__);




var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var router = new __WEBPACK_IMPORTED_MODULE_1_koa_trie_router___default.a();

var middleware3 = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Time: ', Date.now());
            _context.next = 3;
            return next();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function middleware3(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var middleware1 = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("I'll be logged first. ");
            _context2.next = 3;
            return next();

          case 3:
            console.log("I'll be logged last. ");

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function middleware1(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var middleware2 = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("I'll be logged second. ");
            _context3.next = 3;
            return next();

          case 3:
            console.log("I'll be logged third. ");

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function middleware2(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Dummy users.
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* harmony default export */ __webpack_exports__["a"] = (function (app) {

  // Home page.
  router.get('/', middleware1, middleware2, middleware3, function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ctx.type = 'json';
              ctx.body = {
                message: 'Hello World!'
              };

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  // Get all users.
  router.get('/users', function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ctx.type = 'json';
              ctx.body = users;

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());

  // Get the user by id.
  router.get('/users/:id', function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
      var id;
      return __WEBPACK_IMPORTED_MODULE_0__home_jeff_Projects_MonsterCMS_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = parseInt(ctx.params.id);

              console.log(users[id]);
              if (id >= 0 && id < users.length) {
                ctx.body = users[id];
              } else {
                ctx.throw(404);
              }

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());

  return router.middleware();
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-trie-router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 12 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.map