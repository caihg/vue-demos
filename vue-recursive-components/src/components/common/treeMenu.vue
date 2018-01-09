<template>
  <li>
    <span @click="toggle">
      <i :class="['icon', (isFolder || isDynamicFolder) ? folderIcon : 'file-text']"></i>
      {{ model.menuName }}
    </span>
    <ul v-if="isOpen">
      <tree-menu v-for="item in model.children" :key="item.id" :model="item"></tree-menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeMenu',
  props: {
    model: Object,
    subMenuData: Object
  },
  data () {
    return {
      folderIcon: 'folder',
      isDynamicFolder: false,
      isOpen: false
    }
  },
  computed: {
    isFolder () {
      return !!(this.model.children && this.model.children.length)
    }
  },
  watch: {
    isDynamicFolder () {
      this.isOpen = true
      this.folderIcon = 'folder-open'
    }
  },
  methods: {
    toggle () {
      const subMenuData = this.subMenuData

      if (subMenuData && (this.model.id === subMenuData.parentId && subMenuData.list) && !this.model.children) {
        this.model.children = subMenuData.list
        this.isDynamicFolder = !!(this.model.children && this.model.children.length)
        this.isOpen = true
        this.folderIcon = 'folder-open'
      }

      if (this.isFolder || this.isDynamicFolder) {
        this.isOpen = !this.isOpen
        this.folderIcon = this.isOpen ? 'folder-open' : 'folder'
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
