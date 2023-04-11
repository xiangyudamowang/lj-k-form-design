((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[35],{

/***/ "7483":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f293d34-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KSlider/KSlider.vue?vue&type=template&id=5445e79e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "slider-box",
    style: "width:".concat(_vm.record.options.width)
  }, [_c('div', {
    staticClass: "slider"
  }, [_c('Slider', _vm._b({
    model: {
      value: _vm.sliderValue,
      callback: function callback($$v) {
        _vm.sliderValue = $$v;
      },
      expression: "sliderValue"
    }
  }, 'Slider', this.$attrs, false))], 1), _vm.record.options.showInput ? _c('div', {
    staticClass: "number"
  }, [_c('InputNumber', _vm._b({
    staticStyle: {
      "width": "100%"
    },
    model: {
      value: _vm.sliderValue,
      callback: function callback($$v) {
        _vm.sliderValue = $$v;
      },
      expression: "sliderValue"
    }
  }, 'InputNumber', this.$attrs, false))], 1) : _vm._e()]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/components/KSlider/KSlider.vue?vue&type=template&id=5445e79e&

// EXTERNAL MODULE: ./packages/utils/index.js + 7 modules
var utils = __webpack_require__("e74d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KSlider/KSlider.vue?vue&type=script&lang=js&

var Slider = utils["d" /* pluginManager */].getComponent("aSlider").component;
var InputNumber = utils["d" /* pluginManager */].getComponent("number").component;
/* harmony default export */ var KSlidervue_type_script_lang_js_ = ({
  name: "KSlider",
  props: ["record", "value"],
  components: {
    Slider: Slider,
    InputNumber: InputNumber
  },
  computed: {
    sliderValue: {
      get: function get() {
        return this.value;
      },
      set: function set(e) {
        this.$emit("change", e);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/KSlider/KSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var KSlider_KSlidervue_type_script_lang_js_ = (KSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("8619");

// CONCATENATED MODULE: ./packages/components/KSlider/KSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KSlider_KSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KSlider = (component.exports);
// CONCATENATED MODULE: ./packages/components/KSlider/index.js

/* harmony default export */ var components_KSlider = __webpack_exports__["default"] = (KSlider);

/***/ })

}]);