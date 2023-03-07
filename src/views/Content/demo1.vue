<template>
  <w-content title="标题">
    <div slot="header">
      表单筛选区域
    </div>
    <div slot="headerOption">
      <el-button type="primary" size="small">操作按钮</el-button>
    </div>
    <div slot="content">
      <el-table
        :data="tableData"
        style="width: 100%"
        border>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div slot="paginate">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </w-content>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>