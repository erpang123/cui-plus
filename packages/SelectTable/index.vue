<template>
  <el-table
    ref="multipleTable"
    @selection-change="handleSelectionChange"
    @row-dblclick="handleRowDblClick"
    v-bind="$attrs"
  >
    <el-table-column type="selection" width="55" :selectable="selectable"></el-table-column>
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
export default {
  name: 'SelectTable'
}
</script>

<script lang="ts" setup>
import { reactive, defineProps, defineEmits, ref, useAttrs, watch } from 'vue';
// ref节点
const multipleTable = ref()
const attrs = useAttrs()

// emit可以触发的事件
const emit = defineEmits(['finish'])

const props = defineProps({
  selectLists: {
    type: Array<any>,
    default () {
      return []
    }
  }
})

// 双向数据绑定
const data: tableDateType = reactive({
  selectTableLists: [],
  dblClick: false,
})

// 点击selection框选择
const handleSelectionChange = (val: Array<never>) => {
  // 非点击时传值到上层
  if (!data.dblClick) {
    const lists = val.filter(el => !data.selectTableLists.includes(el))
    emit('finish', {
      lists,
      eventType: 'select'
    })
  }
  data.dblClick = false
}

// 双击选中
const handleRowDblClick = (row: any) => {
  if (data.selectTableLists.includes(row)) {
    return
  }
  data.selectTableLists.push(row)
  data.dblClick = true
  multipleTable.value.toggleRowSelection(row, true)
  emit('finish', {
    lists: data.selectTableLists,
    eventType: 'dblClick'
  })
}

// 当前select框是否可以选择
const selectable = (row: any) => {
  return !data.selectTableLists.includes(row)
}

// watch监听
watch(
  () => props.selectLists,
  (newVal) => {
    const arr = attrs.data as any[] || [];
    let lists: any[] = []
    if (multipleTable.value) {
      arr.forEach(el => {
        const index = newVal.findIndex(nv => nv.id === el.id)
        if (index >= 0) {
          lists.push(el)
          multipleTable.value.toggleRowSelection(el, true);
        } else {
          multipleTable.value.toggleRowSelection(el, false);
        }
      })
      data.selectTableLists = lists
    }
  }, {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
</style>