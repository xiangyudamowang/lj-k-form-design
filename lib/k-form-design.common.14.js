((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[14],{

/***/ "0252":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch = __webpack_require__("cbe3");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Switch2['default']; // base rc-switch 1.9.0

/***/ }),

/***/ "0a40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("b024");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _propsUtil = __webpack_require__("7e3d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];

      var newState = typeof state === 'function' ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps((0, _propsUtil.getOptionProps)(this), (0, _extends3['default'])({}, this.$data, newState));
        if (s === null) {
          return;
        } else {
          newState = (0, _extends3['default'])({}, newState, s || {});
        }
      }
      (0, _extends3['default'])(this.$data, newState);
      this.$forceUpdate();
      this.$nextTick(function () {
        callback && callback();
      });
    },
    __emit: function __emit() {
      // 直接调用listeners，底层组件不需要vueTool记录events
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      var event = this.$listeners[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            event[i].apply(event, (0, _toConsumableArray3['default'])(args.slice(1)));
          }
        } else {
          event.apply(undefined, (0, _toConsumableArray3['default'])(args.slice(1)));
        }
      }
    }
  }
};

/***/ }),

/***/ "0f55":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTwoToneColor = setTwoToneColor;
exports.getTwoToneColor = getTwoToneColor;

var _iconsVue = __webpack_require__("c41d");

var _iconsVue2 = _interopRequireDefault(_iconsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function setTwoToneColor(primaryColor) {
  return _iconsVue2['default'].setTwoToneColors({
    primaryColor: primaryColor
  });
}

function getTwoToneColor() {
  var colors = _iconsVue2['default'].getTwoToneColors();
  return colors.primaryColor;
}

/***/ }),

/***/ "3537":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("11ce");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("32d5");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__("b024");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classnames = __webpack_require__("051c");

var _classnames2 = _interopRequireDefault(_classnames);

var _dist = __webpack_require__("2247");

var allIcons = _interopRequireWildcard(_dist);

var _iconsVue = __webpack_require__("c41d");

var _iconsVue2 = _interopRequireDefault(_iconsVue);

var _vueTypes = __webpack_require__("098e");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _IconFont = __webpack_require__("a230");

var _IconFont2 = _interopRequireDefault(_IconFont);

var _utils = __webpack_require__("5129");

var _warning = __webpack_require__("36ad");

var _warning2 = _interopRequireDefault(_warning);

var _LocaleReceiver = __webpack_require__("2fbd");

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _twoTonePrimaryColor = __webpack_require__("0f55");

var _propsUtil = __webpack_require__("7e3d");

var _base = __webpack_require__("4385");

