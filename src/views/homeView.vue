<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
    <el-button type="danger" @click="AddData(Data)">点击</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      NewArr: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      Data: [
        {
          baseMsgCaseRule: { id: 1, name: 'wj' },
          childrenList: [
            {
              baseMsgCaseRule: { id: 1 - 1, name: 'wjj' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 1 - 2, name: 'wjjj' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 1 - 3, name: 'wjjjj' },
              childrenList: []
            }
          ]
        },
        {
          baseMsgCaseRule: { id: 2, name: 'ck' },
          childrenList: [
            {
              baseMsgCaseRule: { id: 2 - 1, name: 'ckk' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 2 - 2, name: 'ckkk' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 2 - 3, name: 'ckkkk' },
              childrenList: []
            }
          ]
        },
        {
          baseMsgCaseRule: { id: 3, name: 'ku' },
          childrenList: [
            {
              baseMsgCaseRule: { id: 3 - 1, name: 'kuu' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 3 - 2, name: 'kuuu' },
              childrenList: []
            },
            {
              baseMsgCaseRule: { id: 3 - 3, name: 'kuuuu' },
              childrenList: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
      this.$store.commit('ChangeLabel', data.label)
    },
    AddData() {
      this.change(this.Data)
      console.log(this.Data)
    },
    change(arr) {
      arr.forEach((item) => {
        if (item.baseMsgCaseRule) {
          this.changeObj(item, item.baseMsgCaseRule)
          delete item.baseMsgCaseRule
        }
        if (item.childrenList) {
          item.children = item.childrenList
          delete item.childrenList
        }
        this.change(item.children)
      })
    },
    changeObj(item, obj) {
      for (const key in obj) {
        item[key] = obj[key]
      }
    }
  }
}
</script>

<style></style>
