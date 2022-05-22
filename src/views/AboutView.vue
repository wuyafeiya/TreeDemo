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
            <el-button
              type="danger"
              v-for="item in AddList"
              :key="item.id"
              @click="AddFiled(item)"
              >{{ item.name }}</el-button
            >
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
          <el-table
            :data="tableData"
            row-key="id"
            border
            style="width: 100%"
            @cell-click="cellInfo"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column prop="data" label="日期" width="180">
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
import store from '@/store'
export default {
  data() {
    return {
      centerDialogVisible: false,
      TableId: '',
      TreeId: '',
      index: '',
      ChildrenIndex: '',
      RowInfo: '',
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
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 11,
              label: '二级 1-1',
              children: [
                {
                  id: 12,
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 21,
              label: '二级 2-1',
              children: [
                {
                  id: 212,
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              id: 22,
              label: '二级 2-2',
              children: [
                {
                  id: 221,
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 31,
              label: '二级 3-1',
              children: [
                {
                  id: 311,
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              id: 32,
              label: '二级 3-2',
              children: [
                {
                  id: 321,
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: '一级 4',
          children: [
            {
              id: 41,
              label: '二级 4-1',
              children: [
                {
                  id: 411,
                  label: '三级 4-1-1'
                }
              ]
            },
            {
              id: 42,
              label: '二级 4-2',
              children: [
                {
                  id: 421,
                  label: '三级 4-2-1'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          label: '一级 5',
          children: [
            {
              id: 51,
              label: '二级 5-1',
              children: [
                {
                  id: 511,
                  label: '三级 5-1-1'
                }
              ]
            },
            {
              id: 52,
              label: '二级 5-2',
              children: [
                {
                  id: 521,
                  label: '三级 5-2-1'
                }
              ]
            }
          ]
        },
        {
          id: 6,
          label: '一级 6',
          children: [
            {
              id: 61,
              label: '二级 6-1',
              children: [
                {
                  id: '611',
                  label: '三级 6-1-1'
                }
              ]
            },
            {
              id: 62,
              label: '二级 6-2',
              children: [
                {
                  id: 621,
                  label: '三级 6-2-1'
                }
              ]
            }
          ]
        },
        {
          id: 7,
          label: '一级 7',
          children: [
            {
              id: 71,
              label: '二级 7-1',
              children: [
                {
                  id: 711,
                  label: '三级 7-1-1'
                }
              ]
            },
            {
              id: 72,
              label: '二级 7-2',
              children: [
                {
                  id: 721,
                  label: '三级 7-2-1'
                }
              ]
            }
          ]
        }
      ],
      // 表格 数据

      tableData: [
        { id: this.$store.state.label, data: store.state.label, children: [] }
      ]
      // tableData: [
      //   {
      //     id: 3,
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1519 弄',
      //     children: [
      //       {
      //         id: 31,
      //         date: '2016-05-01',
      //         name: '王小虎',
      //         address: '上海市普陀区金沙江路 1519 弄'
      //       }
      //     ]
      //   }
      // ]
    }
  },
  methods: {
    handleNodeClick(data) {
      this.$store.commit('ChangeTreeName', data.label)
      this.TreeId = data.id
    },
    // cellInfo(row,column,cell,e) {
    // this.TableId = row.id
    //   console.log(row);
    //   console.log(column);
    //   console.log(cell);
    //   console.log(e);
    cellInfo(row) {
      console.log(row)
      this.RowInfo = row
      this.TableId = row.id
    },
    AddFiled(data) {
      switch (data.id) {
        case 'Addfiled':
          if (this.$store.state.TreeName) {
            // 选中 表格 数据
            if (this.TableId) {
              // 判断 数据 级别 有 children 父级 无 子级
              if (this.RowInfo.children) {
                this.TableNode(this.TableId)
                this.tableData.splice(this.index + 1, 0, {
                  id: this.$store.state.TreeName,
                  data: this.$store.state.TreeName,
                  children: []
                })
                console.log('我是顶级')
              } else {
                this.ChildrenID(this.TableId)
                console.log(this.ChildrenIndex)
                console.log('我是子级')
              }
              console.log(this.index)
              this.TableId = ''
            } else {
              this.tableData[this.tableData.length - 1].children.push({
                id: this.$store.state.TreeName,
                data: this.$store.state.TreeName
              })
            }
          } else {
            this.$notify.warning({
              title: '警告',
              message: '没有选择字段节点'
            })
          }
      }
    },
    // 顶级判断
    TableNode(id) {
      this.tableData.forEach((item, index) => {
        if (item.id == id) {
          this.index = index
        }
      })
    },
    // 子级判断
    ChildrenID(id) {
      console.log(this.tableData)
      console.log(id)
      this.tableData.forEach((item, index) => {
        if (item.children && item.children.length > 0) {
          this.item.children.forEach((item1) => {
            if (item1.id == id) {
              this.ChildrenIndex = index
            }
          })
        }
      })
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