var _base2 = _interopRequireDefault(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Initial setting

// https://github.com/vueComponent/ant-design-vue/issues/2745
_iconsVue2['default'].add.apply(_iconsVue2['default'], (0, _toConsumableArray3['default'])(Object.keys(allIcons).filter(function (key) {
  return key !== 'default';
}).map(function (key) {
  return allIcons[key];
})));
(0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
var defaultTheme = 'outlined';
var dangerousTheme = void 0;

function renderIcon(h, locale, context) {
  var _classNames;

  var props = context.$props,
      $slots = context.$slots;

  var listeners = (0, _propsUtil.getListeners)(context);
  var type = props.type,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      theme = props.theme,
      twoToneColor = props.twoToneColor,
      rotate = props.rotate,
      tabIndex = props.tabIndex;

  var children = (0, _propsUtil.filterEmpty)($slots['default']);
  children = children.length === 0 ? undefined : children;
  (0, _warning2['default'])(Boolean(type || Component || children), 'Icon', 'Icon should have `type` prop or `component` prop or `children`.');

  var classString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, 'anticon', true), (0, _defineProperty3['default'])(_classNames, 'anticon-' + type, !!type), _classNames));

  var svgClassString = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, 'anticon-spin', !!spin || type === 'loading'));

  var svgStyle = rotate ? {
    msTransform: 'rotate(' + rotate + 'deg)',
    transform: 'rotate(' + rotate + 'deg)'
  } : undefined;

  var innerSvgProps = {
    attrs: (0, _extends3['default'])({}, _utils.svgBaseProps, {
      viewBox: viewBox
    }),
    'class': svgClassString,
    style: svgStyle
  };
  if (!viewBox) {
    delete innerSvgProps.attrs.viewBox;
  }

  var renderInnerNode = function renderInnerNode() {
    // component > children > type
    if (Component) {
      return h(
        Component,
        innerSvgProps,
        [children]
      );
    }
    if (children) {
      (0, _warning2['default'])(Boolean(viewBox) || children.length === 1 && children[0].tag === 'use', 'Icon', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      var _innerSvgProps = {
        attrs: (0, _extends3['default'])({}, _utils.svgBaseProps),
        'class': svgClassString,
        style: svgStyle
      };
      return h(
        'svg',
        (0, _babelHelperVueJsxMergeProps2['default'])([_innerSvgProps, {
          attrs: { viewBox: viewBox }
        }]),
        [children]
      );
    }

    if (typeof type === 'string') {
      var computedType = type;
      if (theme) {
        var themeInName = (0, _utils.getThemeFromTypeName)(type);
        (0, _warning2['default'])(!themeInName || theme === themeInName, 'Icon', 'The icon name \'' + type + '\' already specify a theme \'' + themeInName + '\',' + (' the \'theme\' prop \'' + theme + '\' will be ignored.'));
      }
      computedType = (0, _utils.withThemeSuffix)((0, _utils.removeTypeTheme)((0, _utils.alias)(computedType)), dangerousTheme || theme || defaultTheme);

      return h(_iconsVue2['default'], {
        attrs: {
          focusable: 'false',

          type: computedType,
          primaryColor: twoToneColor
        },
        'class': svgClassString, style: svgStyle
      });
    }
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && 'click' in listeners) {
    iconTabIndex = -1;
  }
  // functional component not support nativeOn，https://github.com/vuejs/vue/issues/7526
  var iProps = {
    attrs: {
      'aria-label': type && locale.icon + ': ' + type,
      tabIndex: iconTabIndex
    },
    on: listeners,
    'class': classString,
    staticClass: ''
  };
  return h(
    'i',
    iProps,
    [renderInnerNode()]
  );
}

var Icon = {
  name: 'AIcon',
  props: {
    tabIndex: _vueTypes2['default'].number,
    type: _vueTypes2['default'].string,
    component: _vueTypes2['default'].any,
    viewBox: _vueTypes2['default'].any,
    spin: _vueTypes2['default'].bool.def(false),
    rotate: _vueTypes2['default'].number,
    theme: _vueTypes2['default'].oneOf(['filled', 'outlined', 'twoTone']),
    twoToneColor: _vueTypes2['default'].string,
    role: _vueTypes2['default'].string
  },
  render: function render(h) {
    var _this = this;

    return h(_LocaleReceiver2['default'], {
      attrs: {
        componentName: 'Icon'
      },
      scopedSlots: { 'default': function _default(locale) {
          return renderIcon(h, locale, _this);
        } }
    });
  }
};

Icon.createFromIconfontCN = _IconFont2['default'];
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;

/* istanbul ignore next */
Icon.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Icon.name, Icon);
};

exports['default'] = Icon;

/***/ }),

/***/ "36ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetWarned = undefined;

var _warning = __webpack_require__("a024");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.resetWarned = _warning.resetWarned;

exports['default'] = function (valid, component) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  (0, _warning2['default'])(valid, '[antdv: ' + component + '] ' + message);
};

/***/ }),

/***/ "3e99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchPropTypes = undefined;

var _vueTypes = __webpack_require__("098e");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var switchPropTypes = exports.switchPropTypes = {
  prefixCls: _vueTypes2['default'].string,
  disabled: _vueTypes2['default'].bool.def(false),
  checkedChildren: _vueTypes2['default'].any,
  unCheckedChildren: _vueTypes2['default'].any,
  // onChange: PropTypes.func,
  // onMouseUp: PropTypes.func,
  // onClick: PropTypes.func,
  tabIndex: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
  checked: _vueTypes2['default'].bool.def(false),
  defaultChecked: _vueTypes2['default'].bool.def(false),
  autoFocus: _vueTypes2['default'].bool.def(false),
  loadingIcon: _vueTypes2['default'].any
};

/***/ }),

/***/ "5129":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgBaseProps = undefined;
exports.getThemeFromTypeName = getThemeFromTypeName;
exports.removeTypeTheme = removeTypeTheme;
exports.withThemeSuffix = withThemeSuffix;
exports.alias = alias;

var _warning = __webpack_require__("36ad");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = exports.svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};

var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;

