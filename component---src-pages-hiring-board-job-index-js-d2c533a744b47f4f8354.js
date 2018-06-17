webpackJsonp([68142736585803],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinkit = __webpack_require__(14);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _db = __webpack_require__(24);
	
	var _jobPost = __webpack_require__(60);
	
	var _jobPost2 = _interopRequireDefault(_jobPost);
	
	var _constants = __webpack_require__(4);
	
	var _indexModule = __webpack_require__(384);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var JOB_WRAPPER_CLASSES = 'PlainFlexColumn PlainFlexCentered FifteenPaddingLeft MobileRemoveFifteenPaddingLeft ' + _indexModule2.default.DedicatedJobPost;
	
	var DedicatedJobPost = function (_React$Component) {
	  _inherits(DedicatedJobPost, _React$Component);
	
	  function DedicatedJobPost() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DedicatedJobPost);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { job: null }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  DedicatedJobPost.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    var _props$location$pathn = this.props.location.pathname.split('/'),
	        job_id = _props$location$pathn[3];
	
	    _db.hiring_table_posts_ref.child(job_id).once('value').then(function (snap_shot) {
	      var job = snap_shot.val();
	      // If data is null, then you got a gibberish, nonexistent job
	      if (job !== null) {
	        _this2.setState(function () {
	          return { job: job };
	        });
	      }
	    }).catch(function (err) {
	      // Error can't happen
	    });
	  };
	
	  DedicatedJobPost.prototype.render = function render() {
	    var content = null;
	    if (this.state.job === null) {
	      content = _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' });
	    } else {
	      content = _react2.default.createElement(_jobPost2.default, this.state.job);
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: JOB_WRAPPER_CLASSES },
	      _constants.SPACER_10_H,
	      content
	    );
	  };
	
	  return DedicatedJobPost;
	}(_react2.default.Component);
	
	DedicatedJobPost.displayName = 'DedicatedJobPost';
	exports.default = DedicatedJobPost;
	module.exports = exports['default'];

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"DedicatedJobPost":"src-pages-hiring-board-job----index-module---DedicatedJobPost---1sq84"};

/***/ })

});
//# sourceMappingURL=component---src-pages-hiring-board-job-index-js-d2c533a744b47f4f8354.js.map