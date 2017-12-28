<template>
  <li>
    <span @click="toggle">
      <i v-if="isFolder" class="icon" :class="[isOpen ? 'folder-open': 'folder']"></i>
      <!-- isFolder 判断是否存在子级，以便改变图标 -->
      <i v-if="!isFolder" class="icon file-text"></i>
      {{ model.menuName }}
    </span>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-menu v-for="item in model.children" :model="item"></tree-menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeMenu',
  props: ['model'],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style>
i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.icon.folder {
  background-image: url(./../../assets/img/folder.png);
}
.icon.folder-open {
  background-image: url(./../../assets/img/folder-open.png);
}
.icon.file-text {
  background-image: url(../../assets/img/file-text.png);
}
</style>
