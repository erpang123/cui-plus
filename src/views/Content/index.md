# Content / WContent 统一列表布局组件

## 基础用法

<script setup>
import demo from './demo.vue';
// import DemoBlock from '@/components/demoBlock.vue'
// import DemoBlock from '@/components/demoCode.vue'
</script>

<demo/>

<!-- <demo-block compName="Content" demoName="index"/> -->

## 试用案例

<script setup>
import demo1 from './demo1.vue';
</script>
<demo1/>

### Attributes

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| title | 标题 | string | -      | -      |

### Slot

| 参数         | 说明     | 类型 | 可选值 | 默认值 |
| ------------ | -------- | ---- | ------ | ------ |
| title        | 标题     | -    | -      | -      |
| header       | 头部     | -    | -      | -      |
| headerOption | 操作按钮 | -    | -      | -      |
| content      | 内容区域 | -    | -      | -      |
| paginate     | 分页     | -    | -      | -      |
