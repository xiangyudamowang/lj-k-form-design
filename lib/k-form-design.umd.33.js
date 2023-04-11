((typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpk_form_design"] || []).push([[33],{

/***/ "3820":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f293d34-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KEditor/kEditor.vue?vue&type=template&id=8c943d82&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('quillEditor', {
    ref: "vueQuillEditor",
    staticClass: "ql-editor-class",
    class: {
      chinesization: _vm.record.options.chinesization
    },
    style: {
      height: "".concat(_vm.record.options.height, "px")
    },
    attrs: {
      "value": _vm.value,
      "options": _vm.editorOption,
      "disabled": _vm.record.options.disabled || _vm.parentDisabled
    },
    on: {
      "blur": function blur($event) {
        return _vm.onEditorBlur($event);
      },
      "focus": function focus($event) {
        return _vm.onEditorFocus($event);
      },
      "change": function change($event) {
        return _vm.onEditorChange($event);
      }
    }
  });
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./packages/components/KEditor/kEditor.vue?vue&type=template&id=8c943d82&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-quill-editor@3.0.6/node_modules/vue-quill-editor/dist/vue-quill-editor.js
var vue_quill_editor = __webpack_require__("511b");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.core.css
var quill_core = __webpack_require__("a753");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__("8096");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__("14e1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib??vue-loader-options!./packages/components/KEditor/kEditor.vue?vue&type=script&lang=js&
 //调用编辑器




/* harmony default export */ var kEditorvue_type_script_lang_js_ = ({
  name: "editor",
  props: ["value", "record", "parentDisabled"],
  components: {
    quillEditor: vue_quill_editor["quillEditor"]
  },
  data: function data() {
    return {
      editorOption: {
        placeholder: this.record.options.placeholder
      }
    };
  },
  methods: {
    onEditorBlur: function onEditorBlur() {},
    // 失去焦点事件
    onEditorFocus: function onEditorFocus() {},
    // 获得焦点事件
    onEditorChange: function onEditorChange(e) {
      this.$emit("change", e.html);
    }
  }
});
// CONCATENATED MODULE: ./packages/components/KEditor/kEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var KEditor_kEditorvue_type_script_lang_js_ = (kEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.10.1_sqwtrzbl6s4ypz4dmnoirtpj7i/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("8619");

// CONCATENATED MODULE: ./packages/components/KEditor/kEditor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  KEditor_kEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var kEditor = (component.exports);
// CONCATENATED MODULE: ./packages/components/KEditor/index.js
/*
 * @Description:导出富文本编辑器
 * @Author: kcz
 * @Date: 2020-03-30 12:45:04
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-30 12:45:40
 */

/* harmony default export */ var KEditor = __webpack_exports__["default"] = (kEditor);

/***/ })

}]);