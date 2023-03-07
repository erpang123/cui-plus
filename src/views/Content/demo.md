# 组件介绍

<script setup>
// 导入案例组件
import demo from './demo.vue';
import demo1 from './demo1.vue'
</script>

<!-- comp-name: 案例在views中的文件夹目录，多层时将多层目录用/连接。demo-name：案例的文件名称 -->
<demo-view comp-name="Content" demo-name="demo">
  <demo/>
</demo-view>

<demo-view comp-name="Content" demo-name="demo1">
  <demo1/>
</demo-view>

## Attributes

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |

## Slot

| 参数         | 说明     | 类型 | 可选值 | 默认值 |
| ------------ | -------- | ---- | ------ | ------ |
| title        | 标题     | -    | -      | -      |
| header       | 头部     | -    | -      | -      |
| headerOption | 操作按钮 | -    | -      | -      |
| content      | 内容区域 | -    | -      | -      |
| paginate     | 分页     | -    | -      | -      |
