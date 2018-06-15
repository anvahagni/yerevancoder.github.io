webpackJsonp([35783957827783],{

/***/ 383:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collapsible = function (_Component) {
	  _inherits(Collapsible, _Component);
	
	  function Collapsible(props) {
	    _classCallCheck(this, Collapsible);
	
	    // Bind class methods
	    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));
	
	    _this.handleTriggerClick = _this.handleTriggerClick.bind(_this);
	    _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
	    _this.continueOpenCollapsible = _this.continueOpenCollapsible.bind(_this);
	
	    // Defaults the dropdown to be closed
	    if (props.open) {
	      _this.state = {
	        isClosed: false,
	        shouldSwitchAutoOnNextCycle: false,
	        height: 'auto',
	        transition: 'none',
	        hasBeenOpened: true,
	        overflow: props.overflowWhenOpen,
	        inTransition: false
	      };
	    } else {
	      _this.state = {
	        isClosed: true,
	        shouldSwitchAutoOnNextCycle: false,
	        height: 0,
	        transition: 'height ' + props.transitionTime + 'ms ' + props.easing,
	        hasBeenOpened: false,
	        overflow: 'hidden',
	        inTransition: false
	      };
	    }
	    return _this;
	  }
	
	  _createClass(Collapsible, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;
	
	      if (this.state.shouldOpenOnNextCycle) {
	        this.continueOpenCollapsible();
	      }
	
	      if (prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true) {
	        window.setTimeout(function () {
	          // Set small timeout to ensure a true re-render
	          _this2.setState({
	            height: 0,
	            overflow: 'hidden',
	            isClosed: true,
	            shouldSwitchAutoOnNextCycle: false
	          });
	        }, 50);
	      }
	
	      // If there has been a change in the open prop (controlled by accordion)
	      if (prevProps.open !== this.props.open) {
	        if (this.props.open === true) {
	          this.openCollapsible();
	          this.props.onOpening();
	        } else {
	          this.closeCollapsible();
	          this.props.onClosing();
	        }
	      }
	    }
	  }, {
	    key: 'closeCollapsible',
	    value: function closeCollapsible() {
	      this.setState({
	        shouldSwitchAutoOnNextCycle: true,
	        height: this.refs.inner.offsetHeight,
	        transition: 'height ' + (this.props.transitionCloseTime ? this.props.transitionCloseTime : this.props.transitionTime) + 'ms ' + this.props.easing,
	        inTransition: true
	      });
	    }
	  }, {
	    key: 'openCollapsible',
	    value: function openCollapsible() {
	      this.setState({
	        inTransition: true,
	        shouldOpenOnNextCycle: true
	      });
	    }
	  }, {
	    key: 'continueOpenCollapsible',
	    value: function continueOpenCollapsible() {
	      this.setState({
	        height: this.refs.inner.offsetHeight,
	        transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
	        isClosed: false,
	        hasBeenOpened: true,
	        inTransition: true,
	        shouldOpenOnNextCycle: false
	      });
	    }
	  }, {
	    key: 'handleTriggerClick',
	    value: function handleTriggerClick(event) {
	      event.preventDefault();
	
	      if (this.props.triggerDisabled) {
	        return;
	      }
	
	      if (this.props.handleTriggerClick) {
	        this.props.handleTriggerClick(this.props.accordionPosition);
	      } else {
	        if (this.state.isClosed === true) {
	          this.openCollapsible();
	          this.props.onOpening();
	        } else {
	          this.closeCollapsible();
	          this.props.onClosing();
	        }
	      }
	    }
	  }, {
	    key: 'renderNonClickableTriggerElement',
	    value: function renderNonClickableTriggerElement() {
	      if (this.props.triggerSibling && typeof this.props.triggerSibling === 'string') {
	        return _react2.default.createElement(
	          'span',
	          { className: this.props.classParentString + '__trigger-sibling' },
	          this.props.triggerSibling
	        );
	      } else if (this.props.triggerSibling) {
	        return _react2.default.createElement(this.props.triggerSibling, null);
	      }
	
	      return null;
	    }
	  }, {
	    key: 'handleTransitionEnd',
	    value: function handleTransitionEnd() {
	      // Switch to height auto to make the container responsive
	      if (!this.state.isClosed) {
	        this.setState({ height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false });
	        this.props.onOpen();
	      } else {
	        this.setState({ inTransition: false });
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var dropdownStyle = {
	        height: this.state.height,
	        WebkitTransition: this.state.transition,
	        msTransition: this.state.transition,
	        transition: this.state.transition,
	        overflow: this.state.overflow
	      };
	
	      var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
	      var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';
	
	      //If user wants different text when tray is open
	      var trigger = this.state.isClosed === false && this.props.triggerWhenOpen !== undefined ? this.props.triggerWhenOpen : this.props.trigger;
	
	      // If user wants a trigger wrapping element different than 'span'
	      var TriggerElement = this.props.triggerTagName;
	
	      // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
	      var children = this.props.lazyRender && !this.state.hasBeenOpened && this.state.isClosed && !this.state.inTransition ? null : this.props.children;
	
	      // Construct CSS classes strings
	      var triggerClassString = this.props.classParentString + '__trigger ' + openClass + ' ' + disabledClass + ' ' + (this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName);
	      var parentClassString = this.props.classParentString + ' ' + (this.state.isClosed ? this.props.className : this.props.openedClassName);
	      var outerClassString = this.props.classParentString + '__contentOuter ' + this.props.contentOuterClassName;
	      var innerClassString = this.props.classParentString + '__contentInner ' + this.props.contentInnerClassName;
	
	      return _react2.default.createElement(
	        'div',
	        { className: parentClassString.trim() },
	        _react2.default.createElement(
	          TriggerElement,
	          {
	            className: triggerClassString.trim(),
	            onClick: this.handleTriggerClick,
	            style: this.props.triggerStyle && this.props.triggerStyle,
	            onKeyPress: function onKeyPress(event) {
	              var key = event.key;
	
	              if (key === ' ' || key === 'Enter') {
	                _this3.handleTriggerClick(event);
	              }
	            },
	            tabIndex: this.props.tabIndex && this.props.tabIndex
	          },
	          trigger
	        ),
	        this.renderNonClickableTriggerElement(),
	        _react2.default.createElement(
	          'div',
	          {
	            className: outerClassString.trim(),
	            ref: 'outer',
	            style: dropdownStyle,
	            onTransitionEnd: this.handleTransitionEnd
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              className: innerClassString.trim(),
	              ref: 'inner'
	            },
	            children
	          )
	        )
	      );
	    }
	  }]);
	
	  return Collapsible;
	}(_react.Component);
	
	Collapsible.propTypes = {
	  transitionTime: _propTypes2.default.number,
	  transitionCloseTime: _propTypes2.default.number,
	  triggerTagName: _propTypes2.default.string,
	  easing: _propTypes2.default.string,
	  open: _propTypes2.default.bool,
	  classParentString: _propTypes2.default.string,
	  openedClassName: _propTypes2.default.string,
	  triggerStyle: _propTypes2.default.object,
	  triggerClassName: _propTypes2.default.string,
	  triggerOpenedClassName: _propTypes2.default.string,
	  contentOuterClassName: _propTypes2.default.string,
	  contentInnerClassName: _propTypes2.default.string,
	  accordionPosition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  handleTriggerClick: _propTypes2.default.func,
	  onOpen: _propTypes2.default.func,
	  onClose: _propTypes2.default.func,
	  onOpening: _propTypes2.default.func,
	  onClosing: _propTypes2.default.func,
	  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  triggerWhenOpen: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  triggerDisabled: _propTypes2.default.bool,
	  lazyRender: _propTypes2.default.bool,
	  overflowWhenOpen: _propTypes2.default.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
	  triggerSibling: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
	  tabIndex: _propTypes2.default.number
	};
	
	Collapsible.defaultProps = {
	  transitionTime: 400,
	  transitionCloseTime: null,
	  triggerTagName: 'span',
	  easing: 'linear',
	  open: false,
	  classParentString: 'Collapsible',
	  triggerDisabled: false,
	  lazyRender: false,
	  overflowWhenOpen: 'hidden',
	  openedClassName: '',
	  triggerStyle: null,
	  triggerClassName: '',
	  triggerOpenedClassName: '',
	  contentOuterClassName: '',
	  contentInnerClassName: '',
	  className: '',
	  triggerSibling: null,
	  onOpen: function onOpen() {},
	  onClose: function onClose() {},
	  onOpening: function onOpening() {},
	  onClosing: function onClosing() {},
	  tabIndex: null
	};
	
	exports.default = Collapsible;
	


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(47);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _blogCardBannerModule = __webpack_require__(379);
	
	var _blogCardBannerModule2 = _interopRequireDefault(_blogCardBannerModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var node = _ref.node;
	  var _node$frontmatter = node.frontmatter,
	      title = _node$frontmatter.title,
	      tags = _node$frontmatter.tags,
	      author = _node$frontmatter.author,
	      date = _node$frontmatter.date;
	
	  return _react2.default.createElement(
	    'div',
	    { key: node.fields.slug, className: _blogCardBannerModule2.default.BlogEntryCard },
	    _react2.default.createElement(
	      'h3',
	      { className: _blogCardBannerModule2.default.BlogEntryCard__Banner },
	      _react2.default.createElement(
	        _gatsbyLink2.default,
	        { to: node.fields.slug },
	        title
	      )
	    ),
	    _react2.default.createElement(
	      'small',
	      { className: _blogCardBannerModule2.default.BlogEntryCard__Byline },
	      date,
	      ' | ',
	      node.wordCount.words,
	      ' words | ',
	      node.timeToRead,
	      ' ',
	      node.timeToRead > 1 ? "minutes" : "minute",
	      ' to read | ',
	      author,
	      ' |',
	      ' ',
	      tags
	    ),
	    _react2.default.createElement('p', {
	      className: _blogCardBannerModule2.default.BlogEntryCard__Excerpt,
	      dangerouslySetInnerHTML: { __html: node.excerpt }
	    })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"BlogEntryCard":"src-components----blog-card-banner-module---BlogEntryCard---17jmB","BlogEntryCard__Byline":"src-components----blog-card-banner-module---BlogEntryCard__Byline---3lXAJ","BlogEntryCard__Excerpt":"src-components----blog-card-banner-module---BlogEntryCard__Excerpt---1N1_y","BlogEntryCard__Banner":"src-components----blog-card-banner-module---BlogEntryCard__Banner---1c5PR"};

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	  var known_tags = _ref.known_tags,
	      filtered_tags = _ref.filtered_tags,
	      on_checkbox_toggle = _ref.on_checkbox_toggle,
	      clear_all = _ref.clear_all;
	
	  var copy = [].concat(known_tags);
	  copy.sort();
	  var input_pairs = copy.map(function (name) {
	    return _react2.default.createElement(
	      'span',
	      { key: '' + Math.random(), className: 'PlainFlexRow FilterControl__FilterRow' },
	      _react2.default.createElement('input', {
	        type: 'checkbox',
	        onChange: function onChange(event) {
	          return on_checkbox_toggle({ name: name, checked: event.target.checked });
	        },
	        checked: filtered_tags.has(name)
	      }),
	      _react2.default.createElement(
	        'label',
	        { className: 'FilterControl__FilterLabel' },
	        name
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'FilterControl' },
	      input_pairs
	    ),
	    _react2.default.createElement('input', {
	      className: 'SubmitInput FilterControl__ClearAllButton',
	      type: 'button',
	      onClick: clear_all,
	      value: 'Clear all filters'
	    })
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	__webpack_require__(383);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(47);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _reactCollapsible = __webpack_require__(524);
	
	var _reactCollapsible2 = _interopRequireDefault(_reactCollapsible);
	
	var _blogCardBanner = __webpack_require__(265);
	
	var _blogCardBanner2 = _interopRequireDefault(_blogCardBanner);
	
	var _filterControl = __webpack_require__(266);
	
	var _filterControl2 = _interopRequireDefault(_filterControl);
	
	var _constants = __webpack_require__(4);
	
	var _indexModule = __webpack_require__(381);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import 'prismjs/themes/prism-solarizedlight.css';
	
	var TRIGGER = _react2.default.createElement(
	  'span',
	  { className: _indexModule2.default.FilterControl__TriggerMessage },
	  'Filter by topic tags',
	  _react2.default.createElement('span', {
	    'data-balloon': 'Click to toggle filter tags',
	    'data-ballon-pos': 'right',
	    className: _indexModule2.default.FilterControl__TriggerMessageTooltip
	  })
	);
	
	var BlogIndex = function (_React$Component) {
	  _inherits(BlogIndex, _React$Component);
	
	  function BlogIndex(p) {
	    _classCallCheck(this, BlogIndex);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, p));
	
	    _this.on_checkbox_toggle = function (_ref) {
	      var name = _ref.name,
	          checked = _ref.checked;
	      var filtered_tags = _this.state.filtered_tags;
	
	      if (checked) filtered_tags.add(name);else filtered_tags.delete(name);
	      _this.setState(function () {
	        return { filtered_tags: filtered_tags };
	      });
	    };
	
	    _this.clear_all = function () {
	      return _this.setState(function () {
	        return { filtered_tags: new Set() };
	      });
	    };
	
	    var edges = _this.props.data.allMarkdownRemark.edges;
	
	    var names_set = new Set();
	    edges.forEach(function (_ref2) {
	      var node = _ref2.node;
	
	      node.frontmatter.tags.split(',').map(function (s) {
	        return s.toLowerCase().trim();
	      }).forEach(function (s) {
	        return names_set.add(s);
	      });
	    });
	    _this.state = { filtered_tags: new Set(), known_tags: Array.from(names_set.values()) };
	    return _this;
	  }
	
	  BlogIndex.prototype.make_posts = function make_posts() {
	    var data = this.props.data;
	    var filtered_tags = this.state.filtered_tags;
	
	    var posts = data.allMarkdownRemark.edges;
	    var post_banners = [];
	    if (filtered_tags.size === 0) {
	      post_banners = posts.map(function (_ref3) {
	        var node = _ref3.node;
	        return _react2.default.createElement(_blogCardBanner2.default, { key: node.frontmatter.author + '/' + node.frontmatter.title, node: node });
	      });
	    } else {
	      for (var _iterator = posts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref4;
	
	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref4 = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref4 = _i.value;
	        }
	
	        var post = _ref4;
	
	        var post_tags = new Set(post.node.frontmatter.tags.split(',').map(function (s) {
	          return s.toLowerCase().trim();
	        }));
	        var intersection = false;
	        for (var _iterator2 = post_tags, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	          var _ref5;
	
	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref5 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref5 = _i2.value;
	          }
	
	          var tag = _ref5;
	
	          if (filtered_tags.has(tag)) {
	            intersection = true;
	            break;
	          }
	        }
	        if (intersection) {
	          var node = post.node;
	
	          post_banners.push(_react2.default.createElement(_blogCardBanner2.default, {
	            key: node.frontmatter.author + '/' + node.frontmatter.title,
	            node: node
	          }));
	        }
	      }
	    }
	    return post_banners;
	  };
	
	  BlogIndex.prototype.render = function render() {
	    var post_banners = this.make_posts();
	    var classes = 'AvailableForWorkContainer__PageBanner AlignSelfFlexStart LeftMinorOneHalfRemPadding';
	    return _react2.default.createElement(
	      'div',
	      { className: _indexModule2.default.BlogTable },
	      _constants.SPACER_10_H,
	      _react2.default.createElement(
	        'h4',
	        { className: classes },
	        post_banners.length + ' great posts to read'
	      ),
	      _constants.SPACER_10_H,
	      _react2.default.createElement(
	        'div',
	        { className: _indexModule2.default.FilterControlWrapper + ' LeftMinorOneHalfRemMargin' },
	        _react2.default.createElement(
	          _reactCollapsible2.default,
	          { trigger: TRIGGER },
	          _react2.default.createElement(_filterControl2.default, {
	            known_tags: this.state.known_tags,
	            on_checkbox_toggle: this.on_checkbox_toggle,
	            filtered_tags: this.state.filtered_tags,
	            clear_all: this.clear_all
	          })
	        )
	      ),
	      post_banners
	    );
	  };
	
	  return BlogIndex;
	}(_react2.default.Component);
	
	BlogIndex.displayName = 'BlogIndex';
	exports.default = BlogIndex;
	var pageQuery = exports.pageQuery = '** extracted graphql fragment **';

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"FilterControl__TriggerMessage":"src-pages----index-module---FilterControl__TriggerMessage---2puku","BlogTable":"src-pages----index-module---BlogTable---2Vtj2","FilterControlWrapper":"src-pages----index-module---FilterControlWrapper---32wjO","FilterControl__TriggerMessageTooltip":"src-pages----index-module---FilterControl__TriggerMessageTooltip---3rcV8"};

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-5a8be8d0474a78074ac9.js.map