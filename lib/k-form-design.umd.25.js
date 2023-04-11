((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[25],{

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

/***/ "5f08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__("b024");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__("e590");

var _extends3 = _interopRequireDefault(_extends2);

exports.cloneVNode = cloneVNode;
exports.cloneVNodes = cloneVNodes;
exports.cloneElement = cloneElement;

var _propsUtil = __webpack_require__("7e3d");

var _classnames = __webpack_require__("051c");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var data = vnode.data;

  var listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = (0, _extends3['default'])({}, componentOptions.listeners);
  }

  var on = {};
  if (data && data.on) {
    on = (0, _extends3['default'])({}, data.on);
  }

  var cloned = new vnode.constructor(vnode.tag, data ? (0, _extends3['default'])({}, data, { on: on }) : data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions ? (0, _extends3['default'])({}, componentOptions, { listeners: listeners }) : componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned;
}

function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}

function cloneElement(n) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var deep = arguments[2];

  var ele = n;
  if (Array.isArray(n)) {
    ele = (0, _propsUtil.filterEmpty)(n)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, deep);
  // // 函数式组件不支持clone  https://github.com/vueComponent/ant-design-vue/pull/1947
  // warning(
  //   !(node.fnOptions && node.fnOptions.functional),
  //   `can not use cloneElement for functional component (${node.fnOptions && node.fnOptions.name})`,
  // );
  var _nodeProps$props = nodeProps.props,
      props = _nodeProps$props === undefined ? {} : _nodeProps$props,
      key = nodeProps.key,
      _nodeProps$on = nodeProps.on,
      on = _nodeProps$on === undefined ? {} : _nodeProps$on,
      _nodeProps$nativeOn = nodeProps.nativeOn,
      nativeOn = _nodeProps$nativeOn === undefined ? {} : _nodeProps$nativeOn,
      children = nodeProps.children,
      _nodeProps$directives = nodeProps.directives,
      directives = _nodeProps$directives === undefined ? [] : _nodeProps$directives;

  var data = node.data || {};
  var cls = {};
  var style = {};
  var _nodeProps$attrs = nodeProps.attrs,
      attrs = _nodeProps$attrs === undefined ? {} : _nodeProps$attrs,
      ref = nodeProps.ref,
      _nodeProps$domProps = nodeProps.domProps,
      domProps = _nodeProps$domProps === undefined ? {} : _nodeProps$domProps,
      _nodeProps$style = nodeProps.style,
      tempStyle = _nodeProps$style === undefined ? {} : _nodeProps$style,
      _nodeProps$class = nodeProps['class'],
      tempCls = _nodeProps$class === undefined ? {} : _nodeProps$class,
      _nodeProps$scopedSlot = nodeProps.scopedSlots,
      scopedSlots = _nodeProps$scopedSlot === undefined ? {} : _nodeProps$scopedSlot;


  if (typeof data.style === 'string') {
    style = (0, _propsUtil.parseStyleText)(data.style);
  } else {
    style = (0, _extends3['default'])({}, data.style, style);
  }
  if (typeof tempStyle === 'string') {
    style = (0, _extends3['default'])({}, style, (0, _propsUtil.parseStyleText)(style));
  } else {
    style = (0, _extends3['default'])({}, style, tempStyle);
  }

  if (typeof data['class'] === 'string' && data['class'].trim() !== '') {
    data['class'].split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(data['class'])) {
    (0, _classnames2['default'])(data['class']).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends3['default'])({}, data['class'], cls);
  }
  if (typeof tempCls === 'string' && tempCls.trim() !== '') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0, _extends3['default'])({}, cls, tempCls);
  }
  node.data = (0, _extends3['default'])({}, data, {
    style: style,
    attrs: (0, _extends3['default'])({}, data.attrs, attrs),
    'class': cls,
    domProps: (0, _extends3['default'])({}, data.domProps, domProps),
    scopedSlots: (0, _extends3['default'])({}, data.scopedSlots, scopedSlots),
    directives: [].concat((0, _toConsumableArray3['default'])(data.directives || []), (0, _toConsumableArray3['default'])(directives))
  });

  if (node.componentOptions) {
    node.componentOptions.propsData = node.componentOptions.propsData || {};
    node.componentOptions.listeners = node.componentOptions.listeners || {};
    node.componentOptions.propsData = (0, _extends3['default'])({}, node.componentOptions.propsData, props);
    node.componentOptions.listeners = (0, _extends3['default'])({}, node.componentOptions.listeners, on);
    if (children) {
      node.componentOptions.children = children;
    }
  } else {
    if (children) {
      node.children = children;
    }
    node.data.on = (0, _extends3['default'])({}, node.data.on || {}, on);
  }
  node.data.on = (0, _extends3['default'])({}, node.data.on || {}, nativeOn);

  if (key !== undefined) {
    node.key = key;
    node.data.key = key;
  }
  if (typeof ref === 'string') {
    node.data.ref = ref;
  }
  return node;
}

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

/***/ })

}]);