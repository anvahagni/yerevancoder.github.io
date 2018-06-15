webpackJsonp([274579804416951],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(28)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Add the specified number of milliseconds to the given date.
	 *
	 * @description
	 * Add the specified number of milliseconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be added
	 * @returns {Date} the new date with the milliseconds added
	 *
	 * @example
	 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
	 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:30.750
	 */
	function addMilliseconds (dirtyDate, dirtyAmount) {
	  var timestamp = parse(dirtyDate).getTime()
	  var amount = Number(dirtyAmount)
	  return new Date(timestamp + amount)
	}
	
	module.exports = addMilliseconds


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(100)
	
	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * @category Minute Helpers
	 * @summary Add the specified number of minutes to the given date.
	 *
	 * @description
	 * Add the specified number of minutes to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of minutes to be added
	 * @returns {Date} the new date with the minutes added
	 *
	 * @example
	 * // Add 30 minutes to 10 July 2014 12:00:00:
	 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
	 * //=> Thu Jul 10 2014 12:30:00
	 */
	function addMinutes (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
	}
	
	module.exports = addMinutes


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bodyOpenClassName = exports.portalClassName = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(105);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ModalPortal = __webpack_require__(112);
	
	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
	
	var _ariaAppHider = __webpack_require__(38);
	
	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
	
	var _safeHTMLElement = __webpack_require__(39);
	
	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var portalClassName = exports.portalClassName = "ReactModalPortal";
	var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
	
	var isReact16 = _reactDom2.default.createPortal !== undefined;
	var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
	
	function getParentElement(parentSelector) {
	  return parentSelector();
	}
	
	var Modal = function (_Component) {
	  _inherits(Modal, _Component);
	
	  function Modal() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Modal);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
	      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
	      var parent = getParentElement(_this.props.parentSelector);
	      parent.removeChild(_this.node);
	    }, _this.portalRef = function (ref) {
	      _this.portal = ref;
	    }, _this.renderPortal = function (props) {
	      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
	      _this.portalRef(portal);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Modal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (!_safeHTMLElement.canUseDOM) return;
	
	      if (!isReact16) {
	        this.node = document.createElement("div");
	      }
	      this.node.className = this.props.portalClassName;
	
	      var parent = getParentElement(this.props.parentSelector);
	      parent.appendChild(this.node);
	
	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(newProps) {
	      if (!_safeHTMLElement.canUseDOM) return;
	      var isOpen = newProps.isOpen;
	      // Stop unnecessary renders if modal is remaining closed
	
	      if (!this.props.isOpen && !isOpen) return;
	
	      var currentParent = getParentElement(this.props.parentSelector);
	      var newParent = getParentElement(newProps.parentSelector);
	
	      if (newParent !== currentParent) {
	        currentParent.removeChild(this.node);
	        newParent.appendChild(this.node);
	      }
	
	      !isReact16 && this.renderPortal(newProps);
	    }
	  }, {
	    key: "componentWillUpdate",
	    value: function componentWillUpdate(newProps) {
	      if (!_safeHTMLElement.canUseDOM) return;
	      if (newProps.portalClassName !== this.props.portalClassName) {
	        this.node.className = newProps.portalClassName;
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
	
	      var state = this.portal.state;
	      var now = Date.now();
	      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
	
	      if (closesAt) {
	        if (!state.beforeClose) {
	          this.portal.closeWithTimeout();
	        }
	
	        setTimeout(this.removePortal, closesAt - now);
	      } else {
	        this.removePortal();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!_safeHTMLElement.canUseDOM || !isReact16) {
	        return null;
	      }
	
	      if (!this.node && isReact16) {
	        this.node = document.createElement("div");
	      }
	
	      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
	        ref: this.portalRef,
	        defaultStyles: Modal.defaultStyles
	      }, this.props)), this.node);
	    }
	  }], [{
	    key: "setAppElement",
	    value: function setAppElement(element) {
	      ariaAppHider.setElement(element);
	    }
	
	    /* eslint-disable react/no-unused-prop-types */
	
	    /* eslint-enable react/no-unused-prop-types */
	
	  }]);
	
	  return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  portalClassName: _propTypes2.default.string,
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  ariaHideApp: _propTypes2.default.bool,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  parentSelector: _propTypes2.default.func,
	  aria: _propTypes2.default.object,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func
	};
	Modal.defaultProps = {
	  isOpen: false,
	  portalClassName: portalClassName,
	  bodyOpenClassName: bodyOpenClassName,
	  ariaHideApp: true,
	  closeTimeoutMS: 0,
	  shouldFocusAfterRender: true,
	  shouldCloseOnEsc: true,
	  shouldCloseOnOverlayClick: true,
	  shouldReturnFocusAfterClose: true,
	  parentSelector: function parentSelector() {
	    return document.body;
	  }
	};
	Modal.defaultStyles = {
	  overlay: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    backgroundColor: "rgba(255, 255, 255, 0.75)"
	  },
	  content: {
	    position: "absolute",
	    top: "40px",
	    left: "40px",
	    right: "40px",
	    bottom: "40px",
	    border: "1px solid #ccc",
	    background: "#fff",
	    overflow: "auto",
	    WebkitOverflowScrolling: "touch",
	    borderRadius: "4px",
	    outline: "none",
	    padding: "20px"
	  }
	};
	exports.default = Modal;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _focusManager = __webpack_require__(114);
	
	var focusManager = _interopRequireWildcard(_focusManager);
	
	var _scopeTab = __webpack_require__(115);
	
	var _scopeTab2 = _interopRequireDefault(_scopeTab);
	
	var _ariaAppHider = __webpack_require__(38);
	
	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
	
	var _classList = __webpack_require__(113);
	
	var classList = _interopRequireWildcard(_classList);
	
	var _safeHTMLElement = __webpack_require__(39);
	
	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: "ReactModal__Overlay",
	  content: "ReactModal__Content"
	};
	
	var TAB_KEY = 9;
	var ESC_KEY = 27;
	
	var ariaHiddenInstances = 0;
	
	var ModalPortal = function (_Component) {
	  _inherits(ModalPortal, _Component);
	
	  function ModalPortal(props) {
	    _classCallCheck(this, ModalPortal);
	
	    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));
	
	    _this.setFocusAfterRender = function (focus) {
	      _this.focusAfterRender = _this.props.shouldFocusAfterRender && focus;
	    };
	
	    _this.setOverlayRef = function (overlay) {
	      _this.overlay = overlay;
	      _this.props.overlayRef && _this.props.overlayRef(overlay);
	    };
	
	    _this.setContentRef = function (content) {
	      _this.content = content;
	      _this.props.contentRef && _this.props.contentRef(content);
	    };
	
	    _this.afterClose = function () {
	      var _this$props = _this.props,
	          appElement = _this$props.appElement,
	          ariaHideApp = _this$props.ariaHideApp,
	          htmlOpenClassName = _this$props.htmlOpenClassName,
	          bodyOpenClassName = _this$props.bodyOpenClassName;
	
	      // Remove classes.
	
	      classList.remove(document.body, bodyOpenClassName);
	
	      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
	
	      // Reset aria-hidden attribute if all modals have been removed
	      if (ariaHideApp && ariaHiddenInstances > 0) {
	        ariaHiddenInstances -= 1;
	
	        if (ariaHiddenInstances === 0) {
	          ariaAppHider.show(appElement);
	        }
	      }
	
	      if (_this.props.shouldFocusAfterRender) {
	        if (_this.props.shouldReturnFocusAfterClose) {
	          focusManager.returnFocus();
	          focusManager.teardownScopedFocus();
	        } else {
	          focusManager.popWithoutFocus();
	        }
	      }
	    };
	
	    _this.open = function () {
	      _this.beforeOpen();
	      if (_this.state.afterOpen && _this.state.beforeClose) {
	        clearTimeout(_this.closeTimer);
	        _this.setState({ beforeClose: false });
	      } else {
	        if (_this.props.shouldFocusAfterRender) {
	          focusManager.setupScopedFocus(_this.node);
	          focusManager.markForFocusLater();
	        }
	
	        _this.setState({ isOpen: true }, function () {
	          _this.setState({ afterOpen: true });
	
	          if (_this.props.isOpen && _this.props.onAfterOpen) {
	            _this.props.onAfterOpen();
	          }
	        });
	      }
	    };
	
	    _this.close = function () {
	      if (_this.props.closeTimeoutMS > 0) {
	        _this.closeWithTimeout();
	      } else {
	        _this.closeWithoutTimeout();
	      }
	    };
	
	    _this.focusContent = function () {
	      return _this.content && !_this.contentHasFocus() && _this.content.focus();
	    };
	
	    _this.closeWithTimeout = function () {
	      var closesAt = Date.now() + _this.props.closeTimeoutMS;
	      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
	        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
	      });
	    };
	
	    _this.closeWithoutTimeout = function () {
	      _this.setState({
	        beforeClose: false,
	        isOpen: false,
	        afterOpen: false,
	        closesAt: null
	      }, _this.afterClose);
	    };
	
	    _this.handleKeyDown = function (event) {
	      if (event.keyCode === TAB_KEY) {
	        (0, _scopeTab2.default)(_this.content, event);
	      }
	
	      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
	        event.stopPropagation();
	        _this.requestClose(event);
	      }
	    };
	
	    _this.handleOverlayOnClick = function (event) {
	      if (_this.shouldClose === null) {
	        _this.shouldClose = true;
	      }
	
	      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
	        if (_this.ownerHandlesClose()) {
	          _this.requestClose(event);
	        } else {
	          _this.focusContent();
	        }
	      }
	      _this.shouldClose = null;
	      _this.moveFromContentToOverlay = null;
	    };
	
	    _this.handleOverlayOnMouseUp = function () {
	      if (_this.moveFromContentToOverlay === null) {
	        _this.shouldClose = false;
	      }
	      if (_this.props.shouldCloseOnOverlayClick) {
	        _this.shouldClose = true;
	      }
	    };
	
	    _this.handleContentOnMouseUp = function () {
	      _this.shouldClose = false;
	    };
	
	    _this.handleOverlayOnMouseDown = function (event) {
	      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
	        event.preventDefault();
	      }
	      _this.moveFromContentToOverlay = false;
	    };
	
	    _this.handleContentOnClick = function () {
	      _this.shouldClose = false;
	    };
	
	    _this.handleContentOnMouseDown = function () {
	      _this.shouldClose = false;
	      _this.moveFromContentToOverlay = false;
	    };
	
	    _this.requestClose = function (event) {
	      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
	    };
	
	    _this.ownerHandlesClose = function () {
	      return _this.props.onRequestClose;
	    };
	
	    _this.shouldBeClosed = function () {
	      return !_this.state.isOpen && !_this.state.beforeClose;
	    };
	
	    _this.contentHasFocus = function () {
	      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
	    };
	
	    _this.buildClassName = function (which, additional) {
	      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
	        base: CLASS_NAMES[which],
	        afterOpen: CLASS_NAMES[which] + "--after-open",
	        beforeClose: CLASS_NAMES[which] + "--before-close"
	      };
	      var className = classNames.base;
	      if (_this.state.afterOpen) {
	        className = className + " " + classNames.afterOpen;
	      }
	      if (_this.state.beforeClose) {
	        className = className + " " + classNames.beforeClose;
	      }
	      return typeof additional === "string" && additional ? className + " " + additional : className;
	    };
	
	    _this.ariaAttributes = function (items) {
	      return Object.keys(items).reduce(function (acc, name) {
	        acc["aria-" + name] = items[name];
	        return acc;
	      }, {});
	    };
	
	    _this.state = {
	      afterOpen: false,
	      beforeClose: false
	    };
	
	    _this.shouldClose = null;
	    _this.moveFromContentToOverlay = null;
	    return _this;
	  }
	
	  _createClass(ModalPortal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      // Focus needs to be set when mounting and already open
	      if (this.props.isOpen) {
	        this.setFocusAfterRender(true);
	        this.open();
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(newProps) {
	      if (false) {
	        if (newProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	        if (newProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	      }
	      // Focus only needs to be set once when the modal is being opened
	      if (!this.props.isOpen && newProps.isOpen) {
	        this.setFocusAfterRender(true);
	        this.open();
	      } else if (this.props.isOpen && !newProps.isOpen) {
	        this.close();
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      if (this.focusAfterRender) {
	        this.focusContent();
	        this.setFocusAfterRender(false);
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.afterClose();
	      clearTimeout(this.closeTimer);
	    }
	  }, {
	    key: "beforeOpen",
	    value: function beforeOpen() {
	      var _props = this.props,
	          appElement = _props.appElement,
	          ariaHideApp = _props.ariaHideApp,
	          htmlOpenClassName = _props.htmlOpenClassName,
	          bodyOpenClassName = _props.bodyOpenClassName;
	
	      // Add classes.
	
	      classList.add(document.body, bodyOpenClassName);
	
	      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
	
	      if (ariaHideApp) {
	        ariaHiddenInstances += 1;
	        ariaAppHider.hide(appElement);
	      }
	    }
	
	    // Don't steal focus from inner elements
	
	  }, {
	    key: "render",
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          overlayClassName = _props2.overlayClassName,
	          defaultStyles = _props2.defaultStyles;
	
	      var contentStyles = className ? {} : defaultStyles.content;
	      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
	
	      return this.shouldBeClosed() ? null : _react2.default.createElement(
	        "div",
	        {
	          ref: this.setOverlayRef,
	          className: this.buildClassName("overlay", overlayClassName),
	          style: _extends({}, overlayStyles, this.props.style.overlay),
	          onClick: this.handleOverlayOnClick,
	          onMouseDown: this.handleOverlayOnMouseDown,
	          onMouseUp: this.handleOverlayOnMouseUp,
	          "aria-modal": "true"
	        },
	        _react2.default.createElement(
	          "div",
	          _extends({
	            ref: this.setContentRef,
	            style: _extends({}, contentStyles, this.props.style.content),
	            className: this.buildClassName("content", className),
	            tabIndex: "-1",
	            onKeyDown: this.handleKeyDown,
	            onMouseDown: this.handleContentOnMouseDown,
	            onMouseUp: this.handleContentOnMouseUp,
	            onClick: this.handleContentOnClick,
	            role: this.props.role,
	            "aria-label": this.props.contentLabel
	          }, this.ariaAttributes(this.props.aria || {})),
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return ModalPortal;
	}(_react.Component);
	
	ModalPortal.defaultProps = {
	  style: {
	    overlay: {},
	    content: {}
	  }
	};
	ModalPortal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  defaultStyles: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  ariaHideApp: _propTypes2.default.bool,
	  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  aria: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func
	};
	exports.default = ModalPortal;
	module.exports = exports["default"];

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.assertNodeList = assertNodeList;
	exports.setElement = setElement;
	exports.validateElement = validateElement;
	exports.hide = hide;
	exports.show = show;
	exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
	exports.resetForTesting = resetForTesting;
	
	var _warning = __webpack_require__(15);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var globalElement = null;
	
	function assertNodeList(nodeList, selector) {
	  if (!nodeList || !nodeList.length) {
	    throw new Error("react-modal: No elements were found for selector " + selector + ".");
	  }
	}
	
	function setElement(element) {
	  var useElement = element;
	  if (typeof useElement === "string") {
	    var el = document.querySelectorAll(useElement);
	    assertNodeList(el, useElement);
	    useElement = "length" in el ? el[0] : el;
	  }
	  globalElement = useElement || globalElement;
	  return globalElement;
	}
	
	function validateElement(appElement) {
	  if (!appElement && !globalElement) {
	    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
	
	    return false;
	  }
	
	  return true;
	}
	
	function hide(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).setAttribute("aria-hidden", "true");
	  }
	}
	
	function show(appElement) {
	  if (validateElement(appElement)) {
	    (appElement || globalElement).removeAttribute("aria-hidden");
	  }
	}
	
	function documentNotReadyOrSSRTesting() {
	  globalElement = null;
	}
	
	function resetForTesting() {
	  globalElement = null;
	}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dumpClassLists = dumpClassLists;
	var htmlClassList = {};
	var docBodyClassList = {};
	
	function dumpClassLists() {
	  if (false) {
	    var classes = document.getElementsByTagName("html")[0].className;
	    var buffer = "Show tracked classes:\n\n";
	
	    buffer += "<html /> (" + classes + "):\n";
	    for (var x in htmlClassList) {
	      buffer += "  " + x + " " + htmlClassList[x] + "\n";
	    }
	
	    classes = document.body.className;
	
	    // eslint-disable-next-line max-len
	    buffer += "\n\ndoc.body (" + classes + "):\n";
	    for (var _x in docBodyClassList) {
	      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
	    }
	
	    buffer += "\n";
	
	    // eslint-disable-next-line no-console
	    console.log(buffer);
	  }
	}
	
	/**
	 * Track the number of reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var incrementReference = function incrementReference(poll, className) {
	  if (!poll[className]) {
	    poll[className] = 0;
	  }
	  poll[className] += 1;
	  return className;
	};
	
	/**
	 * Drop the reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var decrementReference = function decrementReference(poll, className) {
	  if (poll[className]) {
	    poll[className] -= 1;
	  }
	  return className;
	};
	
	/**
	 * Track a class and add to the given class list.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be tracked.
	 */
	var trackClass = function trackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    incrementReference(poll, className);
	    classListRef.add(className);
	  });
	};
	
	/**
	 * Untrack a class and remove from the given class list if the reference
	 * reaches 0.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be untracked.
	 */
	var untrackClass = function untrackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    decrementReference(poll, className);
	    poll[className] === 0 && classListRef.remove(className);
	  });
	};
	
	/**
	 * Public inferface to add classes to the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var add = exports.add = function add(element, classString) {
	  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};
	
	/**
	 * Public inferface to remove classes from the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var remove = exports.remove = function remove(element, classString) {
	  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleBlur = handleBlur;
	exports.handleFocus = handleFocus;
	exports.markForFocusLater = markForFocusLater;
	exports.returnFocus = returnFocus;
	exports.popWithoutFocus = popWithoutFocus;
	exports.setupScopedFocus = setupScopedFocus;
	exports.teardownScopedFocus = teardownScopedFocus;
	
	var _tabbable = __webpack_require__(40);
	
	var _tabbable2 = _interopRequireDefault(_tabbable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var focusLaterElements = [];
	var modalElement = null;
	var needToFocus = false;
	
	function handleBlur() {
	  needToFocus = true;
	}
	
	function handleFocus() {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation
	    // is that the document.body gets focus, and then we focus our element right
	    // after, seems fine.
	    setTimeout(function () {
	      if (modalElement.contains(document.activeElement)) {
	        return;
	      }
	      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
	      el.focus();
	    }, 0);
	  }
	}
	
	function markForFocusLater() {
	  focusLaterElements.push(document.activeElement);
	}
	
	/* eslint-disable no-console */
	function returnFocus() {
	  var toFocus = null;
	  try {
	    if (focusLaterElements.length !== 0) {
	      toFocus = focusLaterElements.pop();
	      toFocus.focus();
	    }
	    return;
	  } catch (e) {
	    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
	  }
	}
	/* eslint-enable no-console */
	
	function popWithoutFocus() {
	  focusLaterElements.length > 0 && focusLaterElements.pop();
	}
	
	function setupScopedFocus(element) {
	  modalElement = element;
	
	  if (window.addEventListener) {
	    window.addEventListener("blur", handleBlur, false);
	    document.addEventListener("focus", handleFocus, true);
	  } else {
	    window.attachEvent("onBlur", handleBlur);
	    document.attachEvent("onFocus", handleFocus);
	  }
	}
	
	function teardownScopedFocus() {
	  modalElement = null;
	
	  if (window.addEventListener) {
	    window.removeEventListener("blur", handleBlur);
	    document.removeEventListener("focus", handleFocus);
	  } else {
	    window.detachEvent("onBlur", handleBlur);
	    document.detachEvent("onFocus", handleFocus);
	  }
	}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canUseDOM = undefined;
	
	var _exenv = __webpack_require__(102);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EE = _exenv2.default;
	
	var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
	
	var canUseDOM = exports.canUseDOM = EE.canUseDOM;
	
	exports.default = SafeHTMLElement;

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scopeTab;
	
	var _tabbable = __webpack_require__(40);
	
	var _tabbable2 = _interopRequireDefault(_tabbable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function scopeTab(node, event) {
	  var tabbable = (0, _tabbable2.default)(node);
	
	  if (!tabbable.length) {
	    // Do nothing, since there are no elements that can receive focus.
	    event.preventDefault();
	    return;
	  }
	
	  var shiftKey = event.shiftKey;
	  var head = tabbable[0];
	  var tail = tabbable[tabbable.length - 1];
	
	  // proceed with default browser behavior on tab.
	  // Focus on last element on shift + tab.
	  if (node === document.activeElement) {
	    if (!shiftKey) return;
	    target = tail;
	  }
	
	  var target;
	  if (tail === document.activeElement && !shiftKey) {
	    target = head;
	  }
	
	  if (head === document.activeElement && shiftKey) {
	    target = tail;
	  }
	
	  if (target) {
	    event.preventDefault();
	    target.focus();
	    return;
	  }
	
	  // Safari radio issue.
	  //
	  // Safari does not move the focus to the radio button,
	  // so we need to force it to really walk through all elements.
	  //
	  // This is very error prune, since we are trying to guess
	  // if it is a safari browser from the first occurence between
	  // chrome or safari.
	  //
	  // The chrome user agent contains the first ocurrence
	  // as the 'chrome/version' and later the 'safari/version'.
	  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
	  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
	
	  // If we are not in safari desktop, let the browser control
	  // the focus
	  if (!isSafariDesktop) return;
	
	  var x = tabbable.indexOf(document.activeElement);
	
	  if (x > -1) {
	    x += shiftKey ? -1 : 1;
	  }
	
	  event.preventDefault();
	
	  tabbable[x].focus();
	}
	module.exports = exports["default"];

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findTabbableDescendants;
	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */
	
	var tabbableNode = /input|select|textarea|button|object/;
	
	function hidesContents(element) {
	  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
	
	  // If the node is empty, this is good enough
	  if (zeroSize && !element.innerHTML) return true;
	
	  // Otherwise we need to check some styles
	  var style = window.getComputedStyle(element);
	  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
	}
	
	function visible(element) {
	  var parentElement = element;
	  while (parentElement) {
	    if (parentElement === document.body) break;
	    if (hidesContents(parentElement)) return false;
	    parentElement = parentElement.parentNode;
	  }
	  return true;
	}
	
	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
	  return res && visible(element);
	}
	
	function tabbable(element) {
	  var tabIndex = element.getAttribute("tabindex");
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}
	
	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
	}
	module.exports = exports["default"];

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(111);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Modal2.default;
	module.exports = exports["default"];

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BreakView = function BreakView(props) {
	  var label = props.breakLabel;
	  var className = props.breakClassName || 'break';
	
	  return _react2.default.createElement(
	    'li',
	    { className: className },
	    label
	  );
	};
	
	exports.default = BreakView;
	//# sourceMappingURL=BreakView.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PageView = function PageView(props) {
	  var cssClassName = props.pageClassName;
	  var linkClassName = props.pageLinkClassName;
	  var onClick = props.onClick;
	  var href = props.href;
	  var ariaLabel = 'Page ' + props.page + (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
	  var ariaCurrent = null;
	
	  if (props.selected) {
	    ariaCurrent = 'page';
	    ariaLabel = 'Page ' + props.page + ' is your current page';
	    if (typeof cssClassName !== 'undefined') {
	      cssClassName = cssClassName + ' ' + props.activeClassName;
	    } else {
	      cssClassName = props.activeClassName;
	    }
	  }
	
	  return _react2.default.createElement(
	    'li',
	    { className: cssClassName },
	    _react2.default.createElement(
	      'a',
	      { onClick: onClick,
	        className: linkClassName,
	        href: href,
	        tabIndex: '0',
	        'aria-label': ariaLabel,
	        'aria-current': ariaCurrent,
	        onKeyPress: onClick },
	      props.page
	    )
	  );
	};
	
	exports.default = PageView;
	//# sourceMappingURL=PageView.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PageView = __webpack_require__(118);
	
	var _PageView2 = _interopRequireDefault(_PageView);
	
	var _BreakView = __webpack_require__(117);
	
	var _BreakView2 = _interopRequireDefault(_BreakView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PaginationBoxView = function (_Component) {
	  _inherits(PaginationBoxView, _Component);
	
	  function PaginationBoxView(props) {
	    _classCallCheck(this, PaginationBoxView);
	
	    var _this = _possibleConstructorReturn(this, (PaginationBoxView.__proto__ || Object.getPrototypeOf(PaginationBoxView)).call(this, props));
	
	    _this.handlePreviousPage = function (evt) {
	      var selected = _this.state.selected;
	
	      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
	      if (selected > 0) {
	        _this.handlePageSelected(selected - 1, evt);
	      }
	    };
	
	    _this.handleNextPage = function (evt) {
	      var selected = _this.state.selected;
	      var pageCount = _this.props.pageCount;
	
	
	      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
	      if (selected < pageCount - 1) {
	        _this.handlePageSelected(selected + 1, evt);
	      }
	    };
	
	    _this.handlePageSelected = function (selected, evt) {
	      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
	
	      if (_this.state.selected === selected) return;
	
	      _this.setState({ selected: selected });
	
	      // Call the callback with the new selected item:
	      _this.callCallback(selected);
	    };
	
	    _this.callCallback = function (selectedItem) {
	      if (typeof _this.props.onPageChange !== "undefined" && typeof _this.props.onPageChange === "function") {
	        _this.props.onPageChange({ selected: selectedItem });
	      }
	    };
	
	    _this.pagination = function () {
	      var items = [];
	      var _this$props = _this.props,
	          pageRangeDisplayed = _this$props.pageRangeDisplayed,
	          pageCount = _this$props.pageCount,
	          marginPagesDisplayed = _this$props.marginPagesDisplayed,
	          breakLabel = _this$props.breakLabel,
	          breakClassName = _this$props.breakClassName;
	      var selected = _this.state.selected;
	
	
	      if (pageCount <= pageRangeDisplayed) {
	
	        for (var index = 0; index < pageCount; index++) {
	          items.push(_this.getPageElement(index));
	        }
	      } else {
	
	        var leftSide = pageRangeDisplayed / 2;
	        var rightSide = pageRangeDisplayed - leftSide;
	
	        if (selected > pageCount - pageRangeDisplayed / 2) {
	          rightSide = pageCount - selected;
	          leftSide = pageRangeDisplayed - rightSide;
	        } else if (selected < pageRangeDisplayed / 2) {
	          leftSide = selected;
	          rightSide = pageRangeDisplayed - leftSide;
	        }
	
	        var _index = void 0;
	        var page = void 0;
	        var breakView = void 0;
	        var createPageView = function createPageView(index) {
	          return _this.getPageElement(index);
	        };
	
	        for (_index = 0; _index < pageCount; _index++) {
	
	          page = _index + 1;
	
	          if (page <= marginPagesDisplayed) {
	            items.push(createPageView(_index));
	            continue;
	          }
	
	          if (page > pageCount - marginPagesDisplayed) {
	            items.push(createPageView(_index));
	            continue;
	          }
	
	          if (_index >= selected - leftSide && _index <= selected + rightSide) {
	            items.push(createPageView(_index));
	            continue;
	          }
	
	          if (breakLabel && items[items.length - 1] !== breakView) {
	            breakView = _react2.default.createElement(_BreakView2.default, {
	              key: _index,
	              breakLabel: breakLabel,
	              breakClassName: breakClassName
	            });
	            items.push(breakView);
	          }
	        }
	      }
	
	      return items;
	    };
	
	    _this.state = {
	      selected: props.initialPage ? props.initialPage : props.forcePage ? props.forcePage : 0
	    };
	    return _this;
	  }
	
	  _createClass(PaginationBoxView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          initialPage = _props.initialPage,
	          disableInitialCallback = _props.disableInitialCallback;
	      // Call the callback with the initialPage item:
	
	      if (typeof initialPage !== 'undefined' && !disableInitialCallback) {
	        this.callCallback(initialPage);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (typeof nextProps.forcePage !== 'undefined' && this.props.forcePage !== nextProps.forcePage) {
	        this.setState({ selected: nextProps.forcePage });
	      }
	    }
	  }, {
	    key: 'hrefBuilder',
	    value: function hrefBuilder(pageIndex) {
	      var _props2 = this.props,
	          hrefBuilder = _props2.hrefBuilder,
	          pageCount = _props2.pageCount;
	
	      if (hrefBuilder && pageIndex !== this.state.selected && pageIndex >= 0 && pageIndex < pageCount) {
	        return hrefBuilder(pageIndex + 1);
	      }
	    }
	  }, {
	    key: 'getPageElement',
	    value: function getPageElement(index) {
	      var selected = this.state.selected;
	      var _props3 = this.props,
	          pageClassName = _props3.pageClassName,
	          pageLinkClassName = _props3.pageLinkClassName,
	          activeClassName = _props3.activeClassName,
	          extraAriaContext = _props3.extraAriaContext;
	
	
	      return _react2.default.createElement(_PageView2.default, {
	        key: index,
	        onClick: this.handlePageSelected.bind(null, index),
	        selected: selected === index,
	        pageClassName: pageClassName,
	        pageLinkClassName: pageLinkClassName,
	        activeClassName: activeClassName,
	        extraAriaContext: extraAriaContext,
	        href: this.hrefBuilder(index),
	        page: index + 1 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props,
	          disabledClassName = _props4.disabledClassName,
	          previousClassName = _props4.previousClassName,
	          nextClassName = _props4.nextClassName,
	          pageCount = _props4.pageCount,
	          containerClassName = _props4.containerClassName,
	          previousLinkClassName = _props4.previousLinkClassName,
	          previousLabel = _props4.previousLabel,
	          nextLinkClassName = _props4.nextLinkClassName,
	          nextLabel = _props4.nextLabel;
	      var selected = this.state.selected;
	
	
	      var previousClasses = previousClassName + (selected === 0 ? ' ' + disabledClassName : '');
	      var nextClasses = nextClassName + (selected === pageCount - 1 ? ' ' + disabledClassName : '');
	
	      return _react2.default.createElement(
	        'ul',
	        { className: containerClassName },
	        _react2.default.createElement(
	          'li',
	          { className: previousClasses },
	          _react2.default.createElement(
	            'a',
	            { onClick: this.handlePreviousPage,
	              className: previousLinkClassName,
	              href: this.hrefBuilder(selected - 1),
	              tabIndex: '0',
	              onKeyPress: this.handlePreviousPage },
	            previousLabel
	          )
	        ),
	        this.pagination(),
	        _react2.default.createElement(
	          'li',
	          { className: nextClasses },
	          _react2.default.createElement(
	            'a',
	            { onClick: this.handleNextPage,
	              className: nextLinkClassName,
	              href: this.hrefBuilder(selected + 1),
	              tabIndex: '0',
	              onKeyPress: this.handleNextPage },
	            nextLabel
	          )
	        )
	      );
	    }
	  }]);
	
	  return PaginationBoxView;
	}(_react.Component);
	
	PaginationBoxView.propTypes = {
	  pageCount: _propTypes2.default.number.isRequired,
	  pageRangeDisplayed: _propTypes2.default.number.isRequired,
	  marginPagesDisplayed: _propTypes2.default.number.isRequired,
	  previousLabel: _propTypes2.default.node,
	  nextLabel: _propTypes2.default.node,
	  breakLabel: _propTypes2.default.node,
	  hrefBuilder: _propTypes2.default.func,
	  onPageChange: _propTypes2.default.func,
	  initialPage: _propTypes2.default.number,
	  forcePage: _propTypes2.default.number,
	  disableInitialCallback: _propTypes2.default.bool,
	  containerClassName: _propTypes2.default.string,
	  pageClassName: _propTypes2.default.string,
	  pageLinkClassName: _propTypes2.default.string,
	  activeClassName: _propTypes2.default.string,
	  previousClassName: _propTypes2.default.string,
	  nextClassName: _propTypes2.default.string,
	  previousLinkClassName: _propTypes2.default.string,
	  nextLinkClassName: _propTypes2.default.string,
	  disabledClassName: _propTypes2.default.string,
	  breakClassName: _propTypes2.default.string
	};
	PaginationBoxView.defaultProps = {
	  pageCount: 10,
	  pageRangeDisplayed: 2,
	  marginPagesDisplayed: 3,
	  activeClassName: "selected",
	  previousClassName: "previous",
	  nextClassName: "next",
	  previousLabel: "Previous",
	  nextLabel: "Next",
	  breakLabel: "...",
	  disabledClassName: "disabled",
	  disableInitialCallback: false
	};
	exports.default = PaginationBoxView;
	;
	//# sourceMappingURL=PaginationBoxView.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _PaginationBoxView = __webpack_require__(119);
	
	var _PaginationBoxView2 = _interopRequireDefault(_PaginationBoxView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _PaginationBoxView2.default;
	//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {
	  ranking_sort: function ranking_sort(_ref, _ref2) {
	    var ranking_score_first = _ref.ranking_score;
	    var ranking_score_second = _ref2.ranking_score;
	
	    if (ranking_score_first > ranking_score_second) return -1;
	    if (ranking_score_first < ranking_score_second) return 1;
	    return 0;
	  },
	  NEWS_POSTINGS_PER_PAGE: 6,
	  will_redirect_to_homepage: new Set([0, 1])
	};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var name = _ref.name,
	      github_link = _ref.github_link,
	      linkedin_link = _ref.linkedin_link,
	      resume_link = _ref.resume_link,
	      self_description = _ref.self_description,
	      known_technologies = _ref.known_technologies;
	
	  var maybe_link = function maybe_link(link) {
	    return link !== null && link !== undefined && link !== '' ? _react2.default.createElement(
	      'a',
	      { className: 'FreelancerTable__FreelancerProfileLink', href: link },
	      link
	    ) : _react2.default.createElement(
	      'span',
	      null,
	      'not provided'
	    );
	  };
	  return _react2.default.createElement(
	    'div',
	    { className: 'FreelancerTable__Freelancer' },
	    _react2.default.createElement(
	      'div',
	      { className: 'FreelancerTable__FreelancerColumnDescription' },
	      _react2.default.createElement(
	        'span',
	        { className: 'FreelancerTable__FreelancerName' },
	        name
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'FreelancerTable__FlexColumn' },
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexRow FlexSpaceBetween FreelancerTable__CredRow' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Github:'
	          ),
	          _constants.SPACER_20_W,
	          maybe_link(github_link)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexRow FlexSpaceBetween FreelancerTable__CredRow' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Linkedin:'
	          ),
	          _constants.SPACER_20_W,
	          maybe_link(linkedin_link)
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'FreelancerTable__FlexColumn' },
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexRow FlexSpaceBetween FreelancerTable__CredRow' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Resume/Personal Site:'
	          ),
	          _constants.SPACER_20_W,
	          maybe_link(resume_link)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexRow FlexSpaceBetween FreelancerTable__CredRow' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Known Technologies:'
	          ),
	          _constants.SPACER_20_W,
	          _react2.default.createElement(
	            'span',
	            null,
	            known_technologies
	          )
	        )
	      ),
	      _react2.default.createElement('textarea', {
	        className: 'TextSubmissionArea FullWidth',
	        rows: 7,
	        readOnly: true,
	        value: self_description
	      })
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinkit = __webpack_require__(20);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _freelancerPost = __webpack_require__(76);
	
	var _freelancerPost2 = _interopRequireDefault(_freelancerPost);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var no_freelancers = _react2.default.createElement(
	  'p',
	  { style: { textAlign: 'center', fontFamily: 'Montserrat, sans-serif' } },
	  'No freelancers posted at this time'
	);
	
	exports.default = function (_ref) {
	  var freelancers = _ref.freelancers,
	      loadedLancers = _ref.loadedLancers;
	
	  var content = freelancers.length >= 1 ? freelancers.map(function (freelancer) {
	    return _react2.default.createElement(_freelancerPost2.default, _extends({}, freelancer, { key: freelancer.name + '/' + freelancer.github_link }));
	  }) : no_freelancers;
	  return _react2.default.createElement(
	    'section',
	    { className: 'FreelancerTable' },
	    loadedLancers ? content : _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinkit = __webpack_require__(20);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _jobPost = __webpack_require__(78);
	
	var _jobPost2 = _interopRequireDefault(_jobPost);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var no_jobs = _react2.default.createElement(
	  'p',
	  { style: { textAlign: 'center', fontFamily: 'Montserrat, sans-serif' } },
	  'No jobs posted at this time'
	);
	
	exports.default = function (_ref) {
	  var all_jobs = _ref.all_jobs,
	      loadedJobs = _ref.loadedJobs;
	
	  var content = all_jobs.length >= 1 ? all_jobs.map(function (s) {
	    return _react2.default.createElement(_jobPost2.default, _extends({}, s, { key: s.job_description + '/' + s.post_author + '/' + s.job_location }));
	  }) : no_jobs;
	
	  return _react2.default.createElement(
	    'section',
	    { className: 'JobsList' },
	    loadedJobs ? content : _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	exports.default = function (_ref) {
	  var self_freelance_posting = _ref.self_freelance_posting,
	      delete_posting_handler = _ref.delete_posting_handler;
	
	  if (self_freelance_posting) {
	    var post_key = self_freelance_posting.post_key,
	        self_description = self_freelance_posting.self_description,
	        freelance_posting = _objectWithoutProperties(self_freelance_posting, ['post_key', 'self_description']);
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'FreelanceProfileSubmission' },
	      _react2.default.createElement(
	        'span',
	        { className: 'FreelanceProfileSubmission__PostingBanner' },
	        'My Freelancer Submission'
	      ),
	      _react2.default.createElement(
	        'pre',
	        { className: 'FreelanceProfileSubmission__MonoText' },
	        _react2.default.createElement(
	          'span',
	          null,
	          JSON.stringify(freelance_posting, null, 4)
	        )
	      ),
	      _constants.SPACER_10_H,
	      _react2.default.createElement('textarea', {
	        className: 'FreelanceProfileSubmission__SelfDescription',
	        defaultValue: self_description
	      }),
	      _react2.default.createElement('input', {
	        className: 'NewFreelancerFormContainer__SubmitButton',
	        value: 'Delete',
	        onClick: delete_posting_handler,
	        type: 'button'
	      })
	    );
	  } else {
	    return _react2.default.createElement(
	      'span',
	      { style: { textAlign: 'center' } },
	      'You haven\'t posted yet'
	    );
	  }
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _format = __webpack_require__(47);
	
	var _format2 = _interopRequireDefault(_format);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PostingRecord = function PostingRecord(_ref) {
	  var record = _ref.record,
	      delete_record = _ref.delete_record;
	  var post_key = record.post_key,
	      creation_time = record.creation_time,
	      short_job_description = record.short_job_description,
	      payment_currency = record.payment_currency,
	      post_author = record.post_author,
	      job_location = record.job_location,
	      salary_from = record.salary_from,
	      salary_to = record.salary_to;
	
	  var post_day = (0, _format2.default)(new Date(creation_time), 'DD/MMM');
	  return _react2.default.createElement(
	    'div',
	    { className: 'Profile__PostingRecord' },
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        post_day
	      ),
	      _react2.default.createElement(
	        'span',
	        null,
	        payment_currency
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('textarea', { readOnly: true, defaultValue: short_job_description }),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          job_location
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          salary_from,
	          ' ≤ ',
	          'Salary',
	          ' ≤ ',
	          salary_to
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'span',
	      {
	        'data-balloon': 'Delete this posting',
	        'data-balloon-pos': 'left',
	        className: 'Profile__DeletePosting',
	        onClick: function onClick() {
	          return delete_record(post_key);
	        } },
	      '❌'
	    )
	  );
	};
	
	PostingRecord.displayName = 'PostingRecord';
	PostingRecord.displayName = 'PostingRecord';
	
	exports.default = function (_ref2) {
	  var my_hiring_submissions = _ref2.my_hiring_submissions,
	      delete_record = _ref2.delete_record;
	  return _react2.default.createElement(
	    'section',
	    { className: 'HiringSubmissions' },
	    _react2.default.createElement(
	      'h4',
	      null,
	      'My job postings'
	    ),
	    my_hiring_submissions.map(function (s) {
	      return _react2.default.createElement(PostingRecord, { key: s.post_key, record: s, delete_record: delete_record });
	    })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _format = __webpack_require__(47);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _freelanceProfileView = __webpack_require__(80);
	
	var _freelanceProfileView2 = _interopRequireDefault(_freelanceProfileView);
	
	var _hiringSubmissionsProfileView = __webpack_require__(81);
	
	var _hiringSubmissionsProfileView2 = _interopRequireDefault(_hiringSubmissionsProfileView);
	
	var _constants = __webpack_require__(5);
	
	var _funcs = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var user_not_logged_in = 'User not logged in, cannot show profile';
	
	var ProfileControl = function (_React$Component) {
	  _inherits(ProfileControl, _React$Component);
	
	  function ProfileControl() {
	    _classCallCheck(this, ProfileControl);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ProfileControl.prototype.make_profile_view = function make_profile_view() {
	    var _props = this.props,
	        self_freelance_posting = _props.self_freelance_posting,
	        delete_my_freelance_posting = _props.delete_my_freelance_posting,
	        authenticated_user = _props.authenticated_user,
	        delete_hiring_record = _props.delete_hiring_record,
	        my_hiring_submissions = _props.my_hiring_submissions,
	        profile_content = _props.profile_content;
	
	    var profile_made_on = authenticated_user !== null ? (0, _format2.default)(authenticated_user.metadata.creationTime, 'DD/MMM/YYYY/') : '';
	    var account_name = authenticated_user !== null ? authenticated_user.email : '';
	    var content = null;
	
	    switch (profile_content) {
	      case _constants.MODAL_PROFILE_CONTENT.FREELANCER_POSTING:
	        content = _react2.default.createElement(_freelanceProfileView2.default, {
	          delete_posting_handler: delete_my_freelance_posting,
	          self_freelance_posting: self_freelance_posting
	        });
	        break;
	      case _constants.MODAL_PROFILE_CONTENT.HIRING_BOARD_LISTINGS:
	        content = _react2.default.createElement(_hiringSubmissionsProfileView2.default, {
	          delete_record: delete_hiring_record,
	          my_hiring_submissions: my_hiring_submissions
	        });
	        break;
	      default:
	        console.warn('Unknown profile content requested: ' + profile_content);
	    }
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'Profile__User' },
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexColumn' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Account Name '
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            account_name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'PlainFlexColumn Profile__CreationTime' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Creation Date '
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            profile_made_on
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'Profile__PostingsTable' },
	        content
	      )
	    );
	  };
	
	  ProfileControl.prototype.render = function render() {
	    var content = this.make_profile_view();
	    return _react2.default.createElement(
	      'div',
	      { className: 'ReactModal__Content--after-open Profile__Container' },
	      content
	    );
	  };
	
	  return ProfileControl;
	}(_react2.default.Component);
	
	ProfileControl.propTypes = {
	  self_freelance_posting: _propTypes2.default.object,
	  delete_my_freelance_posting: _propTypes2.default.func,
	  authenticated_user: _propTypes2.default.object,
	  delete_hiring_record: _propTypes2.default.func,
	  my_hiring_submissions: _propTypes2.default.array,
	  profile_content: _propTypes2.default.oneOf(Object.values(_constants.MODAL_PROFILE_CONTENT))
	};
	ProfileControl.displayName = 'ProfileControl';
	exports.default = ProfileControl;
	module.exports = exports['default'];

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinkit = __webpack_require__(20);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _funcs = __webpack_require__(11);
	
	var _constants = __webpack_require__(5);
	
	var _submitInput = __webpack_require__(17);
	
	var _submitInput2 = _interopRequireDefault(_submitInput);
	
	var _withEffectInput = __webpack_require__(18);
	
	var _withEffectInput2 = _interopRequireDefault(_withEffectInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INITIAL_STATE = {
	  email: '',
	  password: '',
	  error: null,
	  loading_state: _constants.LOADING_STATE.NOT_STARTED_YET,
	  remember_me_checked: false
	};
	
	var with_20_h = { height: '20px', display: 'flex', justifyContent: 'center' };
	
	var SignInForm = function (_React$Component) {
	  _inherits(SignInForm, _React$Component);
	
	  function SignInForm() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SignInForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INITIAL_STATE), _this.on_submit = function (event) {
	      var _this$state = _this.state,
	          email = _this$state.email,
	          password = _this$state.password,
	          remember_me_checked = _this$state.remember_me_checked;
	      var _this$props = _this.props,
	          user_did_sign_in = _this$props.user_did_sign_in,
	          sign_user_in = _this$props.sign_user_in;
	
	      event.preventDefault();
	      _this.setState(function () {
	        return { loading_state: _constants.LOADING_STATE.CURRENTLY_LOADING };
	      }, function () {
	        return sign_user_in(email, password, remember_me_checked, user_did_sign_in).then(function () {
	          return _this.setState(function () {
	            return _extends({}, INITIAL_STATE);
	          });
	        }).catch(function (error) {
	          _this.setState(function () {
	            return { error: error, loading_state: _constants.LOADING_STATE.NOT_STARTED_YET };
	          });
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  SignInForm.prototype.make_remember_forget_row = function make_remember_forget_row() {
	    var _this2 = this;
	
	    var remember_me_update = function remember_me_update(event) {
	      _this2.setState((0, _funcs.updateByPropertyName)('remember_me_checked', event.target.checked));
	    };
	    var remember_me_checked = this.state.remember_me_checked;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'PlainFlexRow FlexSpaceBetween PlainFlexCentered RememberMeRow' },
	      _react2.default.createElement(
	        'span',
	        { className: 'PlainFlexColumn' },
	        _react2.default.createElement(
	          'span',
	          { 'data-balloon': 'This DOES not work yet', 'data-ballon-pos': 'top', style: with_20_h },
	          _react2.default.createElement('input', {
	            type: 'checkbox',
	            style: with_20_h,
	            onChange: remember_me_update,
	            checked: remember_me_checked
	          })
	        ),
	        _react2.default.createElement(
	          'span',
	          {
	            className: remember_me_checked ? 'RememberMeRow__RememberMe--Checked' : 'RememberMeRow__RememberMe--Unchecked' },
	          'Remember me'
	        )
	      ),
	      _react2.default.createElement(
	        'span',
	        {
	          'data-balloon': 'This DOES not work yet',
	          'data-ballon-pos': 'right',
	          className: 'RememberMeRow__ForgotPassword' },
	        'Forgot Password'
	      )
	    );
	  };
	
	  SignInForm.prototype.render = function render() {
	    var _this3 = this;
	
	    var _state = this.state,
	        email = _state.email,
	        password = _state.password,
	        error = _state.error;
	
	    var is_invalid = password === '' || email === '';
	    var top_message = error ? _react2.default.createElement(
	      'span',
	      { className: 'AuthingErrorMessage' },
	      error.message
	    ) : _react2.default.createElement(
	      'span',
	      { className: 'AuthingWelcomeMessage' },
	      this.props.login_message
	    );
	    var extra_css_classname = this.state.loading_state === _constants.LOADING_STATE.CURRENTLY_LOADING ? 'ProfileContainer__SpinningCentered' : 'ModalContainer__Form';
	    var content = this.state.loading_state === _constants.LOADING_STATE.CURRENTLY_LOADING ? _react2.default.createElement(
	      'div',
	      { className: 'Profile__Container__LoadingSpinner' },
	      _constants.DID_YOU_KNOW,
	      _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' })
	    ) : _react2.default.createElement(
	      'fieldset',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'PlainFlexColumn FullHeight FlexSpaceAround' },
	        _react2.default.createElement(
	          'section',
	          { className: 'PlainFlexColumn FormTopEntry' },
	          top_message,
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNIN_EMAIL,
	            query_field: function query_field() {
	              return _this3.state.email;
	            },
	            on_change: function on_change(event) {
	              return _this3.setState((0, _funcs.updateByPropertyName)('email', event.target.value));
	            },
	            label: 'Email',
	            input_type: 'email'
	          }),
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNIN_PASSWORD,
	            query_field: function query_field() {
	              return _this3.state.password;
	            },
	            on_change: function on_change(event) {
	              return _this3.setState((0, _funcs.updateByPropertyName)('password', event.target.value));
	            },
	            label: 'Password',
	            input_type: 'password'
	          }),
	          _constants.SPACER_30_H,
	          this.make_remember_forget_row()
	        ),
	        _constants.SPACER_10_H,
	        _react2.default.createElement(_submitInput2.default, {
	          value: 'Sign In',
	          ballon_position: 'right',
	          ballon_caption: 'Sign in to post',
	          disabled: is_invalid
	        })
	      )
	    );
	    return _react2.default.createElement(
	      'form',
	      {
	        onSubmit: this.on_submit,
	        className: 'ReactModal__Content--after-open Profile__Container ' + extra_css_classname },
	      content
	    );
	  };
	
	  return SignInForm;
	}(_react2.default.Component);
	
	SignInForm.displayName = 'SignInForm';
	exports.default = SignInForm;
	module.exports = exports['default'];

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSpinkit = __webpack_require__(20);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _constants = __webpack_require__(5);
	
	var _funcs = __webpack_require__(11);
	
	var _withEffectInput = __webpack_require__(18);
	
	var _withEffectInput2 = _interopRequireDefault(_withEffectInput);
	
	var _submitInput = __webpack_require__(17);
	
	var _submitInput2 = _interopRequireDefault(_submitInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INITIAL_STATE = {
	  username: '',
	  email: '',
	  password_one: '',
	  password_two: '',
	  error: null,
	  loading_state: _constants.LOADING_STATE.NOT_STARTED_YET,
	  receive_newsletter: false
	};
	
	var signup_message = 'Sign up for an account';
	
	var SignUpForm = function (_React$Component) {
	  _inherits(SignUpForm, _React$Component);
	
	  function SignUpForm() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SignUpForm);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INITIAL_STATE), _this.onSubmit = function (event) {
	      event.preventDefault();
	      var _this$state = _this.state,
	          username = _this$state.username,
	          email = _this$state.email,
	          password_one = _this$state.password_one,
	          receive_newsletter = _this$state.receive_newsletter;
	      var sign_user_up = _this.context.sign_user_up;
	      var user_did_sign_up = _this.props.user_did_sign_up;
	
	
	      _this.setState(function () {
	        return { loading_state: _constants.LOADING_STATE.CURRENTLY_LOADING };
	      }, function () {
	        return sign_user_up(username, email, password_one, receive_newsletter, user_did_sign_up).then(function () {
	          return _this.setState(function () {
	            return _extends({}, INITIAL_STATE);
	          });
	        }).catch(function (error) {
	          return _this.setState((0, _funcs.updateByPropertyName)('error', error));
	        }).then(function () {
	          var error = _this.state.error;
	
	          _this.setState(function () {
	            return _extends({}, INITIAL_STATE, { error: error });
	          });
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  SignUpForm.prototype.render = function render() {
	    var _this2 = this;
	
	    var _state = this.state,
	        username = _state.username,
	        email = _state.email,
	        password_one = _state.password_one,
	        password_two = _state.password_two,
	        error = _state.error;
	
	    var isInvalid = password_one !== password_two || password_one === '' || username === '' || email === '';
	    var top_message = error ? _react2.default.createElement(
	      'pre',
	      { className: 'AuthingErrorMessage' },
	      error.message
	    ) : _react2.default.createElement(
	      'span',
	      { className: 'AuthingWelcomeMessage' },
	      signup_message
	    );
	    var extra_css_classname = this.state.loading_state === _constants.LOADING_STATE.CURRENTLY_LOADING ? 'ProfileContainer__SpinningCentered' : 'ModalContainer__Form';
	
	    var content = this.state.loading_state === _constants.LOADING_STATE.CURRENTLY_LOADING ? _react2.default.createElement(
	      'div',
	      { className: 'Profile__Container__LoadingSpinner' },
	      _constants.DID_YOU_KNOW,
	      _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' })
	    ) : _react2.default.createElement(
	      'fieldset',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'PlainFlexColumn FullHeight FlexSpaceAround' },
	        _react2.default.createElement(
	          'section',
	          { className: 'PlainFlexColumn FormTopEntry' },
	          top_message,
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNUP_USERNAME,
	            query_field: function query_field() {
	              return _this2.state.username;
	            },
	            on_change: function on_change(event) {
	              return _this2.setState((0, _funcs.updateByPropertyName)('username', event.target.value));
	            },
	            input_type: 'text',
	            label: 'Full Name'
	          }),
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNUP_EMAIL,
	            query_field: function query_field() {
	              return _this2.state.email;
	            },
	            on_change: function on_change(event) {
	              return _this2.setState((0, _funcs.updateByPropertyName)('email', event.target.value));
	            },
	            input_type: 'email',
	            label: 'Email Address'
	          }),
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNUP_PASSWORD_ONE,
	            query_field: function query_field() {
	              return password_one;
	            },
	            on_change: function on_change(event) {
	              return _this2.setState((0, _funcs.updateByPropertyName)('password_one', event.target.value));
	            },
	            input_type: 'password',
	            label: 'Password'
	          }),
	          _react2.default.createElement(_withEffectInput2.default, {
	            box_name: _constants.FANCY_INPUT_BOXES.SIGNUP_PASSWORD_TWO,
	            query_field: function query_field() {
	              return password_two;
	            },
	            on_change: function on_change(event) {
	              return _this2.setState((0, _funcs.updateByPropertyName)('password_two', event.target.value));
	            },
	            input_type: 'password',
	            label: 'Confirm Password'
	          }),
	          _constants.SPACER_30_H
	        ),
	        _constants.SPACER_10_H,
	        _react2.default.createElement(_submitInput2.default, { disabled: isInvalid, value: 'Create Account' })
	      )
	    );
	    return _react2.default.createElement(
	      'form',
	      {
	        className: 'ReactModal__Content--after-open Profile__Container ' + extra_css_classname,
	        onSubmit: this.onSubmit },
	      content
	    );
	  };
	
	  return SignUpForm;
	}(_react2.default.Component);
	
	SignUpForm.contextTypes = { sign_user_up: _propTypes2.default.func };
	SignUpForm.displayName = 'SignUpForm';
	exports.default = SignUpForm;
	module.exports = exports['default'];

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(5);
	
	var _funcs = __webpack_require__(11);
	
	var _withEffectInput = __webpack_require__(18);
	
	var _withEffectInput2 = _interopRequireDefault(_withEffectInput);
	
	var _submitInput = __webpack_require__(17);
	
	var _submitInput2 = _interopRequireDefault(_submitInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INIT_STATE = {
	  name: '',
	  github_link: '',
	  linkedin_link: '',
	  resume_link: '',
	  self_description: '',
	  known_technologies: '',
	  error: null
	};
	
	var NewFreelancerEntry = function (_React$Component) {
	  _inherits(NewFreelancerEntry, _React$Component);
	
	  function NewFreelancerEntry() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, NewFreelancerEntry);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INIT_STATE), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  NewFreelancerEntry.prototype.render = function render() {
	    var _this2 = this;
	
	    var _state = this.state,
	        error = _state.error,
	        name = _state.name,
	        self_description = _state.self_description,
	        known_technologies = _state.known_technologies;
	    var submit_post_lifecycle = this.props.submit_post_lifecycle;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'NewFreelancerFormContainer' },
	      _react2.default.createElement(
	        'form',
	        {
	          onSubmit: submit_post_lifecycle.bind(null, this.state, function (after_form_cleanup) {
	            _this2.setState(function () {
	              return _extends({}, INIT_STATE);
	            }, after_form_cleanup);
	          }, function (error) {
	            _this2.setState((0, _funcs.updateByPropertyName)('error', error));
	          }) },
	        _react2.default.createElement(
	          'fieldset',
	          null,
	          _react2.default.createElement(
	            'legend',
	            {
	              className: error ? 'NewFreelancerFormContainer__GuidingLegend--Error' : 'NewFreelancerFormContainer__GuidingLegend--Success' },
	            error ? error.message : 'Let employers find you'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'FreelancerTable__FreelancerColumnDescription' },
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NAME,
	              query_field: function query_field() {
	                return _this2.state.name;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('name', event.target.value));
	              },
	              label: 'Your name'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.GITHUB,
	              query_field: function query_field() {
	                return _this2.state.github_link;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('github_link', event.target.value));
	              },
	              label: 'Github',
	              input_type: 'url'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.LINKEDIN,
	              query_field: function query_field() {
	                return _this2.state.linkedin_link;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('linkedin_link', event.target.value));
	              },
	              label: 'Linkedin',
	              input_type: 'url'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.RESUME_OR_PERSONAL,
	              query_field: function query_field() {
	                return _this2.state.resume_link;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('resume_link', event.target.value));
	              },
	              label: 'Resume/Personal site',
	              input_type: 'url'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.KNOWN_TECHS,
	              query_field: function query_field() {
	                return _this2.state.known_technologies;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('known_technologies', event.target.value));
	              },
	              label: 'Known Technologies, comma-separated'
	            }),
	            _react2.default.createElement('textarea', {
	              onChange: function onChange(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('self_description', event.target.value));
	              },
	              className: 'TextSubmissionArea FullWidth',
	              maxLength: _constants.NEW_FREELANCER_SELF_DESCRIPTION_LIMIT,
	              rows: 7,
	              placeholder: 'Describe yourself for employers...(' + _constants.NEW_FREELANCER_SELF_DESCRIPTION_LIMIT + ' char max)',
	              value: this.state.self_description
	            }),
	            _react2.default.createElement(_submitInput2.default, { className: 'NewJobPosting__SubmitButton', value: 'Get hired' })
	          )
	        )
	      )
	    );
	  };
	
	  return NewFreelancerEntry;
	}(_react2.default.Component);
	
	NewFreelancerEntry.displayName = 'NewFreelancerEntry';
	exports.default = NewFreelancerEntry;
	module.exports = exports['default'];

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _funcs = __webpack_require__(11);
	
	var _withEffectInput = __webpack_require__(18);
	
	var _withEffectInput2 = _interopRequireDefault(_withEffectInput);
	
	var _submitInput = __webpack_require__(17);
	
	var _submitInput2 = _interopRequireDefault(_submitInput);
	
	var _constants = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INIT_STATE = {
	  job_location: '',
	  payment_currency: 'dram',
	  salary_from: '',
	  salary_to: '',
	  post_author: '',
	  job_description: '',
	  short_job_description: '',
	  contact_info: '',
	  error: null
	};
	
	var NewJobPosting = function (_React$Component) {
	  _inherits(NewJobPosting, _React$Component);
	
	  function NewJobPosting() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, NewJobPosting);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INIT_STATE), _this.submit_new_job_posting = function (e) {
	      e.preventDefault();
	      var _this$props = _this.props,
	          submit_new_hiring_post = _this$props.submit_new_hiring_post,
	          new_tech_job_post_did_finish = _this$props.new_tech_job_post_did_finish;
	
	      var missing_field = null;
	      if (true) {
	        var _this$state = _this.state,
	            error = _this$state.error,
	            useful_data = _objectWithoutProperties(_this$state, ['error']);
	
	        useful_data.short_job_description = useful_data.short_job_description.slice(0, _constants.SUMMARY_LIMIT);
	        useful_data.job_description = useful_data.job_description.slice(0, _constants.JOB_POSTING_DESCRIPTION_LIMIT);
	        var now = new Date();
	        for (var _iterator = Object.keys(useful_data), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	          var _ref;
	
	          if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	          } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	          }
	
	          var k = _ref;
	          useful_data[k] = useful_data[k].trim();
	        }submit_new_hiring_post(_extends({}, useful_data, { creation_time: now.getTime() })).then(function () {
	          return _this.setState(function () {
	            return _extends({}, INIT_STATE);
	          });
	        }).then(new_tech_job_post_did_finish).catch(function (error) {
	          return _this.setState((0, _funcs.updateByPropertyName)('error', error));
	        });
	      } else {
	        _this.setState(function () {
	          return { error: new Error('Something incorrect with ' + missing_field) };
	        });
	      }
	    }, _this.is_invalid = function () {
	      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
	      var _this$state2 = _this.state,
	          salary_from = _this$state2.salary_from,
	          salary_to = _this$state2.salary_to,
	          error = _this$state2.error,
	          rest = _objectWithoutProperties(_this$state2, ['salary_from', 'salary_to', 'error']);
	
	      var validated = (0, _funcs.is_number)(salary_from) && (0, _funcs.is_number)(salary_to) && +salary_from <= +salary_to && Object.keys(rest).map(function (k) {
	        var is_missing = rest[k] !== '';
	        if (is_missing && cb) cb(k);
	        return is_missing;
	      }).reduce(function (accumulator, currentValue) {
	        return accumulator && currentValue;
	      });
	      return validated;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  NewJobPosting.prototype.render = function render() {
	    var _this2 = this;
	
	    var _state = this.state,
	        error = _state.error,
	        short_job_description = _state.short_job_description,
	        job_description = _state.job_description;
	
	    var s_j_d_len = short_job_description.length;
	    var f_j_d_len = job_description.length;
	    return _react2.default.createElement(
	      'div',
	      { className: 'NewFreelancerFormContainer' },
	      _react2.default.createElement(
	        'form',
	        { onSubmit: this.submit_new_job_posting },
	        _react2.default.createElement(
	          'fieldset',
	          null,
	          _react2.default.createElement(
	            'legend',
	            {
	              className: error ? 'NewFreelancerFormContainer__GuidingLegend--Error' : 'NewFreelancerFormContainer__GuidingLegend--Success' },
	            error ? error.message : 'Post a new tech job'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'FreelancerTable__FreelancerColumnDescription' },
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_LOCATION,
	              input_type: 'text',
	              query_field: function query_field() {
	                return _this2.state.job_location;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('job_location', event.target.value));
	              },
	              label: 'Location'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_SALARY_FROM,
	              query_field: function query_field() {
	                return _this2.state.salary_from;
	              },
	              input_type: 'text',
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('salary_from', event.target.value));
	              },
	              label: 'Salary from'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_SALARY_TO,
	              input_type: 'text',
	              query_field: function query_field() {
	                return _this2.state.salary_to;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('salary_to', event.target.value));
	              },
	              label: 'Salary to'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_LOCATION,
	              input_type: 'text',
	              query_field: function query_field() {
	                return _this2.state.payment_currency;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('payment_currency', event.target.value));
	              },
	              label: 'Currency Type'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_POSTER_NAME,
	              input_type: 'text',
	              query_field: function query_field() {
	                return _this2.state.post_author;
	              },
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('post_author', event.target.value));
	              },
	              label: 'Poster Name'
	            }),
	            _react2.default.createElement(_withEffectInput2.default, {
	              box_name: _constants.FANCY_INPUT_BOXES.NEW_TECH_JOB_CONTACT_INFO,
	              on_change: function on_change(event) {
	                return _this2.setState((0, _funcs.updateByPropertyName)('contact_info', event.target.value));
	              },
	              query_field: function query_field() {
	                return _this2.state.contact_info;
	              },
	              label: 'Contact Information',
	              input_type: 'text'
	            }),
	            _constants.SPACER_30_H,
	            _react2.default.createElement(
	              'div',
	              { className: 'PlainFlexColumn PlainFlexCentered FullWidth' },
	              _react2.default.createElement(
	                'label',
	                { className: 'NewJobPosting__JobDescription' },
	                'Short Job Description (',
	                _constants.SUMMARY_LIMIT,
	                ' chars, ',
	                _constants.SUMMARY_LIMIT - s_j_d_len,
	                ' chars left)'
	              ),
	              _constants.SPACER_10_H,
	              _react2.default.createElement(
	                'div',
	                { className: 'TextSubmissionWrapper' },
	                _react2.default.createElement('textarea', {
	                  className: 'TextSubmissionArea WithTextSubmissionBackground OneHundredMinusFifteen',
	                  maxLength: _constants.SUMMARY_LIMIT,
	                  rows: 4,
	                  autoComplete: 'off',
	                  onChange: function onChange(event) {
	                    return _this2.setState((0, _funcs.updateByPropertyName)('short_job_description', event.target.value));
	                  },
	                  value: this.state.short_job_description,
	                  placeholder: 'This will be the single line description on the jobs board'
	                })
	              )
	            ),
	            _constants.SPACER_30_H,
	            _react2.default.createElement(
	              'div',
	              { className: 'PlainFlexColumn PlainFlexCentered FullWidth' },
	              _react2.default.createElement(
	                'label',
	                { className: 'NewJobPosting__JobDescription' },
	                'Full Job Description (',
	                _constants.JOB_POSTING_DESCRIPTION_LIMIT,
	                ' chars,',
	                ' ',
	                _constants.JOB_POSTING_DESCRIPTION_LIMIT - f_j_d_len,
	                ' chars left)'
	              ),
	              _constants.SPACER_10_H,
	              _react2.default.createElement(
	                'div',
	                { className: 'TextSubmissionWrapper' },
	                _react2.default.createElement('textarea', {
	                  className: 'TextSubmissionArea OneHundredMinusFifteen',
	                  maxLength: _constants.JOB_POSTING_DESCRIPTION_LIMIT,
	                  role: 'textbox',
	                  autoComplete: 'off',
	                  rows: 6,
	                  onChange: function onChange(event) {
	                    return _this2.setState((0, _funcs.updateByPropertyName)('job_description', event.target.value));
	                  },
	                  value: this.state.job_description,
	                  placeholder: 'The full job description, please phrase this carefully'
	                })
	              )
	            ),
	            _constants.SPACER_30_H,
	            _react2.default.createElement(_submitInput2.default, { className: 'NewJobPosting__SubmitButton', value: 'Submit New Job' })
	          )
	        )
	      )
	    );
	  };
	
	  return NewJobPosting;
	}(_react2.default.Component);
	
	NewJobPosting.displayName = 'NewJobPosting';
	exports.default = NewJobPosting;
	module.exports = exports['default'];

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _newsBannerModule = __webpack_require__(103);
	
	var _newsBannerModule2 = _interopRequireDefault(_newsBannerModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var posted_at = _ref.posted_at,
	      day_diff = _ref.day_diff,
	      hour_diff = _ref.hour_diff,
	      minute_diff = _ref.minute_diff,
	      poster = _ref.poster,
	      post_key = _ref.post_key,
	      title = _ref.title,
	      up_votes = _ref.up_votes;
	
	  // console.log(props);
	  return _react2.default.createElement(
	    'div',
	    { className: _newsBannerModule2.default.PostBannerRow },
	    _react2.default.createElement(
	      'p',
	      null,
	      'foo'
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"PostBannerRow":"src-components-news----news-banner-module---PostBannerRow---38EIG"};

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp2;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactPaginate = __webpack_require__(120);
	
	var _reactPaginate2 = _interopRequireDefault(_reactPaginate);
	
	var _reactRouterDom = __webpack_require__(49);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _funcs = __webpack_require__(11);
	
	var _constants = __webpack_require__(5);
	
	var _db = __webpack_require__(32);
	
	var _tempData = __webpack_require__(89);
	
	var _tempData2 = _interopRequireDefault(_tempData);
	
	var _newsBanner = __webpack_require__(87);
	
	var _newsBanner2 = _interopRequireDefault(_newsBanner);
	
	var _newsModule = __webpack_require__(104);
	
	var _newsModule2 = _interopRequireDefault(_newsModule);
	
	var _srcCommon = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INIT_STATE = {
	  news_postings: new Map(),
	  current_page_index: null,
	  total_pages_count: null,
	  error: null
	};
	
	exports.default = (0, _reactRouterDom.withRouter)((_temp2 = _class = function (_React$Component) {
	  _inherits(News, _React$Component);
	
	  function News() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, News);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INIT_STATE), _this.query_total_news_postings_count = function () {
	      return _db.total_news_posting_count_ref.once('value').then(function (snap_shot) {
	        return Number(snap_shot.val());
	      });
	    }, _this.test_push_data = _asyncToGenerator(function* () {
	      var _this$context = _this.context,
	          submit_new_news_post = _this$context.submit_new_news_post,
	          authenticated_user = _this$context.authenticated_user;
	
	      var user = authenticated_user();
	      if (user) {
	        for (var _iterator = _tempData2.default, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	          var _ref2;
	
	          if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref2 = _iterator[_i++];
	          } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref2 = _i.value;
	          }
	
	          var s = _ref2;
	
	          yield submit_new_news_post(s);
	        }
	        _this.forceUpdate();
	      } else {
	        _this.setState(function () {
	          return { error: new Error('Must be logged in to push test data') };
	        });
	      }
	    }), _this.current_page_number = function () {
	      var search = _this.props.location.search;
	
	      var page_params = new URLSearchParams(search);
	      var value = page_params.get('page');
	      if (value === null) return 0;
	      var is_num = (0, _funcs.is_number)(value);
	      return is_num && +value >= 2 ? Number(value) : 0;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  News.prototype.componentDidMount = function () {
	    var _ref3 = _asyncToGenerator(function* () {
	      var history = this.props.history;
	      var news_postings = this.state.news_postings;
	
	      var total_count = yield this.query_total_news_postings_count();
	      var total_pages_count = Math.ceil(total_count / _srcCommon.NEWS_POSTINGS_PER_PAGE);
	      var page = this.current_page_number();
	
	      var _ref4 = yield (0, _funcs.computed_news_posts)({
	        page_index: page
	      }),
	          result = _ref4.result,
	          error = _ref4.error;
	
	      console.log({ result: result, error: error, page: page });
	      if (result) {
	        news_postings.set(page, result);
	        this.setState(function () {
	          return { current_page_index: page, news_postings: news_postings, total_pages_count: total_pages_count };
	        }, function () {
	          if (page > total_pages_count || _srcCommon.will_redirect_to_homepage.has(page)) {
	            history.push(_constants.ROUTES.LATEST_NEWS);
	          }
	        });
	      }
	    });
	
	    function componentDidMount() {
	      return _ref3.apply(this, arguments);
	    }
	
	    return componentDidMount;
	  }();
	
	  News.prototype.make_posts = function make_posts() {
	    var _state = this.state,
	        news_postings = _state.news_postings,
	        current_page_index = _state.current_page_index;
	
	    if (current_page_index === null) return null;else {
	      // By this point we can assume the data exists bc of CDM
	      var postings = news_postings.get(current_page_index);
	      if (postings === null || postings === undefined) return null;else {
	        var p = Object.values(postings);
	        p.sort(_srcCommon.ranking_sort);
	        return p.map(function (post) {
	          return _react2.default.createElement(_newsBanner2.default, _extends({}, post, { key: '' + Math.random() }));
	        });
	      }
	    }
	  };
	
	  News.prototype.render = function render() {
	    var _state2 = this.state,
	        current_page_index = _state2.current_page_index,
	        error = _state2.error;
	
	    var num = Number(current_page_index);
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _newsModule2.default.LatestNewsContainer },
	        error === null ? this.make_posts() : _react2.default.createElement(
	          'p',
	          { className: _newsModule2.default.ErrorOccured },
	          'Error: ',
	          error.message
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _newsModule2.default.TempTestContainer },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Current page: ',
	            num
	          ),
	          _react2.default.createElement('input', { type: 'button', onClick: this.test_push_data, value: 'Push Test Data' }),
	          _react2.default.createElement('input', {
	            type: 'button',
	            onClick: this.next_page,
	            value: 'Go to next page: ' + (num + 1)
	          })
	        )
	      )
	    );
	  };
	
	  return News;
	}(_react2.default.Component), _class.contextTypes = {
	  submit_new_news_post: _propTypes2.default.func,
	  authenticated_user: _propTypes2.default.func
	}, _temp2));
	module.exports = exports['default'];

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LatestNewsContainer":"src-components-news----news-module---LatestNewsContainer---STOyW","TempTestContainer":"src-components-news----news-module---TempTestContainer---3n89Q","ErrorOccured":"src-components-news----news-module---ErrorOccured---35pNA"};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _add_minutes = __webpack_require__(101);
	
	var _add_minutes2 = _interopRequireDefault(_add_minutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var starting_date = new Date();
	
	exports.default = [{
	  up_votes: 0,
	  poster: 'display name',
	  title: 'Something code',
	  posted_at: (0, _add_minutes2.default)(starting_date, 10).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 2,
	  poster: 'display name2',
	  title: 'Something else',
	  posted_at: (0, _add_minutes2.default)(starting_date, 12).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 3,
	  poster: 'display name3',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 13).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 3,
	  poster: 'display name4',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 14).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 3,
	  poster: 'display name5',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 15).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 5,
	  poster: 'display name6',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 16).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 3,
	  poster: 'display name7',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 17).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 3,
	  poster: 'display name8',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 18).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 2,
	  poster: 'display name9',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 19).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 5,
	  poster: 'display name10',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 20).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 2,
	  poster: 'display name11',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 21).getTime(),
	  ranking_score: 0
	}, {
	  up_votes: 10,
	  poster: 'display name12',
	  title: 'Somethign third',
	  posted_at: (0, _add_minutes2.default)(starting_date, 22).getTime(),
	  ranking_score: 0
	}];
	module.exports = exports['default'];

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactModal = __webpack_require__(116);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	var _signin = __webpack_require__(83);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _signup = __webpack_require__(84);
	
	var _signup2 = _interopRequireDefault(_signup);
	
	var _profileControl = __webpack_require__(82);
	
	var _profileControl2 = _interopRequireDefault(_profileControl);
	
	var _newFreelancer = __webpack_require__(85);
	
	var _newFreelancer2 = _interopRequireDefault(_newFreelancer);
	
	var _freelancerTable = __webpack_require__(77);
	
	var _freelancerTable2 = _interopRequireDefault(_freelancerTable);
	
	var _news = __webpack_require__(88);
	
	var _news2 = _interopRequireDefault(_news);
	
	var _jobsTable = __webpack_require__(79);
	
	var _jobsTable2 = _interopRequireDefault(_jobsTable);
	
	var _newJobPosting = __webpack_require__(86);
	
	var _newJobPosting2 = _interopRequireDefault(_newJobPosting);
	
	var _signinBar = __webpack_require__(91);
	
	var _signinBar2 = _interopRequireDefault(_signinBar);
	
	var _constants = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PageControl = function (_React$Component) {
	  _inherits(PageControl, _React$Component);
	
	  function PageControl() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PageControl);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { modal_show: false, error: null }, _this.toggle_modal = function () {
	      return _this.setState(function (_ref) {
	        var modal_show = _ref.modal_show;
	        return { modal_show: !modal_show };
	      });
	    }, _this.user_did_sign_in = function () {
	      var post_signin_action = _this.props.post_signin_action;
	
	      _this.setState(function () {
	        return { modal_show: false };
	      }, post_signin_action);
	    }, _this.user_did_sign_up = function () {
	      _this.setState(function () {
	        return { modal_show: false };
	      });
	    }, _this.modal_content = function () {
	      var content = null;
	      var _this$props = _this.props,
	          delete_hiring_record = _this$props.delete_hiring_record,
	          self_freelance_posting = _this$props.self_freelance_posting,
	          my_hiring_submissions = _this$props.my_hiring_submissions,
	          delete_my_freelance_posting = _this$props.delete_my_freelance_posting,
	          modal_content = _this$props.modal_content,
	          modal_profile_content = _this$props.modal_profile_content;
	
	      switch (modal_content) {
	        case _constants.MODAL_CONTENT.SIGNIN_VIEW:
	          content = _react2.default.createElement(_signin2.default, {
	            login_message: 'Sign in',
	            sign_user_in: _this.context.sign_user_in,
	            user_did_sign_in: _this.user_did_sign_in
	          });
	          break;
	        case _constants.MODAL_CONTENT.PROFILE_VIEW:
	          content = _react2.default.createElement(_profileControl2.default, {
	            authenticated_user: _this.context.authenticated_user(),
	            profile_content: modal_profile_content,
	            self_freelance_posting: self_freelance_posting,
	            my_hiring_submissions: my_hiring_submissions,
	            delete_hiring_record: delete_hiring_record,
	            delete_my_freelance_posting: delete_my_freelance_posting
	          });
	          break;
	        case _constants.MODAL_CONTENT.SIGNUP_VIEW:
	          content = _react2.default.createElement(_signup2.default, { user_did_sign_up: _this.user_did_sign_up });
	          break;
	        default:
	          throw new Error('Unknown modal content requested: ' + modal_content);
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'ModalContentWrapper' },
	        content
	      );
	    }, _this.submit_post_lifecycle = function (useful_data, clear_out_form, error_handling, e) {
	      var submit_new_freelancer_post = _this.context.submit_new_freelancer_post;
	      var _this$props2 = _this.props,
	          did_finish_submit_post_lifecycle = _this$props2.did_finish_submit_post_lifecycle,
	          page_content = _this$props2.page_content;
	
	      e.preventDefault();
	
	      var error = useful_data.error,
	          data = _objectWithoutProperties(useful_data, ['error']);
	
	      for (var _iterator = Object.keys(data), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref2;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref2 = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref2 = _i.value;
	        }
	
	        var k = _ref2;
	
	        data[k] = data[k].trim();
	        if (data[k] === '') {
	          error_handling(new Error('"' + k + '" field cannot be empty'));
	          return;
	        }
	      }
	
	      if (page_content === _constants.PAGE_CONTENT.NEW_FREELANCER) {
	        submit_new_freelancer_post(data).then(function () {
	          clear_out_form(function () {
	            did_finish_submit_post_lifecycle();
	          });
	        }).catch(error_handling);
	      }
	    }, _this.page_content = function () {
	      var _this$props3 = _this.props,
	          jobs = _this$props3.jobs,
	          loadedJobs = _this$props3.loadedJobs,
	          new_tech_job_post_did_finish = _this$props3.new_tech_job_post_did_finish,
	          submit_new_hiring_post = _this$props3.submit_new_hiring_post,
	          freelancers = _this$props3.freelancers,
	          loadedLancers = _this$props3.loadedLancers,
	          page_content = _this$props3.page_content;
	      // Then need to add the HN style news thing here
	
	      switch (page_content) {
	        case _constants.PAGE_CONTENT.HIRING_TABLE:
	          return _react2.default.createElement(_jobsTable2.default, { all_jobs: jobs, loadedJobs: loadedJobs });
	        case _constants.PAGE_CONTENT.NEW_HIRING_POST:
	          return _react2.default.createElement(_newJobPosting2.default, {
	            new_tech_job_post_did_finish: new_tech_job_post_did_finish,
	            submit_new_hiring_post: submit_new_hiring_post
	          });
	        case _constants.PAGE_CONTENT.FREELANCER_TABLE:
	          return _react2.default.createElement(_freelancerTable2.default, { freelancers: freelancers, loadedLancers: loadedLancers });
	        case _constants.PAGE_CONTENT.NEW_FREELANCER:
	          return _react2.default.createElement(_newFreelancer2.default, { submit_post_lifecycle: _this.submit_post_lifecycle });
	        case _constants.PAGE_CONTENT.NEWS_LISTINGS:
	          return _react2.default.createElement(_news2.default, null);
	        default:
	          throw new Error('Unhandled page requested ' + page_content);
	      }
	    }, _this.already_signed_in_handler = function () {
	      var already_signed_in_page_handler = _this.props.already_signed_in_page_handler;
	
	      already_signed_in_page_handler(function () {
	        return _this.setState(function () {
	          return { modal_show: true };
	        });
	      });
	    }, _this.signin_handler = function () {
	      var signin_handler = _this.props.signin_handler;
	
	      signin_handler();
	      _this.setState(function () {
	        return { modal_show: true };
	      });
	    }, _this.signout_handler = function () {
	      var sign_user_out = _this.context.sign_user_out;
	      var user_did_sign_out = _this.props.user_did_sign_out;
	
	      sign_user_out(user_did_sign_out);
	    }, _this.signup_handler = function () {
	      var signup_handler = _this.props.signup_handler;
	
	      signup_handler(function () {
	        return _this.setState(function () {
	          return { modal_show: true };
	        });
	      });
	    }, _this.custom_input_handler_signedout_wrapper = function () {
	      var custom_input_handler_signedout = _this.props.custom_input_handler_signedout;
	
	      custom_input_handler_signedout(function () {
	        return _this.setState(function () {
	          return { modal_show: true };
	        });
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  PageControl.prototype.render = function render() {
	    var _props = this.props,
	        banner_title = _props.banner_title,
	        custom_input_signed_in_name = _props.custom_input_signed_in_name,
	        custom_input_signed_out_name = _props.custom_input_signed_out_name,
	        custom_input_handler_signedin = _props.custom_input_handler_signedin;
	    var modal_show = this.state.modal_show;
	    var authenticated_user = this.context.authenticated_user;
	
	    var user = authenticated_user();
	    return _react2.default.createElement(
	      'div',
	      { className: 'AvailableForWorkContainer' },
	      _react2.default.createElement(
	        _reactModal2.default,
	        {
	          closeTimeoutMS: _constants.MODAL_TRANSITION,
	          isOpen: modal_show,
	          onRequestClose: this.toggle_modal,
	          ariaHideApp: false,
	          style: _constants.modal_s,
	          contentLabel: 'yerevancoder' },
	        this.modal_content()
	      ),
	      _react2.default.createElement(
	        'nav',
	        { className: 'AvailableForWorkContainer__NavTopRow' },
	        _react2.default.createElement(
	          'h4',
	          { className: 'AvailableForWorkContainer__PageBanner' },
	          banner_title
	        ),
	        _react2.default.createElement(_signinBar2.default, {
	          signin_handler: this.signin_handler,
	          signup_handler: this.signup_handler,
	          signout_handler: this.signout_handler,
	          already_signed_in_handler: this.already_signed_in_handler,
	          is_signed_in: user !== null,
	          when_active_name: user ? user.email : '',
	          custom_input_handler_signedin: custom_input_handler_signedin,
	          custom_input_handler_signedout: this.custom_input_handler_signedout_wrapper,
	          custom_input_signed_in_name: custom_input_signed_in_name,
	          custom_input_signed_out_name: custom_input_signed_out_name
	        })
	      ),
	      this.page_content()
	    );
	  };
	
	  return PageControl;
	}(_react2.default.Component);
	
	PageControl.contextTypes = {
	  authenticated_user: _propTypes2.default.func,
	  sign_user_out: _propTypes2.default.func,
	  sign_user_in: _propTypes2.default.func,
	  submit_new_freelancer_post: _propTypes2.default.func,
	  submit_new_hiring_post: _propTypes2.default.func
	};
	PageControl.displayName = 'PageControl';
	exports.default = PageControl;
	module.exports = exports['default'];

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SigninBar = function SigninBar(_ref) {
	  var signin_handler = _ref.signin_handler,
	      signup_handler = _ref.signup_handler,
	      signout_handler = _ref.signout_handler,
	      already_signed_in_handler = _ref.already_signed_in_handler,
	      is_signed_in = _ref.is_signed_in,
	      when_active_name = _ref.when_active_name,
	      custom_input_handler_signedin = _ref.custom_input_handler_signedin,
	      custom_input_handler_signedout = _ref.custom_input_handler_signedout,
	      custom_input_signed_in_name = _ref.custom_input_signed_in_name,
	      custom_input_signed_out_name = _ref.custom_input_signed_out_name;
	
	  var custom_input = !custom_input_handler_signedin || !custom_input_handler_signedout || !custom_input_signed_in_name || !custom_input_signed_out_name ? null : _react2.default.createElement('input', {
	    type: 'button',
	    value: is_signed_in ? custom_input_signed_in_name : custom_input_signed_out_name,
	    onClick: is_signed_in ? custom_input_handler_signedin : custom_input_handler_signedout,
	    className: is_signed_in ? 'loginActionRow__CustomInputField--UserSignedIn' : 'loginActionRow__CustomInputField--UserSignedOut'
	  });
	  var signin_or_signout = _react2.default.createElement('input', {
	    className: is_signed_in ? 'loginActionRow__SigninOrSignOut--UserSignedIn' : 'loginActionRow__SigninOrSignOut--UserSignedOut',
	    onClick: is_signed_in ? signout_handler : signin_handler,
	    type: 'button',
	    value: is_signed_in ? 'Sign out' : 'Sign in'
	  });
	  var signup_or_already_signed_in = _react2.default.createElement('input', {
	    className: is_signed_in ? 'loginActionRow__SignUpOrLoggedIn--UserSignedIn' : 'loginActionRow__SignUpOrLoggedIn--UserSignedOut',
	    onClick: is_signed_in ? already_signed_in_handler : signup_handler,
	    type: 'button',
	    value: is_signed_in ? when_active_name : 'Sign up'
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'loginActionRow__RowContainer' },
	    custom_input,
	    signin_or_signout,
	    signup_or_already_signed_in
	  );
	};
	
	SigninBar.displayName = 'SigninBar';
	SigninBar.displayName = 'SigninBar';
	SigninBar.propTypes = {
	  already_signed_in_handler: _propTypes2.default.func,
	  is_signed_in: _propTypes2.default.bool
	};
	
	exports.default = SigninBar;
	module.exports = exports['default'];

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var disabled = _ref.disabled,
	      value = _ref.value,
	      ballon_position = _ref.ballon_position,
	      ballon_caption = _ref.ballon_caption;
	  return _react2.default.createElement(
	    'span',
	    {
	      className: 'SubmitInput__Wrapper',
	      'data-balloon': ballon_caption,
	      'data-balloon-pos': ballon_position },
	    _react2.default.createElement('input', { className: 'SubmitInput', disabled: disabled, type: 'submit', value: value })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WithEffectInput = function (_React$Component) {
	  _inherits(WithEffectInput, _React$Component);
	
	  function WithEffectInput() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, WithEffectInput);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { content_classname: '' }, _this.on_blur = function () {
	      if (_this.props.query_field() !== '') {
	        _this.setState(function () {
	          return { content_classname: 'has-content' };
	        });
	      } else {
	        _this.setState(function () {
	          return { content_classname: '' };
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  WithEffectInput.prototype.render = function render() {
	    var _props = this.props,
	        box_name = _props.box_name,
	        on_change = _props.on_change,
	        label = _props.label,
	        input_type = _props.input_type;
	
	
	    var valid_names = new Set(Object.values(_constants.FANCY_INPUT_BOXES));
	    if (valid_names.has(box_name) === false) {
	      console.warn('Unknown box_name ' + box_name + ' requested, is CSS right?');
	    }
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'InputEffect' },
	      _react2.default.createElement('input', {
	        onBlur: this.on_blur,
	        onChange: on_change,
	        className: 'effect-' + box_name + ' ' + this.state.content_classname,
	        type: input_type
	      }),
	      _react2.default.createElement(
	        'label',
	        { className: 'InputEffect__Label' },
	        label
	      ),
	      _react2.default.createElement(
	        'span',
	        { className: 'focus-border' },
	        _react2.default.createElement('i', null)
	      )
	    );
	  };
	
	  return WithEffectInput;
	}(_react2.default.Component);
	
	WithEffectInput.displayName = 'WithEffectInput';
	exports.default = WithEffectInput;
	module.exports = exports['default'];

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(4);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _pageControl = __webpack_require__(90);
	
	var _pageControl2 = _interopRequireDefault(_pageControl);
	
	var _constants = __webpack_require__(5);
	
	var _db = __webpack_require__(32);
	
	var _funcs = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SUBMIT_NEW_JOB = 'Submit new Job';
	
	var INIT_STATE = {
	  jobs: [],
	  my_hiring_submissions: [],
	  modal_content: _constants.MODAL_CONTENT.SIGNIN_VIEW,
	  modal_profile_content: _constants.MODAL_PROFILE_CONTENT.HIRING_BOARD_LISTINGS,
	  page_content: _constants.PAGE_CONTENT.HIRING_TABLE,
	  loadedJobs: false
	};
	
	var HiringBoardPage = function (_React$Component) {
	  _inherits(HiringBoardPage, _React$Component);
	
	  function HiringBoardPage() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, HiringBoardPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INIT_STATE), _this.query_data = function () {
	      return _db.hiring_table_posts_ref.once('value').then(function (snap_shot) {
	        return snap_shot.val();
	      });
	    }, _this.delete_a_job_posting = function (post_key) {
	      var current_user = _db.firebase.auth().currentUser;
	      var updates = {};
	      updates['/hiring-table-posts/' + post_key] = null;
	      updates['/users/' + current_user.uid + '/my-hiring-board-submissions/' + post_key] = null;
	      return _db.db.ref().update(updates).then(function (reply) {
	        return _this.query_data().then(function (rows) {
	          return (0, _funcs.query_my_hiring_post_submissions)().then(function (my_hiring_submissions) {
	            return _this.setState(function () {
	              return {
	                jobs: rows ? (0, _funcs.obj_to_array)(rows) : [],
	                my_hiring_submissions: my_hiring_submissions ? (0, _funcs.obj_to_array)(my_hiring_submissions) : []
	              };
	            });
	          });
	        });
	      }).catch(function (error) {
	        return console.warn(error);
	      });
	    }, _this.user_did_sign_in = function () {
	      (0, _funcs.query_my_hiring_post_submissions)().then(function (rows) {
	        return _this.setState(function () {
	          return {
	            my_hiring_submissions: rows ? (0, _funcs.obj_to_array)(rows) : [],
	            page_content: _constants.PAGE_CONTENT.HIRING_TABLE
	          };
	        });
	      }).catch(function (error) {
	        return console.log(error);
	      });
	    }, _this.new_tech_job_post_did_finish = function () {
	      return _this.query_data().then(function (rows) {
	        return (0, _funcs.query_my_hiring_post_submissions)().then(function (my_submissions) {
	          return _this.setState(function () {
	            return {
	              page_content: _constants.PAGE_CONTENT.HIRING_TABLE,
	              jobs: rows ? (0, _funcs.obj_to_array)(rows) : [],
	              my_hiring_submissions: my_submissions ? (0, _funcs.obj_to_array)(rows) : []
	            };
	          });
	        });
	      });
	    }, _this.toggle_hiring_content = function () {
	      return _this.setState(function (prev_state) {
	        return {
	          page_content: prev_state.page_content === _constants.PAGE_CONTENT.NEW_HIRING_POST ? _constants.PAGE_CONTENT.HIRING_TABLE : _constants.PAGE_CONTENT.NEW_HIRING_POST
	        };
	      });
	    }, _this.post_signin_in_query = function () {
	      return (0, _funcs.query_my_hiring_post_submissions)().catch(function (error) {
	        return console.log(error);
	      }).then(function (rows) {
	        _this.setState(function () {
	          return { jobs: rows ? (0, _funcs.obj_to_array)(rows) : [] };
	        });
	        return _constants.PAGE_CONTENT.HIRING_TABLE;
	      });
	    }, _this.signin_handler = function () {
	      _this.setState(function () {
	        return {
	          modal_content: _constants.MODAL_CONTENT.SIGNIN_VIEW
	        };
	      });
	    }, _this.signup_handler = function (after_cb) {
	      _this.setState(function () {
	        return {
	          modal_content: _constants.MODAL_CONTENT.SIGNUP_VIEW
	        };
	      }, after_cb);
	    }, _this.user_did_sign_out = function () {
	      _this.setState(function (_ref) {
	        var jobs = _ref.jobs;
	        return _extends({}, INIT_STATE, { jobs: jobs });
	      });
	    }, _this.already_signed_in_page_handler = function (after_cb) {
	      (0, _funcs.query_my_hiring_post_submissions)().then(function (rows) {
	        return _this.setState(function () {
	          return {
	            modal_content: _constants.MODAL_CONTENT.PROFILE_VIEW,
	            my_hiring_submissions: rows ? (0, _funcs.obj_to_array)(rows) : [],
	            modal_profile_content: _constants.MODAL_PROFILE_CONTENT.HIRING_BOARD_LISTINGS
	          };
	        }, after_cb);
	      });
	    }, _this.custom_input_handler_signedin = function () {
	      _this.setState(function (prev_state) {
	        return {
	          page_content: prev_state.page_content === _constants.PAGE_CONTENT.NEW_HIRING_POST ? _constants.PAGE_CONTENT.HIRING_TABLE : _constants.PAGE_CONTENT.NEW_HIRING_POST
	        };
	      });
	    }, _this.custom_input_handler_signedout = function (after_cb) {
	      _this.setState(function () {
	        return {
	          page_content: _constants.PAGE_CONTENT.HIRING_TABLE,
	          modal_content: _constants.MODAL_CONTENT.SIGNIN_VIEW
	        };
	      }, after_cb);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  HiringBoardPage.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.query_data().then(function (rows) {
	      return _this2.setState({
	        jobs: rows ? (0, _funcs.obj_to_array)(rows) : [],
	        loadedJobs: true
	      });
	    });
	  };
	
	  HiringBoardPage.prototype.render = function render() {
	    return _react2.default.createElement(_pageControl2.default, {
	      signup_handler: this.signup_handler,
	      signin_handler: this.signin_handler,
	      banner_title: 'Get hired',
	      jobs: this.state.jobs,
	      loadedJobs: this.state.loadedJobs,
	      user_did_sign_out: this.user_did_sign_out,
	      new_tech_job_post_did_finish: this.new_tech_job_post_did_finish,
	      did_finish_submit_post_lifecycle: _funcs.no_op,
	      submit_new_hiring_post: this.context.submit_new_hiring_post,
	      freelancers: [],
	      page_content: this.state.page_content,
	      modal_content: this.state.modal_content,
	      modal_profile_content: this.state.modal_profile_content,
	      already_signed_in_page_handler: this.already_signed_in_page_handler,
	      custom_input_handler_signedin: this.custom_input_handler_signedin,
	      custom_input_handler_signedout: this.custom_input_handler_signedout,
	      custom_input_signed_in_name: this.state.page_content === _constants.PAGE_CONTENT.HIRING_TABLE ? SUBMIT_NEW_JOB : 'Jobs',
	      custom_input_signed_out_name: SUBMIT_NEW_JOB,
	      self_freelance_posting: null,
	      my_hiring_submissions: this.state.my_hiring_submissions,
	      delete_my_freelance_posting: _funcs.no_op,
	      delete_hiring_record: this.delete_a_job_posting,
	      post_signin_action: _funcs.no_op
	    });
	  };
	
	  return HiringBoardPage;
	}(_react2.default.Component);
	
	HiringBoardPage.contextTypes = {
	  authenticated_user: _propTypes2.default.func,
	  sign_user_out: _propTypes2.default.func,
	  sign_user_in: _propTypes2.default.func,
	  submit_new_hiring_post: _propTypes2.default.func
	};
	HiringBoardPage.displayName = 'HiringBoardPage';
	exports.default = HiringBoardPage;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-hiring-board-js-d8500e7388bdcff0fe90.js.map