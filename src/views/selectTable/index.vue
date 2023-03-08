<template>
  <select-table
    :data="data.tableData"
    :selectLists="data.selectTableLists"
    tooltip-effect="dark"
    style="width: 100%"
    :customFun="customFun"
    @finish="finishEvent"
  >
    <template v-slot:default>
      <el-table-column label="日期" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </template>
  </select-table>
  <div class="btn-cls">
    <el-button type="primary" @click="sureLists">确定</el-button>
  </div>
  <div>
    <div class="mul-title">
      显示区域
      <div class="btn-cls">
        <el-button @click="clearShowLists">清空</el-button>
      </div>
    </div>
    <el-table
      :data="data.selectTableLists"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column label="日期" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
const data = reactive({
  tableData: [
    {
      id: 1,
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 2,
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 3,
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 4,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 5,
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 6,
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 7,
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
  ],
  selectLists: [],
  selectTableLists: [],
})
// 选择列表的回调
const finishEvent = (obj: any) => {
  const { eventType, lists } = obj
  const keyObj = {
    dblClick: 'selectTableLists',
    select: 'selectLists'
  }
  const k: keyType = keyObj[eventType as eventType] as keyType
  data[k] = lists || []
}
// 确认列表框
const sureLists = () => {
  data.selectTableLists = data.selectTableLists.concat(data.selectLists)
}
// 清空数据列表
const clearShowLists = () => {
  data.selectTableLists = []
}

const customFun = (el, i) => {
  return i === 2
}

onMounted(() => {
  setTimeout(() => {
    data.selectTableLists = [
      {
        id: 1,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        id: 2,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
    ]
  }, 1000)
})
</script>

<style lang="scss" scoped>
.mul-title{
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.btn-cls{
  text-align: right;
  margin: 10px 0;
}
</style>