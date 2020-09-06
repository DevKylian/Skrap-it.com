(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      standardPrice: 3,
      premiumPrice: 8,
      duration: "month"
    };
  },
  methods: {
    pricingChange: function pricingChange() {
      if (this.standardPrice === 3) {
        this.standardPrice = 25;
        this.premiumPrice = 65;
        this.duration = "year";
      } else {
        this.standardPrice = 3;
        this.premiumPrice = 8;
        this.duration = "month";
      }
    },
    subscribePackage: function subscribePackage(packageId) {
      var _this = this;

      var pack = {
        'package_id': packageId
      };
      axios.post('/api/auth/subscribePackage', pack).then(function (resp) {
        return _this.$toast.success(resp.data.success);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "page-title dashboard" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-12" }, [
            _c("div", { staticClass: "page-title-content" }, [
              _c("p", [_vm._v("All Packages")]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex align-items-center mt-3" }, [
                _c("span", { staticClass: "h5 font-weight-normal mr-4 mt-2" }, [
                  _vm._v("Monthly")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "custom-control custom-switch switch-lg" },
                  [
                    _c("input", {
                      staticClass: "custom-control-input",
                      attrs: { type: "checkbox", id: "billingSwitch" },
                      on: { click: _vm.pricingChange }
                    }),
                    _vm._v(" "),
                    _c("label", {
                      staticClass:
                        "custom-control-label text-gray font-weight-normal",
                      attrs: { for: "billingSwitch" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "h5 font-weight-normal ml-1 mt-2" }, [
                  _vm._v("Annual")
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "content-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row text-gray" }, [
          _c("div", { staticClass: "col-12 col-lg-6 col-xl-3" }, [
            _c("div", { staticClass: "card shadow-soft mb-5 mb-lg-6 px-2" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer px-4 pb-4" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-block sbtn-dark animate-up-2",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.subscribePackage(1)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                                Start for Free\n                                "
                    ),
                    _vm._m(2)
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-6 col-xl-3" }, [
            _c("div", { staticClass: "card shadow-soft mb-5 mb-lg-6" }, [
              _c(
                "div",
                {
                  staticClass: "card-header border-light px-4 position-relative"
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "sbadge-price sbadge-soft-orange badge-pill badge-lg position-absolute right-3"
                    },
                    [
                      _vm._v(
                        "\n                        -40%\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex mb-3 mt-5 text-primary" }, [
                    _c("span", { staticClass: "h5 mb-0" }, [_vm._v("$")]),
                    _c(
                      "span",
                      { staticClass: "price display-2 sorange mb-0" },
                      [_vm._v(_vm._s(_vm.standardPrice))]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "h6 font-weight-normal align-self-end",
                        attrs: { "data-id": "duration" }
                      },
                      [_vm._v("/" + _vm._s(_vm.duration))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mb-3 text-black" }, [
                    _vm._v("Standard")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-normal mb-0" }, [
                    _vm._v(
                      "The offer that everyone loves! Low price, and\n                                efficient !"
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer px-4 pb-4" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-block sbtn-orange animate-up-2",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        return _vm.subscribePackage(2)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                                Start with Standard\n                                "
                    ),
                    _vm._m(4)
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-6 col-xl-3" }, [
            _c(
              "div",
              { staticClass: "card shadow-soft border-light mb-5 mb-lg-6" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header border-light px-4 position-relative"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass:
                          "sbadge-price sbadge-soft-red badge-pill badge-lg position-absolute right-3"
                      },
                      [
                        _vm._v(
                          "\n                        -70%\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex mb-3 mt-5" }, [
                      _c("span", { staticClass: "h5 mb-0" }, [_vm._v("$")]),
                      _c("span", { staticClass: "price display-2 sred mb-0" }, [
                        _vm._v(_vm._s(_vm.premiumPrice))
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "h6 font-weight-normal align-self-end",
                          attrs: { "data-id": "duration" }
                        },
                        [
                          _vm._v(
                            "\n                                    /" +
                              _vm._s(_vm.duration)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-3 text-black" }, [
                      _vm._v("Premium")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "font-weight-normal mb-0" }, [
                      _vm._v(
                        "You're unstoppable, you've got the most powerful\n                                offer !"
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "card-footer px-4 pb-4" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-block sbtn-red animate-up-2",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          return _vm.subscribePackage(4)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Start with Pro\n                                "
                      ),
                      _vm._m(6)
                    ]
                  )
                ])
              ]
            )
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
    return _c(
      "div",
      { staticClass: "card-header border-light px-4 position-relative" },
      [
        _c("div", { staticClass: "d-flex mb-3 mt-5" }, [
          _c("span", { staticClass: "display-2 mb-0" }, [_vm._v("Free")]),
          _vm._v(" "),
          _c("span", { staticClass: "h6 font-weight-normal align-self-end" }, [
            _vm._v("/lifetime")
          ])
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "mb-3 text-black" }, [_vm._v("Economic")]),
        _vm._v(" "),
        _c("p", { staticClass: "font-weight-normal mb-0" }, [
          _vm._v(
            "Do you know how to satisfy yourself just a little?\n                                This offer is made for you !"
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-3" }, [
      _c("ul", { staticClass: "list-group simple-list" }, [
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                1.000")
          ]),
          _vm._v(" uses\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Limited")
          ]),
          _vm._v(" access\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Maximum 1 API")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-times" })
          ]),
          _vm._v(" "),
          _c("del", [_vm._v("Graphical statistics available")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-times" })
          ]),
          _vm._v(" "),
          _c("del", [_vm._v("Quota alert by email")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-times" })
          ]),
          _vm._v(" "),
          _c("del", [
            _vm._v(
              "Priority access to new\n                                        releases\n                                    "
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sdark" }, [
            _c("i", { staticClass: "fas fa-times" })
          ]),
          _vm._v(" "),
          _c("del", [_vm._v("Priority on support")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon icon-xs" }, [
      _c("i", { staticClass: "fas fa-arrow-right ml-3" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-3" }, [
      _c("ul", { staticClass: "list-group simple-list" }, [
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                3.000")
          ]),
          _vm._v(" uses\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Full")
          ]),
          _vm._v(" access\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Maximum 3 API")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v(
            "Graphical statistics available\n                                "
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v("Quota alert by email\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v(
            "Priority access to new releases\n                                "
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sorange" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v("Priority on support\n                                ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon icon-xs ml-3" }, [
      _c("i", { staticClass: "fas fa-arrow-right" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-3" }, [
      _c("ul", { staticClass: "list-group simple-list" }, [
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                10.000")
          ]),
          _vm._v(" uses\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Full")
          ]),
          _vm._v(" access\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _c("span", { staticClass: "font-weight-bolder" }, [
            _vm._v("\n                                Maximum 10 API")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v(
            "Graphical statistics available\n                                "
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v("Quota alert by email\n                                ")
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v(
            "Priority access to new releases\n                                "
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "list-group-item font-weight-normal" }, [
          _c("span", { staticClass: "sred" }, [
            _c("i", { staticClass: "fas fa-check" })
          ]),
          _vm._v("Priority on support\n                                ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon icon-xs ml-3" }, [
      _c("i", { staticClass: "fas fa-arrow-right" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/Packages.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/dashboard/Packages.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Packages.vue?vue&type=template&id=1ff6dd67& */ "./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67&");
/* harmony import */ var _Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Packages.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Packages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Packages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Packages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Packages.vue?vue&type=template&id=1ff6dd67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Packages.vue?vue&type=template&id=1ff6dd67&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Packages_vue_vue_type_template_id_1ff6dd67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);