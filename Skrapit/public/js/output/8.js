(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.checkParameters();
  },
  data: function data() {
    return {
      titleForm: '',
      form: {
        email: null
      },
      errors: {}
    };
  },
  methods: {
    checkParameters: function checkParameters() {
      switch (this.$route.params.form) {
        case "activation":
          this.titleForm = 'Request new confirmation email';
          break;

        case "reset-password":
          this.titleForm = 'Reset password email';
          break;

        default:
          this.$router.push('/login');
      }
    },
    sendEmail: function sendEmail() {
      if (this.$route.params.form === "activation") this.resendActivation();
      if (this.$route.params.form === "reset-password") this.resetPassword();
    },
    resendActivation: function resendActivation() {
      var _this = this;

      axios.post('/api/auth/request-activation', this.form).then(function (res) {
        _this.$router.push({
          name: 'Login'
        });

        _this.$toast.success(res.data.success);
      })["catch"](function (err) {
        return _this.errors = err.response.data.errors;
      });
    },
    resetPassword: function resetPassword() {
      var _this2 = this;

      axios.post('/api/auth/request-reset-password', this.form).then(function (res) {
        _this2.$router.push({
          name: 'Login'
        });

        _this2.$toast.success(res.data.success);
      })["catch"](function (err) {
        return _this2.errors = err.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                        staticClass: "mb-3",
                        attrs: {
                          src: "/img/brand/logo-colors.svg",
                          alt: "",
                          height: "48"
                        }
                      }),
                      _vm._v(" "),
                      _c("h6", { staticClass: "h4 mb-0 mt-4" }, [
                        _vm._v(_vm._s(_vm.titleForm))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mt-0 mb-4" }, [
                        _vm._v(
                          "Make sure that you have access to your mailbox."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "authentication-form",
                          attrs: { method: "POST" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.sendEmail($event)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-group " }, [
                            _c("label", { staticClass: "form-control-label" }, [
                              _vm._v("Email")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "input-group input-group-merge" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.email,
                                      expression: "form.email"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.errors.email },
                                  attrs: {
                                    type: "text",
                                    id: "email",
                                    placeholder: "hello@skrap-it.com"
                                  },
                                  domProps: { value: _vm.form.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _vm.errors.email
                              ? _c("span", { staticClass: "sred" }, [
                                  _vm._v(" " + _vm._s(_vm.errors.email[0]))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm._m(0)
                        ]
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
                            "\n                                        Sign up now !\n                                    "
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
    return _c("div", { staticClass: "form-group mt-4 text-center" }, [
      _c(
        "button",
        { staticClass: "sbtn sbtn-dark btn-block", attrs: { type: "submit" } },
        [
          _c("i", { staticClass: "fad fa-envelope mr-3" }),
          _vm._v("Send email\n                                                ")
        ]
      )
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

/***/ "./resources/js/views/auth/RequestEmail.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/auth/RequestEmail.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestEmail.vue?vue&type=template&id=501ec285& */ "./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285&");
/* harmony import */ var _RequestEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestEmail.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/RequestEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/RequestEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RequestEmail.vue?vue&type=template&id=501ec285& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/RequestEmail.vue?vue&type=template&id=501ec285&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestEmail_vue_vue_type_template_id_501ec285___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);