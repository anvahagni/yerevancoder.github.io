webpackJsonp([214858301499405],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpinkit = __webpack_require__(15);
	
	var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);
	
	var _db = __webpack_require__(24);
	
	var _jobPost = __webpack_require__(59);
	
	var _jobPost2 = _interopRequireDefault(_jobPost);
	
	var _constants = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var JOB_WRAPPER_CLASSES = 'PlainFlexColumn PlainFlexCentered FifteenPaddingLeft MobileRemoveFifteenPaddingLeft';
	
	var DedicatedNewsPost = function (_React$Component) {
	  _inherits(DedicatedNewsPost, _React$Component);
	
	  function DedicatedNewsPost() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DedicatedNewsPost);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { news_posting: null }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  DedicatedNewsPost.prototype.componentDidMount = function componentDidMount() {
	    var _props$location$pathn = this.props.location.pathname.split('/'),
	        posting_id = _props$location$pathn[3];
	    // hiring_table_posts_ref
	    //   .child(posting_id)
	    //   .once('value')
	    //   .then(snap_shot => {
	    //     const job = snap_shot.val();
	    //     // If data is null, then you got a gibberish, nonexistent job
	    //     console.log({ data: job });
	    //     if (job !== null) {
	    //       this.setState(() => ({ job }));
	    //     }
	    //   })
	    //   .catch(err => {
	    //     // Error can't happen
	    //   });
	
	  };
	
	  DedicatedNewsPost.prototype.render = function render() {
	    var content = null;
	    if (this.state.news_posting === null) {
	      content = _react2.default.createElement(_reactSpinkit2.default, { fadeIn: 'quarter', name: 'ball-scale-ripple-multiple' });
	    } else {
	      content = _react2.default.createElement(_jobPost2.default, this.state.job);
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: JOB_WRAPPER_CLASSES },
	      _react2.default.createElement(
	        'p',
	        null,
	        'hi'
	      )
	    );
	  };
	
	  return DedicatedNewsPost;
	}(_react2.default.Component);
	
	DedicatedNewsPost.displayName = 'DedicatedNewsPost';
	exports.default = DedicatedNewsPost;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-news-posting-index-js-62e4c1c7d9264022b7cd.js.map