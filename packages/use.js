// 导入单个组件
import KFormDesign from "./components/KFormDesign/index";
// import KFormPreview from "./KFormPreview/index";
import KFormBuild from "./components/KFormBuild/index";
import KFormItem from "./components/KFormItem/index";
const components = [KFormDesign, KFormBuild, KFormItem];

const install = function(Vue) {
  // use ant组件
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

export { KFormDesign, KFormBuild, KFormItem };

// 这里默认导出全部组件
export default {
  install,
  KFormDesign,
  // KFormPreview,
  KFormBuild,
  KFormItem
};
