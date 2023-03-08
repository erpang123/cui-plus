# 可选择的table

> 该表格在双击选择之后不能再点击操作，选择框选择后可以再次取消选择。默认通过id的唯一性来判断列表是否被选中，可以通过customFun方法来判断数据的唯一性。

<script setup>
import SelectTable from './index.vue'
</script>
<!-- comp-name: 案例在views中的文件夹目录，多层时将多层目录用/连接。demo-name：案例的文件名称 -->
<demo-view comp-name="selectTable" demo-name="index">
  <SelectTable/>
</demo-view>

### Attributes

| 参数  | 说明 | 类型   | 可选值 | 默认值 |
| ----- | ---- | ------ | ------ | ------ |
| selectLists | 选中的项目列表 | Array | -- | --- |

### Events
| 参数  | 说明 | 参数 | 参数描述 |
| ----- | ---- | ------ | ------ |
| finish | 当表格中的选择项发生改变时触发 | { lists, eventType }  | eventType有两种类型：dblClick-双击加入，select-选框加入。 lists为不同类型下选择的列表 |

### Methods
| 参数  | 说明 | 参数 | 参数描述 |
| ----- | ---- | ------ | ------ |
| customFun | 自定义方法，用来判断当前数据是否已经被选中（默认是通过id来判断） | el, i | el：单条数据对象，i：数据在列表中的位置
