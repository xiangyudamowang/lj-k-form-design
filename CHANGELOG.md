## 3.8.17（2023-04-08）
### ✨ Feat
- 动态表格添加最小行数限制属性

### 🐛 Bug Fixes
- 修复选择输入列中嵌套输入框，预览界面查看数据时默认值不显示问题
- 修复选择输入列校验无效问题

## 3.8.13（2022-11-20）
### ✨ Feat
- 新增noFormItem属性字段

## 3.8.12（2022-11-12）
### 🐛 Bug Fixes
- 修复输入组件较多时输入卡顿问题

## 3.8.11（2022-11-02）
### 🐛 Bug Fixes
- 修复范围时间选择器报错问题
- 修复选择输入列单选按钮未注册问题

## 3.8.10（2022-10-31）
### 🐛 Bug Fixes
- 修复动态表格数据复制无效问题
- 修复动态表格样式错误问题

## 3.8.9（2022-10-28）
### 🐛 Bug Fixes
- 修复未完全加载懒加载组件就执行setData的问题

## 3.8.8（2022-10-26）
### ✨ Feat
- 新增LazyLoadTick钩子对象,用于监听组件是否加载完毕(包括懒加载)
- 添加预加载组件方式

## 3.8.7（2022-10-25）
### ✨ Refactor
- 重构自定义组件
- 添加NodeSchema节点管理对象
### 🐛 Bug Fixes
- 修复自定义组件无效问题

## 3.8.5（2022-10-25）
### 🐛 Bug Fixes
- 修复帮助信息无效问题

## 3.8.4（2022-10-20）
### 🐛 Bug Fixes
- 修复cdn方式 无法加载组件问题


## 3.8.3（2022-10-20）
### 🐛 Bug Fixes
- 修复懒加载组件异常问题

## 3.8.1（2022-10-19）
### ✨ Refactor
- 重构预览页面
- 表单组件支持懒加载
- 重构表单组件渲染方式
### 🐛 Bug Fixes

- 修复历史记录条数判断条件错误
- 修复table组件宽度不生效问题
- 修复table组件宽度不生效问题
- 修复表单内有很多组件时需要撤销两次

## 3.7.91（2021-05-28）
### 🐛 Bug Fixes

- select点击清除按钮后报错

## 3.7.9（2021-05-28）

### (破坏性更新) Breaking changes
- 表格合并改为占位标记的方式，colspan或rowspan等于0时，则不渲染该单元格
    - 影响，之前已保存表格布局的用户，在3.7.9+版本进行表格合并可能会出现表格错乱情况
    - 原因：
        - 占位标记更方便合并拆分操作
        - 表格可以完全由二维数据来完成渲染，更利于理解
        - 因为之前合并操作，会移除被合并的单元格数据，导致渲染表格的数据并不是一个二维数组，给合并操作带来了很多bug
### 🐛 Bug Fixes

- 修复表格合并bug导致表格错乱bug


## 3.7.8（2021-05-27）

### ✨ Features

- 增加撤销重做功能
### 🐛 Bug Fixes

- 修复表格合并bug，在已向下合并单元格的右边单元格右键新增一行时导致表格错乱
- 修复第二行做了表格向下合并，第一行在进行向下合并时，排版出现错乱的问题
- 修复撤销后未移除选中项导致的bug

## 3.7.75（2021-05-21）

### ✨ Features

- 增加文字 自定义标题字体、字号、颜色
### 🐛 Bug Fixes

- 修复首次选择控件，属性显示不全bug
- 修复表格合并及增加行导致表格错乱的bug

## 3.7.72（2021-05-17）
### 🐛 Bug Fixes

- 修复重置表单数据时表单数据缺少标签布局数据的问题

## 3.7.71（2021-05-16）
### ✨ Refactor

- 属性修改为tabs切换
- 修改未选择组件时样式

## 3.7.7（2021-05-15）

### ✨ Features

- 新增选择输入列组件
- 表单属性设置新增标签布局选项，可选择固定Label宽度

### ✨ Refactor

- 重构KFormItem组件部分



## 3.7.6（2021-05-02）

### 🐛 Bug Fixes

- 修复显示隐藏组件无效bug

### 🎫 Chores

- 文档更新
