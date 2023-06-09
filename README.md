# 表单设计器 lj-k-form-design



## 简介

### fork于k-form-design，进行了二次开发，增加了一些插槽以及修改了布局，详细请看补充文档。
#

设计器布局参考form-generator项目，基于vue和ant-design-vue实现的表单设计器，样式使用less作为开发语言，主要功能是能通过简单操作来生成配置表单，生成可保存的JSON数据，并能将JSON还原成表单，使表单开发更简单更快速


vue3 版本中 k-form-design 已改名[ k-designer](https://gitee.com/kcz66/k-designer)

> 新版本优化渲染性能，新增事件动作配置，布局组件扩展，组件属性自定义等

## 特性
- 可视化配置页面
- 提供栅格、表格等布局
- 布局嵌套使用
- 提供预览、保存、生成json、生成可执行代码等操作
- 支持表单验证
- 快速获取表单数据
- 自定义组件插入
- 自定义主题色

## 组件
- KFormDesign 表单设计器（基于可视化操作快速设计出表单页面，生成配置json或页面）
- KFormBuild 表单构建器（根据设计器中获取的配置json数据，快速构建出表单页面）



## 安装

> 安装表单设计器

```cmd
npm i lj-k-form-design --save
 
# OR
yarn add lj-k-form-design
```

> 安装 ant-design-vue UI ，推荐 vue2 版本最新的 1.7.8版本

```cmd
npm i ant-design-vue@1.7.8 --save

# OR
yarn add ant-design-vue@1.7.8
```

### 

## 引入组件

``` javascript
// 在main.js引入

// 注：useComponents 需放最上面，优先注册懒加载组件
import { useAntd } from 'lj-k-form-design/packages/core/useComponents'
import LjKFormDesign from 'lj-k-form-design/packages/use.js'
import 'lj-k-form-design/lib/k-form-design.css'

useAntd(Vue)
Vue.use(LjKFormDesign)
```

## 使用组件
``` html
<template>
  <div>
   <lj-k-form-design />
  </div>
</template>
```

## 新增加插槽

插槽位置|插槽名称|
---|:--:
左侧内容区|lowcode-left-aside
设计器头部|header
设计器右侧表单基础属性 |formPropertiesBase
设计器右侧表单高级属性|formPropertiesPlus

## 新增属性
属性名|属性作用以及默认值|
---|:--: 
listmaingridFlag|布局的时候选择1-2-4列，默认为1，传递1表示1列，2表示2列，3表示3列，4表示4列
listmainlayout|布局表单中的label位置，默认为左，传递1表示左，传递2表示上