function getThemeFromTypeName(type) {
  var result = null;
  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }
  return result;
}

function removeTypeTheme(type) {
  return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
}

function withThemeSuffix(type, theme) {
  var result = type;
  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    (0, _warning2['default'])(false, 'Icon', 'This icon \'' + type + '\' has unknown theme \'' + theme + '\'');
  }
  return result;
}

// For alias or compatibility
function alias(type) {
  var newType = type;
  switch (type) {
    case 'cross':
      newType = 'close';
      break;
    // https://github.com/ant-design/ant-design/issues/13007
    case 'interation':
      newType = 'interaction';
      break;
    // https://github.com/ant-design/ant-design/issues/16810
    case 'canlendar':
      newType = 'calendar';
      break;
    // https://github.com/ant-design/ant-design/issues/17448
    case 'colum-height':
      newType = 'column-height';
      break;
    default:
  }
  (0, _warning2['default'])(newType === type, 'Icon', 'Icon \'' + type + '\' was a typo and is now deprecated, please use \'' + newType + '\' instead.');
  return newType;
}

/***/ }),

/***/ "6ac4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = wrapperRaf;

var _raf = __webpack_require__("6cf6");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var id = 0;
var ids = {};

// Support call raf with delay specified frame
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf2['default'])(internalCallback);
    }
  }

  ids[myId] = (0, _raf2['default'])(internalCallback);

  return myId;
}

wrapperRaf.cancel = function (pid) {
  if (pid === undefined) return;
  _raf2['default'].cancel(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ "a024":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.note = note;
exports.resetWarned = resetWarned;
exports.call = call;
exports.warningOnce = warningOnce;
exports.noteOnce = noteOnce;
/* eslint-disable no-console */
var warned = {};

function warning(valid, message) {
  // Support uglify
  if (false) {}
}

function note(valid, message) {
  // Support uglify
  if (false) {}
}

function resetWarned() {
  warned = {};
}

function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

function warningOnce(valid, message) {
  call(warning, valid, message);
}

function noteOnce(valid, message) {
  call(note, valid, message);
}

exports['default'] = warningOnce;
/* eslint-enable */

/***/ }),

/***/ "a230":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("f33e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports['default'] = create;

var _index = __webpack_require__("3537");

var _index2 = _interopRequireDefault(_index);

var _propsUtil = __webpack_require__("7e3d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var customCache = new Set();

function create(options) {
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  var Iconfont = {
    functional: true,
    name: 'AIconfont',
    props: _index2['default'].props,
    render: function render(h, context) {
      var props = context.props,
          slots = context.slots,
          listeners = context.listeners,
          data = context.data;
      var type = props.type,
          restProps = (0, _objectWithoutProperties3['default'])(props, ['type']);

      var slotsMap = slots();
      var children = slotsMap['default'];
      // component > children > type
      var content = null;
      if (type) {
        content = h('use', { attrs: { 'xlink:href': '#' + type } });
      }
      if (children) {
        content = children;
      }
      var iconProps = (0, _propsUtil.mergeProps)(extraCommonProps, data, { props: restProps, on: listeners });
      return h(
        _index2['default'],
        iconProps,
        [content]
      );
    }
  };
  return Iconfont;
}

/***/ }),

/***/ "af42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;

/***/ }),

/***/ "cbe3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("32d5");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("f33e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _PropTypes = __webpack_require__("3e99");

var _BaseMixin = __webpack_require__("0a40");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

