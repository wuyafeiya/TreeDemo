<template>
  <div>
    <el-button type="text" @click="click()"
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
            <el-button
              type="primary"
              v-for="item in MoveList"
              :key="item.id"
              @click="MoveFiled(item)"
              >{{ item.name }}</el-button
            >
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
    <el-dialog title="提示" :visible="CaseDialogVisible" width="30%" center>
      Case
      <el-input v-model="Case"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="CaseDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      CaseDialogVisible: false,
      TableId: '',
      Case: '',
      TreeId: '',
      index: '',
      ChildrenIndex: '',
      FatherIndex: '',
      ThirdIndex: '',
      RowInfo: '',
      // 当前时间戳
      timestamp: '',
      // 选中表格元素的data
      tdata: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      AddList: [
        { id: 'AddCase', name: '增加Case' },
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
      tableData: []
    }
  },
  methods: {
    handleNodeClick(data) {
      this.$store.commit('ChangeTreeName', data.label)
      this.TreeId = data.id
    },
    handleSave() {
      this.CaseDialogVisible = false
      this.getTimestamp()
      this.tableData.push({
        id: this.Case,
        data: this.Case,
        children: [
          { id: this.timestamp, data: 'if', children: [] },
          { id: this.timestamp + 1, data: 'then', children: [] }
        ]
      })
    },
    cellInfo(row) {
      console.log(row)
      this.RowInfo = row
      this.TableId = row.id
      this.tdata = row.data
    },
    AddFiled(data) {
      switch (data.id) {
        case 'Addfiled':
          this.getTimestamp()
          if (this.$store.state.TreeName) {
            // 选中 表格 数据
            if (this.TableId) {
              this.TableNode(this.TableId)
              // 判断 数据 级别 有 children 父级 无 子级
              // 判断 点击的是 if/then
              if (this.tdata === 'if' || this.tdata === 'then') {
                console.log(1)
                this.tableData[this.FatherIndex].children[
                  this.ChildrenIndex
                ].children.push({
                  id: this.timestamp,
                  data: this.$store.state.TreeName
                })
                this.clearValue()
              }
              // 判断是否为 if/then的子级
              else if (this.ThirdIndex === 0 ? true : this.ThirdIndex) {
                console.log(2)
                this.tableData[this.FatherIndex].children[
                  this.ChildrenIndex
                ].children.splice(this.ThirdIndex + 1, 0, {
                  id: this.timestamp,
                  data: this.$store.state.TreeName
                })
                this.clearValue()
              } else {
                // 父节点
                if (this.RowInfo.children) {
                  this.tableData.splice(this.FatherIndex + 1, 0, {
                    id: this.timestamp,
                    data: this.$store.state.TreeName,
                    children: []
                  })
                  console.log('我是顶级')
                  // 子节点
                } else {
                  this.tableData[this.FatherIndex].children.splice(
                    this.ChildrenIndex + 1,
                    0,
                    { id: this.timestamp, data: this.$store.state.TreeName }
                  )
                   this.clearValue()
                }
                this.clearValue()
              }
            } else {
              this.tableData[this.tableData.length-1].children.push({
                id: this.timestamp,
                data: this.$store.state.TreeName,
                children:[]
              })
            }
            this.clearValue()
          } else {
            this.$notify.warning({
              title: '警告',
              message: '没有选择字段节点'
            })
          }
          break
        case 'Delfiled':
          //...删除节点
          if (this.TableId) {
            // 判断 数据 级别 有 children 父级 无 子级
            // 父节点
            if (this.RowInfo.children) {
              this.TableNode(this.TableId)
              this.tableData.splice(this.FatherIndex, 1)
            }
            // 子节点
            else {
              this.TableNode(this.TableId)
              this.tableData[this.FatherIndex].children.splice(
                this.ChildrenIndex,
                1
              )
            }
          } else {
            this.$notify.warning({
              title: '警告',
              message: '没有选择删除节点'
            })
          }
          break
        case 'AddCase':
          this.CaseDialogVisible = true
      }
    },
    // table节点判断
    TableNode(id) {
      this.tableData.forEach((item, index) => {
        if (item.id == id) {
          this.FatherIndex = index
        } else if (item.children && item.children.length > 0) {
          item.children.forEach((item1, index1) => {
            if (item1.id == id) {
              this.FatherIndex = index
              this.ChildrenIndex = index1
            } else if (item1.children && item1.children.length > 0) {
              item1.children.forEach((item2, index2) => {
                if (item2.id == id) {
                  this.FatherIndex = index
                  this.ChildrenIndex = index1
                  this.ThirdIndex = index2
                }
              })
            }
          })
        }
      })
    },
    // 清空值
    clearValue() {
      this.FatherIndex = ''
      this.ThirdIndex = ''
      this.ChildrenIndex = ''
      this.TableId = ''
    },
    //上移 下移
    MoveFiled(data) {
      switch (data.id) {
        // 上移
        case 'TopMove':
          // 判断 选中 table 数据
          if (this.TableId) {
            // 判断 数据 级别 有 children 父级 无 子级
            // 父节点
            if (this.RowInfo.children) {
              this.TableNode(this.TableId)
              this.FMoveTopOrDown(-1, this.FatherIndex)
            }
            // 子节点
            else {
              this.TableNode(this.TableId)
              this.CMoveTopOrDown(-1, this.FatherIndex, this.ChildrenIndex)
            }
          }
          break
        // 下移
        case 'DownMove':
          if (this.TableId) {
            // 判断 数据 级别 有 children 父级 无 子级
            // 父节点
            if (this.RowInfo.children) {
              this.TableNode(this.TableId)
              this.FMoveTopOrDown(1, this.index)
            }
            // 子节点
            else {
              this.TableNode(this.TableId)
              // console.log();
              this.CMoveTopOrDown(
                1,
                this.FatherIndex,
                this.ChildrenIndex,
                this.tableData[this.FatherIndex].children.length
              )
            }
          }
          break
        // 移进
        case 'MoveIn':
          break
      }
    },
    // 父节点上移或下移
    FMoveTopOrDown(num, index) {
      // num 为1 上移 为-1 下移
      // judge 判断能否 上移或者下移
      let judge =
        num === -1 ? index + num > -1 : index + num < this.tableData.length
      if (judge) {
        let temp = this.tableData[index]
        this.$set(this.tableData, index, this.tableData[index + num])
        this.$set(this.tableData, index + num, temp)
      } else {
        let message =
          num === -1 ? '当前在第一层，无法上移' : '当前在最后一层，无法下移'
        this.noteWarning(message)
      }
    },
    // 子节点上移或下移
    CMoveTopOrDown(num, FatherIndex, ChildrenIndex, length) {
      // num 为1 上移 为-1 下移
      // judge 判断能否 上移或者下移
      let judge =
        num === -1 ? ChildrenIndex - 1 > -1 : ChildrenIndex + 1 < length
      if (judge) {
        let temp = this.tableData[FatherIndex].children[ChildrenIndex]
        // console.log(this.tableData[FatherIndex])
        this.$set(
          this.tableData[FatherIndex].children,
          ChildrenIndex,
          this.tableData[FatherIndex].children[ChildrenIndex + num]
        )
        this.$set(
          this.tableData[FatherIndex].children,
          ChildrenIndex + num,
          temp
        )
      } else {
        let message =
          num === -1
            ? '当前在子级第一层，无法上移'
            : '当前在子级最后一层，无法下移'
        this.noteWarning(message)
      }
    },
    // 警告
    noteWarning(message) {
      this.$notify.warning({
        title: '警告',
        message
      })
    },
    // 获取当前时间戳
    getTimestamp() {
      this.timestamp = new Date().getTime()
      // console.log(this.timestamp);
    },
    //
    click(){
      this.centerDialogVisible = true
      this.getTimestamp()
      this.tableData.push({id:this.timestamp,data:this.$store.state.label,children:[]})
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
