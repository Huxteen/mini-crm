(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./ui/vue-paper/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue */ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue");
/* harmony import */ var _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentFooter.vue */ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue");
/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content.vue */ "./ui/vue-paper/src/layout/dashboard/Content.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      id: "",
      employee_id: "",
      errors: []
    };
  },
  components: {
    TopNavbar: _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContentFooter: _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.init();
    this.employee_init();
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    init: function init() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('company/init').then(function (response) {
        _this.id = response.data.company.id;
      })["catch"](function (error) {
        _this.id = null;
      });
    },
    employee_init: function employee_init() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('employee/init').then(function (response) {
        _this2.employee_id = response.data.employee.id;
      })["catch"](function (error) {
        _this2.employee_id = null;
      });
    },
    logout: function logout() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('auth/logout').then(function (response) {
        console.log(response);
        _this3.user = null; // this.$router.push('/login');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./ui/vue-paper/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  computed: {
    routeName: function routeName() {
      var name = this.$route.name;
      return this.capitalizeFirstLetter(name);
    }
  },
  data: function data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown: function toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown: function closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar: function hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    logout: function logout() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('auth/logout').then(function (response) {
        window.location.reload(true);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n.fade-enter,\n  .fade-leave-to\n  /* .fade-leave-active in <2.1.8 */\n\n {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [_c("router-view", { attrs: { user: _vm.user } })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer" }, [
    _c(
      "div",
      {
        staticClass: "container-fluid d-flex flex-wrap justify-content-between"
      },
      [
        _c("nav", [
          _c("ul", [
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { path: "/dashboard" } } }, [
                  _vm._v("Dashboard")
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "copyright d-flex flex-wrap" }, [
      _vm._v("\n      © Coded with\n      "),
      _c("i", { staticClass: "fa fa-heart heart" }),
      _vm._v(" by\n      "),
      _c("a", { attrs: { href: "/dashboard", target: "_blank" } }, [
        _vm._v("   Husteen.")
      ]),
      _vm._v(" \n      Designed by "),
      _c("a", { attrs: { href: "/home", target: "_blank" } }, [
        _vm._v("  Creative Head.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c(
        "side-bar",
        [
          !_vm.user
            ? _c(
                "template",
                { slot: "links" },
                [
                  _c("sidebar-link", {
                    attrs: { to: "/login", name: "Login", icon: "ti-panel" }
                  }),
                  _vm._v(" "),
                  _c("sidebar-link", {
                    attrs: { to: "/home", name: "Home", icon: "ti-panel" }
                  })
                ],
                1
              )
            : _c(
                "template",
                { slot: "links" },
                [
                  _vm.user.role == 1
                    ? [
                        _c("sidebar-link", {
                          attrs: {
                            to: "/dashboard",
                            name: "Home",
                            icon: "ti-home"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/companies",
                            name: "Companies List",
                            icon: "ti-microsoft"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/create/company",
                            name: "Create Company",
                            icon: "ti-dribbble"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/employees",
                            name: "Employees List",
                            icon: "ti-user"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/create/employee",
                            name: "Create Employee",
                            icon: "ti-target"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/add/admin",
                            name: "Add Admin",
                            icon: "ti-cup"
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user.role == 2
                    ? [
                        _c("sidebar-link", {
                          attrs: {
                            to: "/dashboard",
                            name: "Home",
                            icon: "ti-panel"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/company/show/" + _vm.id,
                            name: "Show Company",
                            icon: "ti-map"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/company/employees/" + _vm.id,
                            name: "View Employees",
                            icon: "ti-map"
                          }
                        })
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user.role == 3
                    ? [
                        _c("sidebar-link", {
                          attrs: {
                            to: "/dashboard",
                            name: "Home",
                            icon: "ti-panel"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/employee/show/" + _vm.employee_id,
                            name: "Show Profile",
                            icon: "ti-map"
                          }
                        }),
                        _vm._v(" "),
                        _c("sidebar-link", {
                          attrs: {
                            to: "/employee/edit/" + _vm.employee_id,
                            name: "Edit Profile",
                            icon: "ti-map"
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel" },
        [
          _c("top-navbar", { attrs: { user: _vm.user } }),
          _vm._v(" "),
          _c("dashboard-content", {
            attrs: { user: _vm.user },
            nativeOn: {
              click: function($event) {
                return _vm.toggleSidebar($event)
              }
            }
          }),
          _vm._v(" "),
          _c("content-footer")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
        _vm._v(_vm._s(_vm.routeName))
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "navbar-toggler navbar-burger",
          attrs: {
            type: "button",
            "aria-expanded": _vm.$sidebar.showSidebar,
            "aria-label": "Toggle navigation"
          },
          on: { click: _vm.toggleSidebar }
        },
        [
          _c("span", { staticClass: "navbar-toggler-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "navbar-toggler-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "navbar-toggler-bar" })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "collapse navbar-collapse" }, [
        _c(
          "ul",
          { staticClass: "navbar-nav ml-auto" },
          [
            _vm.user
              ? _c("li", { staticClass: "nav-item" }, [
                  _c("a", { staticClass: "nav-link" }, [
                    _c("i", { staticClass: "ti-cup" }),
                    _vm._v(" "),
                    _vm.user.role == 1
                      ? _c("p", [_vm._v("Admin Level User")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.role == 2
                      ? _c("p", [_vm._v("Company Level User")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.role == 3
                      ? _c("p", [_vm._v("Employee Level User")])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.user
              ? _c(
                  "drop-down",
                  {
                    staticClass: "nav-item",
                    attrs: {
                      title: _vm.user.email,
                      "title-classes": "nav-link",
                      icon: "ti-email"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.logout()
                          }
                        }
                      },
                      [_vm._v("Logout")]
                    )
                  ]
                )
              : _c(
                  "drop-down",
                  {
                    staticClass: "nav-item",
                    attrs: {
                      title: "Account",
                      "title-classes": "nav-link",
                      icon: "ti-bell"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#/login", to: "/login" }
                      },
                      [_vm._v("Login")]
                    )
                  ]
                )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/Content.vue":
/*!*******************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/Content.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=70e75b0b& */ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&lang=css& */ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ui/vue-paper/src/layout/dashboard/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b&":
/*!**************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=70e75b0b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/Content.vue?vue&type=template&id=70e75b0b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_70e75b0b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue":
/*!*************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/ContentFooter.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=template&id=3a8c4506& */ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506&");
/* harmony import */ var _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=script&lang=js& */ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ui/vue-paper/src/layout/dashboard/ContentFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506&":
/*!********************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=template&id=3a8c4506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/ContentFooter.vue?vue&type=template&id=3a8c4506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_3a8c4506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue":
/*!***************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=74b2e4f0& */ "./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ui/vue-paper/src/layout/dashboard/DashboardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0&":
/*!**********************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=74b2e4f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/DashboardLayout.vue?vue&type=template&id=74b2e4f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_74b2e4f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue":
/*!*********************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/TopNavbar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=template&id=1e891fd7& */ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7&");
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=script&lang=js& */ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ui/vue-paper/src/layout/dashboard/TopNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7&":
/*!****************************************************************************************!*\
  !*** ./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=template&id=1e891fd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/layout/dashboard/TopNavbar.vue?vue&type=template&id=1e891fd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_1e891fd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);