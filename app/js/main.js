!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/js/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ \"./src/js/modules/burger.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.accordion');\n  Object(_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.nav__item[data-goto]');\n  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.burger', '.nav.header__nav', '.nav.footer__nav.burger__nav');\n  new _modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.form').init();\n  fixedHeader('.header');\n\n  function fixedHeader(selectorFixed) {\n    var selector = document.querySelectorAll(selectorFixed);\n    selector.forEach(function (el) {\n      window.addEventListener('scroll', function () {\n        el.classList.toggle('sticky', window.scrollY > 80);\n      });\n    });\n  }\n\n  var swiper = new Swiper('.swiper-container', {\n    direction: 'horizontal',\n    loop: true,\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?")},"./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar accordion = function accordion(selector) {\n  var accordions = document.querySelectorAll(selector);\n  accordions.forEach(function (el) {\n    el.addEventListener('click', function (e) {\n      var self = e.currentTarget;\n      var control = self.querySelector('.accordion__control');\n      var content = self.querySelector('.accordion__content');\n      self.classList.toggle('open');\n\n      if (self.classList.contains('open')) {\n        control.setAttribute('aria-expanded', true);\n        content.setAttribute('aria-hidden', false);\n        content.style.maxHeight = content.scrollHeight + 'px';\n      } else {\n        control.setAttribute('aria-expanded', false);\n        content.setAttribute('aria-hidden', true);\n        content.style.maxHeight = null;\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordion);\n\n//# sourceURL=webpack:///./src/js/modules/accordion.js?")},"./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar burger = function burger(burgerSelector, menuSelector, burgerMenu) {\n  var burgerIcon = document.querySelector(burgerSelector),\n      menu = document.querySelector(menuSelector),\n      burgerMenus = document.querySelector(burgerMenu); // show burger > 1000 width\n\n  var hideElement = function hideElement(selector) {\n    selector.classList.add('visually-hidden');\n    selector.setAttribute('aria-hidden', 'true');\n  };\n\n  var showElement = function showElement(selector) {\n    selector.classList.remove('visually-hidden');\n    selector.setAttribute('aria-hidden', 'false');\n  };\n\n  hideElement(burgerIcon);\n  hideElement(menu);\n\n  var checkedWidthElement = function checkedWidthElement() {\n    if (window.screen.availWidth < 840) {\n      showElement(burgerIcon);\n      hideElement(menu);\n    } else {\n      hideElement(burgerIcon);\n      showElement(menu);\n    }\n  };\n\n  checkedWidthElement();\n  window.addEventListener('resize', function () {\n    checkedWidthElement();\n  });\n  burgerIcon.addEventListener('click', function () {\n    console.log('click');\n    burgerIcon.classList.toggle('open');\n\n    if (burgerIcon.classList.contains('open')) {\n      burgerMenus.classList.add('open');\n    } else {\n      burgerMenus.classList.remove('open');\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack:///./src/js/modules/burger.js?")},"./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Forms; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Forms = /*#__PURE__*/function () {\n  function Forms(forms) {\n    _classCallCheck(this, Forms);\n\n    this.forms = document.querySelectorAll(forms);\n    this.inputs = document.querySelectorAll('input');\n    this.message = {\n      loading: 'Loading ...',\n      error: 'Something went wrong',\n      success: 'Thank you! We will contact you shortly'\n    };\n    this.path = 'resources/question.php';\n  }\n\n  _createClass(Forms, [{\n    key: \"clearInputs\",\n    value: function clearInputs() {\n      this.inputs.forEach(function (input) {\n        input.value = '';\n      });\n    }\n  }, {\n    key: \"postData\",\n    value: function postData(url, data) {\n      var res = fetch(url, {\n        method: 'POST',\n        body: data\n      });\n      return res;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.forms.forEach(function (item) {\n        item.addEventListener('submit', function (e) {\n          e.preventDefault();\n          var statusMessage = document.createElement('div');\n          statusMessage.classList.add('form__message');\n          item.appendChild(statusMessage);\n          statusMessage.textContent = _this.message.loading;\n          var formData = new FormData(item);\n\n          _this.postData(_this.path, formData).then(function (res) {\n            res.text();\n            statusMessage.textContent = _this.message.success;\n          })[\"catch\"](function (er) {\n            statusMessage.textContent = _this.message.error;\n          })[\"finally\"](function () {\n            _this.clearInputs();\n\n            setTimeout(function () {\n              statusMessage.remove();\n            }, 5000);\n          });\n        });\n      });\n    }\n  }]);\n\n  return Forms;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/modules/forms.js?")},"./src/js/modules/smoothScrolling.js":
/*!*******************************************!*\
  !*** ./src/js/modules/smoothScrolling.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar smoothScrolling = function smoothScrolling(selector) {\n  var menuLinks = document.querySelectorAll(selector);\n\n  if (menuLinks.length > 0) {\n    var menuLinkClick = function menuLinkClick(e) {\n      var self = e.target;\n      var gotoElement = document.querySelector(self.dataset[\"goto\"]);\n\n      if (self.dataset[\"goto\"] && gotoElement) {\n        var gotoBlockValue = gotoElement.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\n        window.scrollTo({\n          top: gotoBlockValue,\n          behavior: 'smooth'\n        });\n        e.preventDefault();\n      }\n    };\n\n    menuLinks.forEach(function (el) {\n      el.addEventListener('click', menuLinkClick);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (smoothScrolling);\n\n//# sourceURL=webpack:///./src/js/modules/smoothScrolling.js?")}});
//# sourceMappingURL=main.js.map
