<template lang="pug">
.category-child.border-b
  span.second-title {{ object.title }}
  div.d-inline-flex.category-marks(v-if="object.marks")
    span(v-for="marks in object.marks" :class="marks")
  span.category-child__required(v-if="object.required") {{ object.required }}
  span.category-child__subtitle {{ object.info }}
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
  display: flex;
  align-items: baseline;
  gap: 16px;
  background-color: white;
  span {
    //margin-left: 14px;
  }
  &.move {
    position: absolute;
    width: 82%;
    background-color: white;
    z-index: 1000;
    pointer-events: none;
    border: 1px solid $lightgrey;
    box-shadow: $blue-boxshadow;
  }
  &.hover {
    border-bottom: 5px solid $blue !important;
  }
}
</style>
