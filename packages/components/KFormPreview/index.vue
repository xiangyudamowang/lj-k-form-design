<!--
 * @Author: xiangy xiangy@longjitech.com
 * @Date: 2023-04-11 13:28:03
 * @LastEditors: xiangy
 * @LastEditTime: 2023-04-21 10:05:20
 * @FilePath: /ecp-vue/node_modules/lj-k-form-design/packages/components/KFormPreview/index.vue
 * @Description: 
-->
<template>
  <a-modal title="预览" :visible="visible" @ok="handleGetData" @cancel="handleCancel" okText="获取数据" cancelText="关闭"
    style="top:20px;" :destroyOnClose="true" :centered="true" :dialogStyle="dialogStyle" :bodyStyle="bodyStyle"
    wrapClassName="k-form-modal" :width="`${previewWidth}px`">
    <k-form-build :listmaingridFlag="listmaingridFlag" :value="jsonData" @change="handleChange" @submit="handleSubmit" ref="KFormBuild" />
    <jsonModel ref="jsonModel" />
  </a-modal>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import jsonModel from "../KFormDesign/module/jsonModal";
import { dialogStyle, bodyStyle } from "../../config/modal.js";
export default {
  name: "KFormPreview",
  props:{
    listmaingridFlag:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      visible: false,
      previewWidth: 850,
      jsonData: {},
      dialogStyle,
      bodyStyle
    };
  },
  components: {
    jsonModel
  },
  methods: {
    /**
     * 按钮触发提交
     * @param {*} p
     */
    handleSubmit(p) {
      p()
        .then(res => {
          console.log(res, "获取数据成功");
          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.error(err, "获取数据失败");
        });
    },
    /**
     * 手动验证获取表单数据
     */
    async handleGetData() {
      this.$refs.KFormBuild.getData()
        .then(res => {
          console.log(res, "获取数据成功");
          this.$refs.jsonModel.jsonData = res;
          this.$refs.jsonModel.visible = true;
        })
        .catch(err => {
          console.log(err, "获取数据失败");
        });
    },
    /**
     * 监听表单change 事件
     * @param {*} value
     * @param {*} key
     */
    handleChange(value, key) {
      console.log(value, key);
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
/deep/ .ant-card-head-title {
  &:before {
    content: '|';
    width: 4px;
    height: 14px;
    color: #1990ff;
    background: #1990ff;
    margin-right: 10px;
  }
}
</style>
