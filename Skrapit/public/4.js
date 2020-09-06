(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_content_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-content-loader */ "./node_modules/vue-content-loader/dist/vue-content-loader.es.js");
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
    ContentLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_0__["ContentLoader"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Loader_FormLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Loader/FormLoader */ "./resources/js/components/Loader/FormLoader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    FormLoader: _components_Loader_FormLoader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    getUser: 'getUsers',
    getLoading: 'getLoading'
  })),
  data: function data() {
    return {
      form: {
        'firstname': '',
        'lastname': '',
        'email': '',
        'phone_number': '',
        'address': '',
        'country': ''
      }
    };
  },
  watch: {
    '$store.getters.getUsers': function $storeGettersGetUsers(user) {
      this.form.firstname = user.firstname;
      this.form.lastname = user.lastname;
      this.form.email = user.email;
      this.form.phone_number = user.phone_number;
      this.form.address = user.address;
      this.form.country = user.country;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590& ***!
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
  return _c(
    "content-loader",
    {
      attrs: {
        height: 180,
        width: 480,
        speed: 4,
        primaryColor: "#f2f6fe",
        secondaryColor: "#e0eafa"
      }
    },
    [
      _c("rect", {
        attrs: {
          x: "7",
          y: "28",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "268",
          y: "28",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "6",
          y: "90",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "266",
          y: "90",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "6",
          y: "150",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "266",
          y: "149",
          rx: "4",
          ry: "4",
          width: "204",
          height: "26.52"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "8",
          y: "134",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "7",
          y: "74",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "267",
          y: "75",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "267",
          y: "135",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "7",
          y: "14",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "268",
          y: "14",
          rx: "4",
          ry: "4",
          width: "65.28",
          height: "8.49"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f& ***!
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "content-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-7" }, [
            _c("div", { staticClass: "card" }, [
              _vm.getLoading
                ? _c("div", { staticClass: "card-body" }, [_c("FormLoader")], 1)
                : _vm._e(),
              _vm._v(" "),
              !_vm.getLoading
                ? _c("div", { staticClass: "card-body" }, [
                    _c("form", { attrs: { method: "post" } }, [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Firstname")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.firstname,
                                expression: "form.firstname"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "John",
                              name: "firstname"
                            },
                            domProps: { value: _vm.form.firstname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "firstname",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Lastname")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.lastname,
                                expression: "form.lastname"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Doe",
                              name: "lastname"
                            },
                            domProps: { value: _vm.form.lastname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "lastname",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
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
                            attrs: {
                              type: "text",
                              placeholder: "john.doe@skrap-it.com",
                              name: "email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Phone number")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.phone_number,
                                expression: "form.phone_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "2135096995",
                              name: "phone_number"
                            },
                            domProps: { value: _vm.form.phone_number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "phone_number",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Address (Optional)")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.address,
                                expression: "form.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "42th John Street",
                              name: "address"
                            },
                            domProps: { value: _vm.form.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-xl-6" }, [
                          _c("label", { staticClass: "mr-sm-2" }, [
                            _vm._v("Country")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.country,
                                expression: "form.country"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "France",
                              name: "country"
                            },
                            domProps: { value: _vm.form.country },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "country",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ])
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-5" }, [
            _c("div", { staticClass: "card" }, [
              _vm.getLoading
                ? _c("div", { staticClass: "card-body" }, [_c("FormLoader")], 1)
                : _vm._e(),
              _vm._v(" "),
              !_vm.getLoading
                ? _c("div", { staticClass: "card-body" }, [_vm._m(2)])
                : _vm._e()
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
    return _c("div", { staticClass: "page-title dashboard" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-12" }, [
            _c("div", { staticClass: "page-title-content" }, [
              _c("p", [_vm._v("Your Profile")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("a", { staticClass: "sbtn sbtn-dark", attrs: { href: "" } }, [
        _c("i", { staticClass: "fad fa-save mr-3" }),
        _vm._v("Save")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { action: "#" } }, [
      _c("div", { staticClass: "form-row" }, [
        _c("div", { staticClass: "form-group col-xl-6" }, [
          _c("label", { staticClass: "mr-sm-2" }, [_vm._v("New password")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              type: "password",
              name: "new_password",
              placeholder: "********"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-xl-6" }, [
          _c("label", { staticClass: "mr-sm-2" }, [
            _vm._v("Confirm new password")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              type: "password",
              name: "confirm_new_password",
              placeholder: "********"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-12" }, [
          _c("p", { staticClass: "mt-2 mb-0" }, [
            _vm._v(
              "The password must be 8 characters, 1 capital letter,\n                                            one\n                                            lowercase and a number."
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("a", { staticClass: "sbtn sbtn-dark", attrs: { href: "" } }, [
            _c("i", { staticClass: "fad fa-save mr-3" }),
            _vm._v("Save")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Loader/FormLoader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Loader/FormLoader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLoader.vue?vue&type=template&id=b10dd590& */ "./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590&");
/* harmony import */ var _FormLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader/FormLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/FormLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLoader.vue?vue&type=template&id=b10dd590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/FormLoader.vue?vue&type=template&id=b10dd590&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLoader_vue_vue_type_template_id_b10dd590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Profile.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/dashboard/Profile.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1764171f& */ "./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=1764171f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Profile.vue?vue&type=template&id=1764171f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1764171f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);