var _propsUtil = __webpack_require__("7e3d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// function noop () {
// }
exports['default'] = {
  name: 'VcSwitch',
  mixins: [_BaseMixin2['default']],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: (0, _extends3['default'])({}, _PropTypes.switchPropTypes, {
    prefixCls: _PropTypes.switchPropTypes.prefixCls.def('rc-switch')
    // onChange: switchPropTypes.onChange.def(noop),
    // onClick: switchPropTypes.onClick.def(noop),
  }),
  data: function data() {
    var checked = false;
    if ((0, _propsUtil.hasProp)(this, 'checked')) {
      checked = !!this.checked;
    } else {
      checked = !!this.defaultChecked;
    }
    return {
      stateChecked: checked
    };
  },

  watch: {
    checked: function checked(val) {
      this.stateChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var autoFocus = _this.autoFocus,
          disabled = _this.disabled;

      if (autoFocus && !disabled) {
        _this.focus();
      }
    });
  },

  methods: {
    setChecked: function setChecked(checked, e) {
      if (this.disabled) {
        return;
      }
      if (!(0, _propsUtil.hasProp)(this, 'checked')) {
        this.stateChecked = checked;
      }
      this.$emit('change', checked, e);
    },
    handleClick: function handleClick(e) {
      var checked = !this.stateChecked;
      this.setChecked(checked, e);
      this.$emit('click', checked, e);
    },
    handleKeyDown: function handleKeyDown(e) {
      if (e.keyCode === 37) {
        // Left
        this.setChecked(false, e);
      } else if (e.keyCode === 39) {
        // Right
        this.setChecked(true, e);
      }
    },
    handleMouseUp: function handleMouseUp(e) {
      if (this.$refs.refSwitchNode) {
        this.$refs.refSwitchNode.blur();
      }
      this.$emit('mouseup', e);
    },
    focus: function focus() {
      this.$refs.refSwitchNode.focus();
    },
    blur: function blur() {
      this.$refs.refSwitchNode.blur();
    }
  },
  render: function render() {
    var _switchClassName;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _getOptionProps.prefixCls,
        disabled = _getOptionProps.disabled,
        loadingIcon = _getOptionProps.loadingIcon,
        tabIndex = _getOptionProps.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'disabled', 'loadingIcon', 'tabIndex']);

    var checked = this.stateChecked;
    var switchClassName = (_switchClassName = {}, (0, _defineProperty3['default'])(_switchClassName, prefixCls, true), (0, _defineProperty3['default'])(_switchClassName, prefixCls + '-checked', checked), (0, _defineProperty3['default'])(_switchClassName, prefixCls + '-disabled', disabled), _switchClassName);
    var spanProps = {
      props: (0, _extends3['default'])({}, restProps),
      on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
        keydown: this.handleKeyDown,
        click: this.handleClick,
        mouseup: this.handleMouseUp
      }),
      attrs: {
        type: 'button',
        role: 'switch',
        'aria-checked': checked,
        disabled: disabled,
        tabIndex: tabIndex
      },
      'class': switchClassName,
      ref: 'refSwitchNode'
    };
    return h(
      'button',
      spanProps,
      [loadingIcon, h(
        'span',
        { 'class': prefixCls + '-inner' },
        [checked ? (0, _propsUtil.getComponentFromProp)(this, 'checkedChildren') : (0, _propsUtil.getComponentFromProp)(this, 'unCheckedChildren')]
      )]
    );
  }
};

/***/ }),

/***/ "e97d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("32d5");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("f33e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vueTypes = __webpack_require__("098e");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _propsUtil = __webpack_require__("7e3d");

var _propsUtil2 = _interopRequireDefault(_propsUtil);

var _vcSwitch = __webpack_require__("0252");

var _vcSwitch2 = _interopRequireDefault(_vcSwitch);

var _wave = __webpack_require__("f808");

var _wave2 = _interopRequireDefault(_wave);

var _icon = __webpack_require__("3537");

var _icon2 = _interopRequireDefault(_icon);

var _configConsumerProps = __webpack_require__("4444");

var _base = __webpack_require__("4385");

var _base2 = _interopRequireDefault(_base);

