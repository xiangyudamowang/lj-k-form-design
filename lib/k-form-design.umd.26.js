((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[26],{

/***/ "44e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f293d34-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KFormModelItem/KFormModelItem.vue?vue&type=template&id=5f75dfbe&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.record.options.noFormItem ? _c(_vm.componentItem, _vm._b({
    tag: "component"
  }, 'component', _vm.getComponentProps, false)) : _c('a-form-model-item', {
    attrs: {
      "prop": "domains.".concat(_vm.index, ".").concat(_vm.record.model),
      "rules": _vm.record.rules
    }
  }, [_c(_vm.componentItem, _vm._b({
    ref: "inputItem",
    tag: "component",
    on: {
      "change": _vm.handleChange
    }
  }, 'component', _vm.getComponentProps, false))], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/components/KFormModelItem/KFormModelItem.vue?vue&type=template&id=5f75dfbe&

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("7ad2");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("7c02");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("0277");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./packages/utils/index.js + 7 modules
var utils = __webpack_require__("e74d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KFormModelItem/KFormModelItem.vue?vue&type=script&lang=js&





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * author kcz
 * date 2019-11-20
 */


var _ = __webpack_require__("a6fb");

var ComponentArray = utils["d" /* pluginManager */].getComponents();
/* harmony default export */ var KFormModelItemvue_type_script_lang_js_ = ({
  name: "KFormModelItem",
  props: ["record", "domains", "index", "value", "parentDisabled", "dynamicData", "config"],
  computed: {
    /**
     * 计算组件props
     */
    getComponentProps: function getComponentProps() {
      var record = this.record;

      var componentProps = _objectSpread(_objectSpread({
        record: record
      }, this.componentOption), {}, {
        config: this.config,
        disabled: this.disabled || record.options.disabled,
        parentDisabled: this.disabled || record.options.disabled,
        allowClear: record.options.clearable,
        mode: record.options.multiple ? "multiple" : "",
        value: this.value || record.options.defaultValue,
        style: record.options.width && "width:".concat(record.options.width),
        height: typeof record.options.height !== "undefined" ? record.options.height : "",
        dynamicData: this.dynamicData,
        options: !record.options.dynamic ? record.options.options : this.dynamicData[record.options.dynamicKey] ? this.dynamicData[record.options.dynamicKey] : []
      });

      if (this.record.type === "textarea") {
        componentProps.autoSize = {
          minRows: record.options.minRows,
          maxRows: record.options.maxRows
        };
      }

      if (this.record.type === "alert") {
        componentProps.message = record.label;
      }

      if (this.record.type === "number") {
        componentProps.min = record.options.min || record.options.min === 0 ? record.options.min : -Infinity;
        componentProps.max = record.options.max || record.options.max === 0 ? record.options.max : Infinity;
        componentProps.precision = record.options.precision > 50 || !record.options.precision && record.options.precision !== 0 ? null : record.options.precision;
      }

      if (this.record.type === "select") {
        componentProps.filterOption = record.options.showSearch ? function (inputValue, option) {
          return option.componentOptions.children[0].text.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
        } : false;
      }

      if (componentProps.value && componentProps.value !== this.value) {
        this.$emit("input", componentProps.value);
      }

      return componentProps;
    },
    componentItem: function componentItem() {
      return ComponentArray[this.record.type].component;
    },
    componentOption: function componentOption() {
      return _.omit(this.record.options, ["defaultValue", "disabled"]);
    }
  },
  methods: {
    handleChange: function handleChange(e) {
      var value = e;

      if (e.target) {
        value = e.target.value;
      }

      this.$emit("input", value);
    }
  }
});
// CONCATENATED MODULE: ./packages/components/KFormModelItem/KFormModelItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var KFormModelItem_KFormModelItemvue_type_script_lang_js_ = (KFormModelItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("8619");

// CONCATENATED MODULE: ./packages/components/KFormModelItem/KFormModelItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KFormModelItem_KFormModelItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KFormModelItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "9803":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f293d34-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KBatch/batch.vue?vue&type=template&id=6e231603&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('a-form-model', {
    ref: "dynamicValidateForm",
    attrs: {
      "layout": "inline",
      "model": _vm.dynamicValidateForm
    }
  }, [_c('a-table', {
    staticClass: "batch-table",
    attrs: {
      "pagination": false,
      "rowKey": function rowKey(record) {
        return record.key;
      },
      "columns": _vm.columns,
      "dataSource": _vm.dynamicValidateForm.domains,
      "bordered": "",
      "scroll": {
        x: _vm.listLength * 190 + 80 + (!_vm.record.options.hideSequence ? 60 : 0),
        y: _vm.record.options.scrollY
      }
    },
    scopedSlots: _vm._u([_vm._l(_vm.record.list, function (item) {
      return {
        key: item.key,
        fn: function fn(text, row, index) {
          return [_c('KFormModelItem', {
            key: item.key + '1',
            attrs: {
              "record": item,
              "config": _vm.config,
              "parentDisabled": _vm.disabled,
              "index": index,
              "domains": _vm.dynamicValidateForm.domains,
              "dynamicData": _vm.dynamicData
            },
            on: {
              "input": _vm.handleInput
            },
            model: {
              value: row[item.model],
              callback: function callback($$v) {
                _vm.$set(row, item.model, $$v);
              },
              expression: "row[item.model]"
            }
          })];
        }
      };
    }), {
      key: "dynamic-opr-button",
      fn: function fn(text, row) {
        return [_c('div', {
          staticStyle: {
            "witdh": "130px"
          }
        }, [!_vm.disabled ? _c('a-icon', {
          staticClass: "dynamic-opr-button",
          attrs: {
            "title": "复制添加",
            "type": "copy-o"
          },
          on: {
            "click": function click($event) {
              return _vm.copyDomain(row);
            }
          }
        }) : _vm._e(), !_vm.disabled && _vm.record.options.minLimit < _vm.dynamicValidateForm.domains.length ? _c('a-icon', {
          staticClass: "dynamic-opr-button",
          attrs: {
            "title": "删除该行",
            "type": "minus-circle-o"
          },
          on: {
            "click": function click($event) {
              return _vm.removeDomain(row);
            }
          }
        }) : _vm._e()], 1)];
      }
    }], null, true)
  }), _c('Button', {
    attrs: {
      "type": "dashed",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.addDomain
    }
  }, [_c('a-icon', {
    attrs: {
      "type": "plus"
    }
  }), _vm._v("增加 ")], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/components/KBatch/batch.vue?vue&type=template&id=6e231603&

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("7ad2");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("0277");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("7c02");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./packages/components/KFormModelItem/KFormModelItem.vue + 4 modules
var KFormModelItem = __webpack_require__("44e6");

// EXTERNAL MODULE: ./packages/utils/index.js + 7 modules
var utils = __webpack_require__("e74d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KBatch/batch.vue?vue&type=script&lang=js&






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Button = utils["d" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var batchvue_type_script_lang_js_ = ({
  name: "KBatch",
  props: ["record", "value", "dynamicData", "config", "parentDisabled"],
  components: {
    KFormModelItem: KFormModelItem["a" /* default */],
    Button: Button
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler: function handler(val) {
        this.dynamicValidateForm.domains = val || [];
      },
      immediate: true,
      deep: true
    }
  },
  data: function data() {
    return {
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  computed: {
    listLength: function listLength() {
      return this.record.list.filter(function (item) {
        return !item.options.hidden;
      }).length;
    },
    columns: function columns() {
      var _this = this;

      var columns = [];

      if (!this.record.options.hideSequence) {
        columns.push({
          title: "序号",
          dataIndex: "sequence_index_number",
          width: "60px",
          align: "center",
          customRender: function customRender(text, record, index) {
            return index + 1;
          }
        });
      }

      columns.push.apply(columns, Object(toConsumableArray["a" /* default */])(this.record.list.filter(function (item) {
        return !item.options.hidden;
      }).map(function (item, index) {
        return {
          title: item.label,
          dataIndex: item.key,
          width: index === _this.record.list.length - 1 ? "" : "190px",
          scopedSlots: {
            customRender: item.key
          }
        };
      })));
      columns.push({
        title: "操作",
        dataIndex: "dynamic-opr-button",
        fixed: "right",
        width: "80px",
        align: "center",
        scopedSlots: {
          customRender: "dynamic-opr-button"
        }
      });
      return columns;
    },
    disabled: function disabled() {
      return this.record.options.disabled || this.parentDisabled;
    }
  },
  methods: {
    validationSubform: function validationSubform() {
      var verification;
      this.$refs.dynamicValidateForm.validate(function (valid) {
        verification = valid;
      });
      return verification;
    },
    resetForm: function resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain: function removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);

      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    copyDomain: function copyDomain(record) {
      this.dynamicValidateForm.domains.push(_objectSpread(_objectSpread({}, record), {}, {
        key: Object(utils["a" /* getUUID */])()
      }));
      this.handleInput();
    },
    addDomain: function addDomain() {
      var data = {};
      this.record.list.forEach(function (item) {
        data[item.model] = item.options.defaultValue;
      });
      this.dynamicValidateForm.domains.push(_objectSpread(_objectSpread({}, data), {}, {
        key: Object(utils["a" /* getUUID */])()
      }));
      this.handleInput();
    },
    handleInput: function handleInput() {
      this.$emit("change", this.dynamicValidateForm.domains);
    }
  },
  created: function created() {
    // 判断是否有最小行限度
    if (this.record.options.minLimit) {
      // 初始化最小行
      for (var i = 0; i < this.record.options.minLimit; i++) {
        this.addDomain();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/KBatch/batch.vue?vue&type=script&lang=js&
 /* harmony default export */ var KBatch_batchvue_type_script_lang_js_ = (batchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("8619");

// CONCATENATED MODULE: ./packages/components/KBatch/batch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KBatch_batchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var batch = (component.exports);
// CONCATENATED MODULE: ./packages/components/KBatch/index.js

/* harmony default export */ var KBatch = __webpack_exports__["default"] = (batch);

/***/ })

}]);