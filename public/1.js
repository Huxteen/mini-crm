(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ "./ui/vue-paper/src/components/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./ui/vue-paper/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PaperTable: _components__WEBPACK_IMPORTED_MODULE_0__["PaperTable"]
  },
  data: function data() {
    return {
      errors: [],
      companies: {
        title: "Companies Table",
        subTitle: "List of companies details",
        columns: "",
        data: ""
      }
    };
  },
  mounted: function mounted() {
    this.getCompanies();
  },
  methods: {
    getLogo: function getLogo(url) {
      return "./storage/logo/" + url;
    },
    getCompanies: function getCompanies() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('company/index').then(function (response) {
        _this.companies.data = response.data.companies;
        _this.user = response.data.companies.user;
      })["catch"](function (error) {
        _this.errors.push(error.response.data.error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cp {\n  text-transform: capitalize;\n  font-weight: 700;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompaniesList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12" },
      [
        _c(
          "card",
          {
            attrs: {
              title: _vm.companies.title,
              subTitle: _vm.companies.subTitle
            }
          },
          [
            _vm.errors.length
              ? _c("div", { staticClass: "alert alert-danger" }, [
                  _c(
                    "ul",
                    { staticClass: "error-msg" },
                    _vm._l(_vm.errors, function(error, index) {
                      return _c("li", { key: index }, [
                        _vm._v(
                          "\n            " + _vm._s(error) + "\n          "
                        )
                      ])
                    }),
                    0
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-striped" }, [
                _c("thead", [
                  _c("th", [_vm._v("s/n")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("URL")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("logo")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Edit")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("View")])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    !_vm.companies.data.length
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center cp",
                              attrs: { colspan: "7" }
                            },
                            [_vm._v(" No company added at this time")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.companies.data, function(company, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(company.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(company.user.email))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(company.url))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("img", {
                            attrs: {
                              src: _vm.getLogo(company.logo),
                              height: "80px",
                              width: "80px;"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-info btn-sm",
                                attrs: { to: "/company/edit/" + company.id }
                              },
                              [_vm._v("Edit")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-info btn-sm",
                                attrs: { to: "/company/show/" + company.id }
                              },
                              [_vm._v("View")]
                            )
                          ],
                          1
                        )
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue":
/*!************************************************************!*\
  !*** ./ui/vue-paper/src/pages/Companies/CompaniesList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompaniesList.vue?vue&type=template&id=2cf62778& */ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778&");
/* harmony import */ var _CompaniesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompaniesList.vue?vue&type=script&lang=js& */ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompaniesList.vue?vue&type=style&index=0&lang=css& */ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompaniesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ui/vue-paper/src/pages/Companies/CompaniesList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompaniesList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompaniesList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778&":
/*!*******************************************************************************************!*\
  !*** ./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompaniesList.vue?vue&type=template&id=2cf62778& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ui/vue-paper/src/pages/Companies/CompaniesList.vue?vue&type=template&id=2cf62778&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompaniesList_vue_vue_type_template_id_2cf62778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);