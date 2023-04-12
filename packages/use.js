// 导入单个组件
import LjKFormDesign from "./components/KFormDesign/index";
// import KFormPreview from "./KFormPreview/index";
import KFormBuild from "./components/KFormBuild/index";
import KFormItem from "./components/KFormItem/index";
const components = [LjKFormDesign, KFormBuild, KFormItem];

const install = function(Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

export { LjKFormDesign, KFormBuild, KFormItem };

// 这里默认导出全部组件
export default {
  install,
  LjKFormDesign,
  // KFormPreview,
  KFormBuild,
  KFormItem
};
