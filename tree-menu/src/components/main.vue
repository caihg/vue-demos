<template>
  <div>
    <my-tree :data="theData" :name="menuName" :loading="loading" @getSubMenu="getSubMenu"></my-tree>
  </div>
</template>

<script>
const myData = [
  {
    id: '1',
    menuName: '基础管理',
    menuCode: '10'
  },
  {
    id: '2',
    menuName: '商品管理',
    menuCode: ''
  },
  {
    id: '3',
    menuName: '订单管理',
    menuCode: '30',
    children: [
      {
        menuName: '订单列表',
        menuCode: '31'
      },
      {
        menuName: '退货列表',
        menuCode: '32',
        children: []
      }
    ]
  },
  {
    id: '4',
    menuName: '商家管理',
    menuCode: '',
    children: []
  }
];

const subMenuData1 = {
  parentId: '1',
  children: [
    {
      menuName: '用户管理',
      menuCode: '11'
    },
    {
      id: '12',
      menuName: '角色管理',
      menuCode: '12',
      children: [
        {
          menuName: '管理员',
          menuCode: '121'
        },
        {
          menuName: 'CEO',
          menuCode: '122'
        },
        {
          menuName: 'CFO',
          menuCode: '123'
        },
        {
          menuName: 'COO',
          menuCode: '124'
        },
        {
          menuName: '普通人',
          menuCode: '124'
        }
      ]
    },
    {
      menuName: '权限管理',
      menuCode: '13'
    }
  ]
};

const subMenuData2 = {
  parentId: '2',
  children: [
    {
      menuName: '商品一',
      menuCode: '21'
    },
    {
      id: '22',
      menuName: '商品二',
      menuCode: '22',
      children: [
        {
          menuName: '子类商品1',
          menuCode: '221'
        },
        {
          menuName: '子类商品2',
          menuCode: '222'
        }
      ]
    }
  ]
};

import myTree from './common/treeMenu.vue'
export default {
  components: {
    myTree
  },
  data () {
    return {
      theData: myData,
      menuName: 'menuName', // 显示菜单名称的属性
      loading: false
    }
  },
  methods: {
    getSubMenu (menuItem, callback) {
      this.loading = true;

      if (menuItem.id === subMenuData1.parentId) {
        this.loading = false;
        menuItem.children = subMenuData1.children;
        callback(menuItem.children);
      }

      setTimeout(() => {
        if (menuItem.id === subMenuData2.parentId) {
          this.loading = false;
          menuItem.children = subMenuData2.children;
          callback(menuItem.children);
        }
      }, 2000);
    }
  }
}
</script>
