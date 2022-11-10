<template lang="pug">
.category
  .category-parent.border
    Icon(icon="arrow-up")
    span {{ object.title }}
  .categoty-children
    CategoryChild(v-for="element in object.children"
      @mouseup="this.mouseUp"
      @mousedown="this.mouseDown"
      :object="element"
      :class="(element.isMove ? 'move' : '') + (hoverElId === element.id ? ' hover' : '')"
      :data-id="element.id"
      :style=`{top: element.isMove ? coords.y - 20 + 'px' : 0,
            left: element.isMove ? coords.x - 80 + 'px' : 0}`)
</template>

<script>
import Icon from '../Icon/Icon.vue'

import CategoryChild from "./CategoryChild.vue";

export default {
  components: {
    Icon, CategoryChild
  },
  props: [
      'object', 'coords', 'hoverElId'
  ],
  methods: {
    mouseUp () {
      this.$emit('mouseUp')
    },
    mouseDown () {
      this.$emit('mouseDown')
    }
  }
}
</script>
<style lang="scss" scoped>
.category-parent {
  padding: 13px 16px;
  position: relative;
}
</style>
