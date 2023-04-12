/*
 * @Author: xiangy xiangy@longjitech.com
 * @Date: 2023-04-11 13:27:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-12 16:39:47
 * @FilePath: /lj-k-form-design/packages/utils/index.js
 * @Description: 
 */
// 发布npm（npm publish 时） 需要切换到这个
export { pluginManager, revoke, nodeSchema, lazyLoadTick } from "lj-k-form-design";

// 本地测试
// export { pluginManager } from "./PluginManager";
// export { revoke } from "./Revoke";
// export { nodeSchema } from "./NodeSchema";
// export { lazyLoadTick } from "./LazyLoadTick";

/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export function getUUID(randomLength = 10) {
  return Number(
    Math.random()
      .toString()
      .substring(3, randomLength) + Date.now()
  ).toString(36);
}
