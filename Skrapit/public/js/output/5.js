(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Activate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Activate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    this.validToken(this.token);
  },
  data: function data() {
    return {
      tokenIsValid: false,
      token: this.$route.params.token,
      errors: {}
    };
  },
  methods: {
    validToken: function validToken(token) {
      var _this = this;

      var uri = "/api/auth/activate/".concat(token);
      return new Promise(function (resolve, reject) {
        axios.post(uri, token).then(function (resp) {
          _this.tokenIsValid = true;
          resolve(resp);
        })["catch"](function (err) {
          _this.tokenIsValid = false;
          _this.errors = err.response.data.errors;
          reject(err.response.data.errors);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "authentication-bg vsc-initialized" }, [
      _c("div", { staticClass: "account-pages vertical-center" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-xl-10" }, [
              _c("div", { staticClass: "card card-auth auth-shadow" }, [
                _c("div", { staticClass: "card-body p-0" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 around-space" }, [
                      _c("img", {
                        staticClass: "mb-5",
                        attrs: {
                          src: "/img/brand/logo-colors.svg",
                          alt: "",
                          height: "48"
                        }
                      }),
                      _vm._v(" "),
                      _vm.tokenIsValid
                        ? _c("div", { staticClass: "text-center" }, [
                            _c("i", {
                              staticClass: "fad fa-check-circle big-icon sgreen"
                            }),
                            _vm._v(" "),
                            _vm._m(0)
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.tokenIsValid
                        ? _c("div", { staticClass: "text-center" }, [
                            _c("i", {
                              staticClass: "fad fa-times-circle big-icon sred"
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-4" }, [
                              _vm.errors.token
                                ? _c("h4", [
                                    _vm._v(_vm._s(_vm.errors.token[0]))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("h5", { staticClass: "text-muted" }, [
                                _vm._v("This token is no longer valid.")
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group mt-4 text-center" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-primary font-weight-bold ml-1",
                              attrs: { to: "/login" }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "sbtn sbtn-dark",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fad fa-sign-in mr-3"
                                  }),
                                  _vm._v(
                                    "Sign in\n                                                "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col-12 text-center" }, [
                  _c(
                    "p",
                    { staticClass: "text-muted" },
                    [
                      _vm._v(
                        "No account yet ?\n                                    "
                      ),
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary font-weight-bold ml-1",
                          attrs: { to: "/register" }
                        },
                        [
                          _vm._v(
                            "Sign up\n                                        now !\n                                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4" }, [
      _c("h4", [_vm._v("Welcome to Skrap-it !")]),
      _vm._v(" "),
      _c("h5", { staticClass: "text-muted" }, [
        _vm._v("Your account is now activated.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 mobile-none" }, [
      _c("div", { staticClass: "auth-page-sidebar bg-auth" }, [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "auth-user-testimonial-login center" }, [
          _c("p", { staticClass: "lead" }, [
            _vm._v(
              '"Our API is built to last. It is updated daily to\n                                                    ensure maximum\n                                                    information reliability.'
            ),
            _c("br"),
            _c("br"),
            _vm._v(
              '\n                                                    On top of that, we have a free offer for you to test it !"'
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "italic" }, [
            _vm._v("- Kylian, CEO of Skrap-it")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/Activate.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Activate.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activate.vue?vue&type=template&id=28bb3a2b& */ "./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b&");
/* harmony import */ var _Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Activate.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Activate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Activate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Activate.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/Activate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Activate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Activate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Activate.vue?vue&type=template&id=28bb3a2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Activate.vue?vue&type=template&id=28bb3a2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_28bb3a2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);