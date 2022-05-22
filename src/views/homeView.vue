<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
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
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods:{
    handleNodeClick(data){
      console.log(data.label);
      store.state.label = data.label
    }
  }
}
</script>

<style></style>
