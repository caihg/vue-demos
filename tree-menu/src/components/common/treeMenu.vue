<template>
  <ul>
    <li v-for="(item, index) in data">
      <span @click="toggle(item, index)">
        <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text']"></i>
        {{ item.menuName }}
      </span>
      <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'treeMenu',
  props: {
    data: Array
  },
  data () {
    return {
      folderIconList: [],
      scope: {}
    }
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.children && item.children.length) {
        this.folderIconList[index] = 'folder';
      }
    });
  },
  methods: {
    toggle (item, index) {
      this.$emit('getSubMenu', item);

      if (item.children && item.children.length) {
        this.$set(this.scope, index, !this.scope[index]);
        this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}
i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.icon.folder {
  background-image: url(/src/assets/folder.png);
}
.icon.folder-open {
  background-image: url(/src/assets/folder-open.png);
}
.icon.file-text {
  background-image: url(/src/assets/file-text.png);
}
.tree-menu li {
  line-height: 1.5;
}
</style>
