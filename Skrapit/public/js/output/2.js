(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_0__["ContentLoader"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modal',
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/header */ "./resources/js/helpers/header.js");
/* harmony import */ var _components_Loader_ApisLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Loader/ApisLoader */ "./resources/js/components/Loader/ApisLoader.vue");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ "./resources/js/components/Modal.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"],
    ApisLoader: _components_Loader_ApisLoader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    getUser: 'getUsers',
    getLoading: 'getLoading',
    getRemainingUses: 'getRemainingUses'
  })),
  data: function data() {
    return {
      isGenerateApiModalVisible: false,
      isDeleteApiModalVisible: false,
      isReloading: false,
      form: {
        max_uses: '',
        title: ''
      },
      errors: {},
      selectedId: ''
    };
  },
  methods: {
    createApiModal: function createApiModal() {
      if (this.getUser["package"].max_api > this.getUser.apis.length && this.getRemainingUses > 0) {
        this.isGenerateApiModalVisible = !this.isGenerateApiModalVisible;
        this.cleanModalApi();
      } else {
        this.$toast.error("You have exceeded the limits of your offer.");
      }
    },
    deleteApiModal: function deleteApiModal(id) {
      this.selectedId = id;
      this.isDeleteApiModalVisible = !this.isDeleteApiModalVisible;
      this.cleanModalApi();
    },
    createApi: function createApi() {
      var _this = this;

      this.$store.dispatch('createApi', this.form).then(function (res) {
        _this.$toast.success(res.data.success);

        _this.createApiModal();
      })["catch"](function (err) {
        return _this.errors = err;
      });
    },
    deleteApi: function deleteApi(id) {
      var _this2 = this;

      this.$store.dispatch('deleteApi', id).then(function (res) {
        _this2.$toast.success(res.data.success);

        _this2.deleteApiModal(id);
      })["catch"](function (err) {
        return _this2.$toast.error(err);
      });
    },
    cleanModalApi: function cleanModalApi() {
      this.form = {};
      this.errors = {};
    },
    refreshData: function refreshData() {
      this.$store.commit('SET_LOADING', true);
      this.$store.dispatch('setUsers');
      this.disableButton();
    },
    disableButton: function disableButton() {
      var _this3 = this;

      this.isReloading = true;
      setTimeout(function () {
        _this3.isReloading = false;
      }, 5000);
    },
    copyKey: function copyKey(key) {
      var ke = document.createElement('textarea');
      ke.value = key;
      document.body.appendChild(ke);
      ke.select();
      document.execCommand('copy');
      document.body.removeChild(ke);
      this.$toast.success('Key copied to the clipboard');
    },
    toggleApi: function toggleApi(id) {
      var _this4 = this;

      axios.post("/api/intel/toggle/".concat(id), Object(_helpers_header__WEBPACK_IMPORTED_MODULE_1__["authHeader"])()).then(function (res) {
        return _this4.$store.dispatch('setUsers');
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-53ab54d2] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    backdrop-filter: saturate(180%) blur(10px);\n    -webkit-backdrop-filter: saturate(180%) blur(10px);\n    display: table;\n    transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-53ab54d2] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-enter[data-v-53ab54d2] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-53ab54d2] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-53ab54d2],\n.modal-leave-active .modal-container[data-v-53ab54d2] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd& ***!
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
        height: 65,
        width: 480,
        speed: 4,
        primaryColor: "#f2f6fe",
        secondaryColor: "#e0eafa"
      }
    },
    [
      _c("rect", {
        attrs: {
          x: "70",
          y: "15",
          rx: "4",
          ry: "4",
          width: "117",
          height: "6.4"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "70",
          y: "35",
          rx: "3",
          ry: "3",
          width: "85",
          height: "6.4"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "0",
          y: "80",
          rx: "3",
          ry: "3",
          width: "350",
          height: "6.4"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "0",
          y: "100",
          rx: "3",
          ry: "3",
          width: "380",
          height: "6.4"
        }
      }),
      _vm._v(" "),
      _c("rect", {
        attrs: {
          x: "0",
          y: "120",
          rx: "3",
          ry: "3",
          width: "201",
          height: "6.4"
        }
      }),
      _vm._v(" "),
      _c("circle", { attrs: { cx: "30", cy: "30", r: "30" } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
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
  return _c("transition", { attrs: { name: "modal" } }, [
    _c(
      "div",
      {
        staticClass: "modal-mask",
        on: {
          click: function($event) {
            return _vm.$emit("close")
          }
        }
      },
      [
        _c("div", { staticClass: "modal-wrapper modal" }, [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                }
              }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h4",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "generateApiTitle" }
                    },
                    [_vm._t("title")],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_c("i", { staticClass: "fad fa-times-circle" })]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [_vm._t("body")], 2)
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13& ***!
  \************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "page-title dashboard" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xl-12" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex justify-content-between mt-3" },
                [
                  _c("div", [
                    _c(
                      "a",
                      {
                        staticClass: "sbtn sbtn-dark",
                        attrs: { href: "#" },
                        on: { click: _vm.createApiModal }
                      },
                      [
                        _c("i", { staticClass: "fad fa-plus-circle" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "mobile-none ml-3" }, [
                          _vm._v("Create API")
                        ]),
                        _vm._v(" "),
                        !_vm.getLoading
                          ? _c("span", [
                              _vm._v(
                                "\n                                    (" +
                                  _vm._s(_vm.getUser.apis.length) +
                                  "/" +
                                  _vm._s(_vm.getUser.package.max_api) +
                                  ")\n                                "
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "align-self-center justify-content-end" },
                    [
                      !_vm.isReloading
                        ? _c(
                            "button",
                            {
                              staticClass: "sbtn sbtn-dark",
                              on: { click: _vm.refreshData }
                            },
                            [
                              _c("i", { staticClass: "fad fa-sync-alt" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "mobile-none ml-3" }, [
                                _vm._v("Refresh data")
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isReloading
                        ? _c(
                            "button",
                            {
                              staticClass: "sbtn sbtn-dark",
                              attrs: { disabled: true }
                            },
                            [
                              _c("i", {
                                staticClass: "fad fa-sync-alt fa-spin"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "mobile-none ml-3" }, [
                                _vm._v("Please wait ...")
                              ])
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content-body" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.getUser.apis, function(api) {
              return _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                _c("div", { staticClass: "card" }, [
                  _vm.getLoading
                    ? _c(
                        "div",
                        { staticClass: "card-body" },
                        [_c("ApisLoader")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.getLoading
                    ? _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "dropdown float-right profile_log" },
                          [
                            _vm._m(1, true),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "dropdown-menu dropdown-menu-right dropdown-shadow"
                              },
                              [
                                _c(
                                  "li",
                                  {
                                    staticClass: "dropdown-item",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteApiModal(api.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fad fa-trash-alt mr-3 sred"
                                    }),
                                    _vm._v(
                                      "Delete\n                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                api.status !== 1
                                  ? _c(
                                      "li",
                                      {
                                        staticClass: "dropdown-item",
                                        on: {
                                          click: function($event) {
                                            return _vm.toggleApi(api.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fad fa-toggle-on mr-3 sgreen"
                                        }),
                                        _vm._v(
                                          "Enable\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                api.status === 1
                                  ? _c(
                                      "li",
                                      {
                                        staticClass: "dropdown-item",
                                        on: {
                                          click: function($event) {
                                            return _vm.toggleApi(api.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fad fa-toggle-off mr-3 sorange"
                                        }),
                                        _vm._v(
                                          "Disable\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass:
                              "sdark text-uppercase font-weight-bold font-size-12"
                          },
                          [
                            _vm._v("\n                                # "),
                            _c("span", { staticClass: "sdark" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(api.title) +
                                  "\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-between" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-auto" }, [
                                _c("ul", { staticClass: "list-inline mb-0" }, [
                                  _c(
                                    "li",
                                    { staticClass: "list-inline-item" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "text-muted d-inline-block",
                                          attrs: {
                                            href: "#",
                                            tooltip: "Remaining uses",
                                            flow: "up"
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fad fa-bullseye-pointer mr-2"
                                          }),
                                          _vm._v(
                                            "\n                                                    " +
                                              _vm._s(api.remaining_uses) +
                                              " / " +
                                              _vm._s(api.max_uses) +
                                              "\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row justify-content-end" },
                              [
                                _c("div", { staticClass: "col-sm-auto" }, [
                                  _c(
                                    "ul",
                                    { staticClass: "list-inline mb-0" },
                                    [
                                      _c(
                                        "li",
                                        { staticClass: "list-inline-item" },
                                        [
                                          api.status === 1
                                            ? _c("div", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "sgreen mobile-none"
                                                  },
                                                  [_vm._v("Online")]
                                                ),
                                                _vm._v(" "),
                                                _c("span", {
                                                  staticClass:
                                                    "dot pulse sbg-green"
                                                })
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          api.status !== 1
                                            ? _c(
                                                "div",
                                                { staticClass: "sorange" },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "sorange mobile-none"
                                                    },
                                                    [_vm._v("Offline")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", {
                                                    staticClass:
                                                      "dot sbg-orange"
                                                  })
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    : _vm._e()
                ])
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      !_vm.getLoading
        ? _c(
            "Modal",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isGenerateApiModalVisible,
                  expression: "isGenerateApiModalVisible"
                }
              ],
              on: { close: _vm.createApiModal }
            },
            [
              _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v("Generate API")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { slot: "body", method: "POST" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createApi($event)
                    }
                  },
                  slot: "body"
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "form-control-label" }, [
                      _vm._v("API Name")
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
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.title },
                          attrs: {
                            type: "text",
                            id: "api_title",
                            placeholder: "hello@skrap-it.com"
                          },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.errors.title
                      ? _c("span", { staticClass: "sred" }, [
                          _vm._v(" " + _vm._s(_vm.errors.title[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "apiUsage" } }, [
                      _vm._v("Max usage :\n                    "),
                      _c("span", { staticClass: "font-weight-bold sred" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.form.max_uses) +
                            " / " +
                            _vm._s(_vm.getRemainingUses) +
                            "\n                    "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.max_uses,
                          expression: "form.max_uses"
                        }
                      ],
                      staticClass: "custom-range",
                      attrs: {
                        type: "range",
                        min: 0,
                        max: _vm.getRemainingUses,
                        id: "apiUsage"
                      },
                      domProps: { value: _vm.form.max_uses },
                      on: {
                        __r: function($event) {
                          return _vm.$set(
                            _vm.form,
                            "max_uses",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.max_uses
                      ? _c("span", { staticClass: "sred" }, [
                          _vm._v(" " + _vm._s(_vm.errors.max_uses[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row mt-3" }, [
                    _c("div", { staticClass: "form-group col-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "sbtn sbtn-red btn-block",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fad fa-plus-circle mr-3" }),
                          _vm._v(
                            "\n                        Generate\n                    "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.getLoading
        ? _c(
            "Modal",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isDeleteApiModalVisible,
                  expression: "isDeleteApiModalVisible"
                }
              ],
              on: { close: _vm.deleteApiModal }
            },
            [
              _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v("Are you sure ?")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-row",
                  attrs: { slot: "body" },
                  slot: "body"
                },
                [
                  _c("div", { staticClass: "form-group col-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "sbtn sbtn-red btn-block",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.deleteApi(_vm.selectedId)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fad fa-trash-alt mr-3" }),
                        _vm._v(
                          "\n                    Confirm\n                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "sbtn sbtn-dark btn-block",
                        attrs: { type: "button" },
                        on: { click: _vm.deleteApiModal }
                      },
                      [
                        _c("i", {
                          staticClass: "fad fa-ban fa-swap-opacity mr-3"
                        }),
                        _vm._v("\n                    Cancel\n                ")
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title-content" }, [
      _c("p", [_vm._v("Your API's")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "profile_log",
        attrs: { "data-toggle": "dropdown", "aria-expanded": "false" }
      },
      [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle arrow-none card-drop marge-points",
            attrs: { href: "#" }
          },
          [_c("i", { staticClass: "far fa-ellipsis-v float-right" })]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Loader/ApisLoader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Loader/ApisLoader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApisLoader.vue?vue&type=template&id=64c48bcd& */ "./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd&");
/* harmony import */ var _ApisLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApisLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApisLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader/ApisLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApisLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApisLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/ApisLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApisLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApisLoader.vue?vue&type=template&id=64c48bcd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader/ApisLoader.vue?vue&type=template&id=64c48bcd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApisLoader_vue_vue_type_template_id_64c48bcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53ab54d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=style&index=0&id=53ab54d2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_53ab54d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=53ab54d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Modal.vue?vue&type=template&id=53ab54d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_53ab54d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Apis.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/dashboard/Apis.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Apis.vue?vue&type=template&id=056e9d13& */ "./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13&");
/* harmony import */ var _Apis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apis.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Apis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Apis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Apis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Apis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Apis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Apis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Apis.vue?vue&type=template&id=056e9d13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Apis.vue?vue&type=template&id=056e9d13&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apis_vue_vue_type_template_id_056e9d13___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);