var _warning = __webpack_require__("36ad");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Switch = {
  name: 'ASwitch',
  __ANT_SWITCH: true,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    prefixCls: _vueTypes2['default'].string,
    // size=default and size=large are the same
    size: _vueTypes2['default'].oneOf(['small', 'default', 'large']),
    disabled: _vueTypes2['default'].bool,
    checkedChildren: _vueTypes2['default'].any,
    unCheckedChildren: _vueTypes2['default'].any,
    tabIndex: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    checked: _vueTypes2['default'].bool,
    defaultChecked: _vueTypes2['default'].bool,
    autoFocus: _vueTypes2['default'].bool,
    loading: _vueTypes2['default'].bool
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  methods: {
    focus: function focus() {
      this.$refs.refSwitchNode.focus();
    },
    blur: function blur() {
      this.$refs.refSwitchNode.blur();
    }
  },
  created: function created() {
    (0, _warning2['default'])((0, _propsUtil2['default'])(this, 'checked') || !(0, _propsUtil2['default'])(this, 'value'), 'Switch', '`value` is not validate prop, do you mean `checked`?');
  },
  render: function render() {
    var _classes;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        customizePrefixCls = _getOptionProps.prefixCls,
        size = _getOptionProps.size,
        loading = _getOptionProps.loading,
        disabled = _getOptionProps.disabled,
        restProps = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'size', 'loading', 'disabled']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('switch', customizePrefixCls);

    var classes = (_classes = {}, (0, _defineProperty3['default'])(_classes, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classes, prefixCls + '-loading', loading), _classes);
    var loadingIcon = loading ? h(_icon2['default'], {
      attrs: { type: 'loading' },
      'class': prefixCls + '-loading-icon' }) : null;
    var switchProps = {
      props: (0, _extends3['default'])({}, restProps, {
        prefixCls: prefixCls,
        loadingIcon: loadingIcon,
        checkedChildren: (0, _propsUtil.getComponentFromProp)(this, 'checkedChildren'),
        unCheckedChildren: (0, _propsUtil.getComponentFromProp)(this, 'unCheckedChildren'),
        disabled: disabled || loading
      }),
      on: (0, _propsUtil.getListeners)(this),
      'class': classes,
      ref: 'refSwitchNode'
    };
    return h(
      _wave2['default'],
      {
        attrs: { insertExtraNode: true }
      },
      [h(_vcSwitch2['default'], switchProps)]
    );
  }
};

/* istanbul ignore next */
Switch.install = function (Vue) {
  Vue.use(_base2['default']);
  Vue.component(Switch.name, Switch);
};

exports['default'] = Switch;

/***/ }),

/***/ "f808":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event = __webpack_require__("af42");

var _Event2 = _interopRequireDefault(_Event);

var _raf = __webpack_require__("6ac4");

var _raf2 = _interopRequireDefault(_raf);

var _configConsumerProps = __webpack_require__("4444");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styleForPesudo = void 0;

// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (false) {}
  return !element || element.offsetParent === null;
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
exports['default'] = {
  name: 'Wave',
  props: ['insertExtraNode'],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var node = _this.$el;
      if (node.nodeType !== 1) {
        return;
      }
      _this.instance = _this.bindAnimationEvent(node);
    });
  },

  inject: {
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.instance) {
      this.instance.cancel();
    }
    if (this.clickWaveTimeoutId) {
      clearTimeout(this.clickWaveTimeoutId);
    }
    this.destroy = true;
  },

  methods: {
    onClick: function onClick(node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;

      this.extraNode = document.createElement('div');
      var extraNode = this.extraNode;
      extraNode.className = 'ant-click-animating-node';
      var attributeName = this.getAttributeName();
      node.removeAttribute(attributeName);
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      styleForPesudo = styleForPesudo || document.createElement('style');
      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (this.csp && this.csp.nonce) {
          styleForPesudo.nonce = this.csp.nonce;
        }
        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = '\n        [ant-click-animating-without-extra-node=\'true\']::after, .ant-click-animating-node {\n          --antd-wave-shadow-color: ' + waveColor + ';\n        }';
        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      _Event2['default'].addStartEventListener(node, this.onTransitionStart);
      _Event2['default'].addEndEventListener(node, this.onTransitionEnd);
    },
    onTransitionStart: function onTransitionStart(e) {
      if (this.destroy) return;

      var node = this.$el;
      if (!e || e.target !== node) {
        return;
      }

      if (!this.animationStart) {
        this.resetEffect(node);
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      this.resetEffect(e.target);
    },
    getAttributeName: function getAttributeName() {
      var insertExtraNode = this.$props.insertExtraNode;

      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    },
    bindAnimationEvent: function bindAnimationEvent(node) {
      var _this2 = this;

      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        _this2.resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this2.clickWaveTimeoutId = window.setTimeout(function () {
          return _this2.onClick(node, waveColor);
        }, 0);
        _raf2['default'].cancel(_this2.animationStartId);
        _this2.animationStart = true;

        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        _this2.animationStartId = (0, _raf2['default'])(function () {
          _this2.animationStart = false;
        }, 10);
      };
      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    },
    resetEffect: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.$props.insertExtraNode;

      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      _Event2['default'].removeStartEventListener(node, this.onTransitionStart);
      _Event2['default'].removeEndEventListener(node, this.onTransitionEnd);
    }
  },

  render: function render() {
    if (this.configProvider.csp) {
      this.csp = this.configProvider.csp;
    }
    return this.$slots['default'] && this.$slots['default'][0];
  }
};

/***/ })

}]);