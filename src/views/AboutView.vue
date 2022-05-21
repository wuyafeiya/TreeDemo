<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="80%"
      center
    >
      <el-row type="flex" justify="space-between">
        <el-col :span="4">
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-col>
        <el-col :span="2" style="text-align: center">
          <div>
            <el-button type="danger">添加字段</el-button>
            <el-button type="danger">添加字段</el-button>
            <el-button type="danger">添加字段</el-button>
            <el-button type="danger">添加字段</el-button>
            <el-button type="danger">添加字段</el-button>
          </div>
          <div style="margin: 20px 0">
            <el-button type="primary">添加字段</el-button>
            <el-button type="primary">添加字段</el-button>
            <el-button type="primary">添加字段</el-button>
            <el-button type="primary">添加字段</el-button>
            <el-button type="primary">添加字段</el-button>
          </div>
          <div>
            <el-button type="primary" style="width: 98px">保存</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    count() {
      console.log(123)
    }
  }
}
</script>
<style scoped>
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

::v-deep .el-button {
  margin-left: 0;
  margin-bottom: 6px;
}

::v-deep .el-table {
  margin: auto;
}
</style>
