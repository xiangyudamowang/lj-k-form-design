((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[24],{

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

/***/ "84ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("11ce");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("32d5");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("f33e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _vueTypes = __webpack_require__("098e");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _vcCheckbox = __webpack_require__("a5c6");

var _vcCheckbox2 = _interopRequireDefault(_vcCheckbox);

var _classnames = __webpack_require__("051c");

var _classnames2 = _interopRequireDefault(_classnames);

var _propsUtil = __webpack_require__("7e3d");

var _configConsumerProps = __webpack_require__("4444");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

exports['default'] = {
  name: 'ARadio',
  model: {
    prop: 'checked'
  },
  props: {
    prefixCls: _vueTypes2['default'].string,
    defaultChecked: Boolean,
    checked: { type: Boolean, 'default': undefined },
    disabled: Boolean,
    isGroup: Boolean,
    value: _vueTypes2['default'].any,
    name: String,
    id: String,
    autoFocus: Boolean,
    type: _vueTypes2['default'].string.def('radio')
  },
  inject: {
    radioGroupContext: { 'default': undefined },
    configProvider: { 'default': function _default() {
        return _configConsumerProps.ConfigConsumerProps;
      } }
  },
  methods: {
    focus: function focus() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur() {
      this.$refs.vcCheckbox.blur();
    },
    handleChange: function handleChange(event) {
      var targetChecked = event.target.checked;
      this.$emit('input', targetChecked);
      this.$emit('change', event);
    },
    onChange: function onChange(e) {
      this.$emit('change', e);
      if (this.radioGroupContext && this.radioGroupContext.onRadioChange) {
        this.radioGroupContext.onRadioChange(e);
      }
    }
  },

  render: function render() {
    var _classNames;

    var h = arguments[0];
    var $slots = this.$slots,
        radioGroup = this.radioGroupContext;

    var props = (0, _propsUtil.getOptionProps)(this);
    var children = $slots['default'];

    var _getListeners = (0, _propsUtil.getListeners)(this),
        _getListeners$mouseen = _getListeners.mouseenter,
        mouseenter = _getListeners$mouseen === undefined ? noop : _getListeners$mouseen,
        _getListeners$mousele = _getListeners.mouseleave,
        mouseleave = _getListeners$mousele === undefined ? noop : _getListeners$mousele,
        restListeners = (0, _objectWithoutProperties3['default'])(_getListeners, ['mouseenter', 'mouseleave']);

    var customizePrefixCls = props.prefixCls,
        restProps = (0, _objectWithoutProperties3['default'])(props, ['prefixCls']);

    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);

    var radioProps = {
      props: (0, _extends3['default'])({}, restProps, { prefixCls: prefixCls }),
      on: restListeners,
      attrs: (0, _propsUtil.getAttrs)(this)
    };

    if (radioGroup) {
      radioProps.props.name = radioGroup.name;
      radioProps.on.change = this.onChange;
      radioProps.props.checked = props.value === radioGroup.stateValue;
      radioProps.props.disabled = props.disabled || radioGroup.disabled;
    } else {
      radioProps.on.change = this.handleChange;
    }
    var wrapperClassString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-checked', radioProps.props.checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-wrapper-disabled', radioProps.props.disabled), _classNames));

    return h(
      'label',
      { 'class': wrapperClassString, on: {
          'mouseenter': mouseenter,
          'mouseleave': mouseleave
        }
      },
      [h(_vcCheckbox2['default'], (0, _babelHelperVueJsxMergeProps2['default'])([radioProps, { ref: 'vcCheckbox' }])), children !== undefined ? h('span', [children]) : null]
    );
  }
};

/***/ }),

/***/ "955d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelHelperVueJsxMergeProps = __webpack_require__("11ce");

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _defineProperty2 = __webpack_require__("32d5");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("f33e");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

var _vueTypes = __webpack_require__("098e");

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _classnames = __webpack_require__("051c");

var _classnames2 = _interopRequireDefault(_classnames);

var _propsUtil = __webpack_require__("7e3d");

var _BaseMixin = __webpack_require__("0a40");

var _BaseMixin2 = _interopRequireDefault(_BaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  name: 'Checkbox',
  mixins: [_BaseMixin2['default']],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: (0, _propsUtil.initDefaultProps)({
    prefixCls: _vueTypes2['default'].string,
    name: _vueTypes2['default'].string,
    id: _vueTypes2['default'].string,
    type: _vueTypes2['default'].string,
    defaultChecked: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].bool]),
    checked: _vueTypes2['default'].oneOfType([_vueTypes2['default'].number, _vueTypes2['default'].bool]),
    disabled: _vueTypes2['default'].bool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabIndex: _vueTypes2['default'].oneOfType([_vueTypes2['default'].string, _vueTypes2['default'].number]),
    readOnly: _vueTypes2['default'].bool,
    autoFocus: _vueTypes2['default'].bool,
    value: _vueTypes2['default'].any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = (0, _propsUtil.hasProp)(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },

  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.autoFocus) {
        _this.$refs.input && _this.$refs.input.focus();
      }
    });
  },

  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = (0, _propsUtil.getOptionProps)(this);
      if (props.disabled) {
        return;
      }
      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }
      this.$forceUpdate(); // change前，维持现有状态
      e.shiftKey = this.eventShiftKey;
      this.__emit('change', {
        target: (0, _extends3['default'])({}, props, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },

        nativeEvent: e
      });
      this.eventShiftKey = false;
      // fix https://github.com/vueComponent/ant-design-vue/issues/3047
      if ('checked' in props) {
        this.$refs.input.checked = props.checked;
      }
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
      // onChange没能获取到shiftKey，使用onClick hack
      this.eventShiftKey = e.shiftKey;
    }
  },

  render: function render() {
    var _classNames;

    var h = arguments[0];

    var _getOptionProps = (0, _propsUtil.getOptionProps)(this),
        prefixCls = _getOptionProps.prefixCls,
        name = _getOptionProps.name,
        id = _getOptionProps.id,
        type = _getOptionProps.type,
        disabled = _getOptionProps.disabled,
        readOnly = _getOptionProps.readOnly,
        tabIndex = _getOptionProps.tabIndex,
        autoFocus = _getOptionProps.autoFocus,
        value = _getOptionProps.value,
        others = (0, _objectWithoutProperties3['default'])(_getOptionProps, ['prefixCls', 'name', 'id', 'type', 'disabled', 'readOnly', 'tabIndex', 'autoFocus', 'value']);

    var attrs = (0, _propsUtil.getAttrs)(this);
    var globalProps = Object.keys((0, _extends3['default'])({}, others, attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    var sChecked = this.sChecked;

    var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-checked', sChecked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));

    return h(
      'span',
      { 'class': classString },
      [h('input', (0, _babelHelperVueJsxMergeProps2['default'])([{
        attrs: {
          name: name,
          id: id,
          type: type,
          readOnly: readOnly,
          disabled: disabled,
          tabIndex: tabIndex,

          autoFocus: autoFocus
        },
        'class': prefixCls + '-input',
        domProps: {
          'checked': !!sChecked,
          'value': value
        },
        ref: 'input'
      }, {
        attrs: globalProps,
        on: (0, _extends3['default'])({}, (0, _propsUtil.getListeners)(this), {
          change: this.handleChange,
          click: this.onClick
        })
      }])), h('span', { 'class': prefixCls + '-inner' })]
    );
  }
};

/***/ }),

/***/ "a5c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _src = __webpack_require__("f7ee");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_src)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ "f7ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__("955d");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Checkbox2['default'];

/***/ })

}]);