webpackHotUpdate("main",{

/***/ "./public/js/Modal.js":
/*!****************************!*\
  !*** ./public/js/Modal.js ***!
  \****************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/ModalBody */ \"./node_modules/react-bootstrap/esm/ModalBody.js\");\n/* harmony import */ var react_bootstrap_ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ModalHeader */ \"./node_modules/react-bootstrap/esm/ModalHeader.js\");\n/* harmony import */ var react_bootstrap_ModalTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ModalTitle */ \"./node_modules/react-bootstrap/esm/ModalTitle.js\");\n/* harmony import */ var react_bootstrap_ModalFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ModalFooter */ \"./node_modules/react-bootstrap/esm/ModalFooter.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar Modal = /*#__PURE__*/function (_Component) {\n  _inherits(Modal, _Component);\n\n  var _super = _createSuper(Modal);\n\n  function Modal(props) {\n    _classCallCheck(this, Modal);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(Modal, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      this.props.data[e.target.name] = e.target.value;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var modalBody, button, modalTitle;\n      modalTitle = this.props.action === 0 ? \"Edit Player\" : \"Delete Player\";\n      modalBody = this.props.data ? this.props.action === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Name : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        value: this.props.data.name,\n        onChange: function onChange(e) {\n          return _this.onChange(e);\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Population : \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"population\",\n        value: this.props.data.population,\n        onChange: function onChange(e) {\n          return _this.onChange(e);\n        }\n      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Are you sure you want to delete player \", this.props.data.name) : \"\";\n      button = this.props.action === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        variant: \"success\",\n        onClick: this.props.deletePlayer()\n      }, \"Edit\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        variant: \"danger\",\n        onClick: this.props.deletePlayer()\n      }, \"Delete\");\n      console.log(\"****\", this.props.data);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        show: this.props.show,\n        onHide: this.props.openModal({})\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ModalHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        closeButton: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ModalTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, modalTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ModalBody__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, modalBody), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ModalFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        variant: \"secondary\",\n        onClick: this.props.openModal({})\n      }, \"Close\"), button));\n    }\n  }]);\n\n  return Modal;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./public/js/Modal.js?");

/***/ })

})