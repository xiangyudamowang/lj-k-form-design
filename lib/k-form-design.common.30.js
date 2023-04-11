((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[30],{

/***/ "7f90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f293d34-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KButton/KButton.vue?vue&type=template&id=af2672b6&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('span', [_c('Button', _vm._b({
    attrs: {
      "html-type": _vm.record.options.handle === 'submit' ? 'submit' : undefined
    },
    domProps: {
      "textContent": _vm._s(_vm.record.label)
    },
    on: {
      "click": function click($event) {
        _vm.record.options.handle === 'submit' ? false : _vm.record.options.handle === 'reset' ? _vm.$attrs.onHandleReset() : _vm.dynamicData[_vm.record.options.dynamicFun] ? _vm.dynamicData[_vm.record.options.dynamicFun]() : false;
      }
    }
  }, 'Button', this.$attrs, false))], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/components/KButton/KButton.vue?vue&type=template&id=af2672b6&

// EXTERNAL MODULE: ./packages/utils/index.js + 7 modules
var utils = __webpack_require__("e74d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KButton/KButton.vue?vue&type=script&lang=js&

var Button = utils["d" /* pluginManager */].getComponent("aButton").component;
/* harmony default export */ var KButtonvue_type_script_lang_js_ = ({
  name: "KButton",
  props: ["record", "dynamicData"],
  components: {
    Button: Button
  }
});
// CONCATENATED MODULE: ./packages/components/KButton/KButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var KButton_KButtonvue_type_script_lang_js_ = (KButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("8619");

// CONCATENATED MODULE: ./packages/components/KButton/KButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KButton_KButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var KButton = (component.exports);
// CONCATENATED MODULE: ./packages/components/KButton/index.js

/* harmony default export */ var components_KButton = __webpack_exports__["default"] = (KButton);

/***/ })

}]);