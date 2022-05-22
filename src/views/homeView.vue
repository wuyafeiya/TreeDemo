<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
    <el-button type="danger" @click="AddData(data)">点击</el-button>
  </div>
</template>

<script>
import store from '@/store'
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
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
<<<<<<< HEAD
  methods:{
    handleNodeClick(data){
      store.state.label = data.label
    }
=======
  methods: {
    handleNodeClick(data) {
      console.log(data)
      this.$store.commit('ChangeLabel', data.label)
    }
    // AddData(data) {
    //   data.forEach((item) => {
    //     item.name = item.label
    //     if (item.children && item.children.length > 0) {
    //       this.AddData(item.children)
    //     }
    //   })
    // }
>>>>>>> 56d0dbf1a5d5da0b85af30c17d5f56c843972740
  }
}
</script>

<style></style>
