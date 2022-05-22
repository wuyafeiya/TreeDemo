<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="80%"
      centers
      custom-class="Tree"
    >
      <el-row type="flex" justify="space-between">
        <el-col :span="4" style="border: 1px solid red">
          <div style="background: #99a9bf">报文字段</div>
          <el-scrollbar style="height: 100%">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </el-scrollbar>
        </el-col>
        <el-col :span="2" style="text-align: center">
          <div>
            <el-button type="danger" v-for="item in AddList" :key="item.id">{{
              item.name
            }}</el-button>
          </div>
          <div style="margin: 20px 0">
            <el-button type="primary" v-for="item in MoveList" :key="item.id">{{
              item.name
            }}</el-button>
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
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      AddList: [
        { id: 'Addfiled', name: '增加字段' },
        { id: 'Delfiled', name: '删除字段' },
        { id: 'Addor', name: '添加"or"' },
        { id: 'Addand', name: '添加"and"' },
        { id: 'Addxor', name: '添加"xor"' }
      ],
      MoveList: [
        { id: 'TopMove', name: '上移' },
        { id: 'DownMove', name: '下移' },
        { id: 'MoveIn', name: '移进' },
        { id: 'MoveOut', name: '移出' },
        { id: 'Test', name: '检验' }
      ],
      // 树形结构数据
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 4',
          children: [
            {
              label: '二级 4-1',
              children: [
                {
                  label: '三级 4-1-1'
                }
              ]
            },
            {
              label: '二级 4-2',
              children: [
                {
                  label: '三级 4-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 5',
          children: [
            {
              label: '二级 5-1',
              children: [
                {
                  label: '三级 5-1-1'
                }
              ]
            },
            {
              label: '二级 5-2',
              children: [
                {
                  label: '三级 5-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 6',
          children: [
            {
              label: '二级 6-1',
              children: [
                {
                  label: '三级 6-1-1'
                }
              ]
            },
            {
              label: '二级 6-2',
              children: [
                {
                  label: '三级 6-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 7',
          children: [
            {
              label: '二级 7-1',
              children: [
                {
                  label: '三级 7-1-1'
                }
              ]
            },
            {
              label: '二级 7-2',
              children: [
                {
                  label: '三级 7-2-1'
                }
              ]
            }
          ]
        }
      ],
      // 表格 数据
      tableData: [],
      handleNodeClick() {
        console.log(123)
      }
    }
  }
}
</script>
<style scoped>
::v-deep .tree {
  background-color: aqua;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.el-col-4 {
  height: 600px;
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
  width: 98px;
  margin-left: 0;
  margin-bottom: 6px;
}

::v-deep .el-table {
  margin: auto;
}
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
  /* top: -90px; */
}
.el-dialog__wrapper {
  top: -90px;
}
</style>
