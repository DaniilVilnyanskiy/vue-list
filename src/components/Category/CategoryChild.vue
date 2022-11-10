<template lang="pug">
.category-child.border
  span {{ object.title }}
</template>

<script>
import Icon from '../Icon/Icon.vue'

export default {
  components: {
    Icon
  },
  props: ['object']
}
</script>

<style lang="scss" scoped>
.category-child {
  padding: 9px 15px;
  position: relative;
  &.move {
    position: absolute;
    width: 100%;
    background-color: white;
    z-index: 1000;
    pointer-events: none;
  }
  &.hover {
    border-bottom: 5px solid $blue !important;
  }
}
</style>
