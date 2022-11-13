<template lang="pug">
.category.accordion-custom( :class="(object.isActiveAcc) ? 'active' : ''") {{isActiveAcc}}
  .category-parent.border.accordion-head-custom(:data-id="object.id" :data-parentt="true")
    button.btn.btn-round(@click="this.clickBtnAcc")
      Icon(icon="arrow-up")
    span.first-title {{ object.title }}
    span.category-child__required(v-if="object.required") {{ object.required }}
    div.d-inline-flex.category-marks(v-if="object.marks")
      span(v-for="marks in object.marks" :class="marks")
    span.category-parent__subtitle {{ object.info }}
  ul.category-children.accordion-body-custom.border-l.border-r
    li.category-child-li.d-block(v-for="element in object.children")
      CategoryChild(
        @mouseup="this.mouseUp"
        @mousedown="this.mouseDown"
        @touchstart="this.mouseDown"
        @touchend="this.mouseUp"
        :object="element"
        :class="(element.isMove ? 'opacity' : '') + (hoverElId === element.id ? ' hover' : '')"
        :data-id="element.id")
      CategoryChild(v-if="element.isMove"
        @mouseup="this.mouseUp"
        @mousedown="this.mouseDown"
        @touchstart="this.mouseDown"
        @touchend="this.mouseUp"
        :object="element"
        :class="'move'"
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
      'object', 'coords', 'hoverElId', 'isActiveAcc'
  ],
  data () {
    return {
      data: {
      }
    }
  },
  methods: {
    clickBtnAcc(e) {
      this.$emit('clickBtnAcc', {
        e
      })
    },
    mouseUp () {
      this.$emit('mouseUp')
    },
    mouseDown () {
      this.$emit('mouseDown')
    },
  },
}
</script>
<style lang="scss" scoped>
@import "src/assets/styles/_breakpoints.scss";
.category {
  &:hover {
    cursor: grab;
  }
  &.move {
    position: absolute;
    width: 82%;
    background-color: transparent;
    z-index: 1000;
    pointer-events: none;
    border: 1px solid $lightgrey;
    box-shadow: $blue-boxshadow;
    .category-children {
      display: none;
    }
  }
  &.hover {
    border-bottom: 5px solid $blue !important;
  }
  &-parent {
    padding: 13px 16px;
    position: relative;
    display: flex;
    align-items: baseline;
    gap: 16px;
    background-color: white;
    @include md {
      flex-wrap: wrap;
      .first-title {
        max-width: 65%
      }
    }
    &__subtitle {
      font-weight: 400;
      font-size: 11px;
      line-height: 108%;
      color: $pink;
    }
    span {
      //margin-left: 14px;
    }
  }
  &-children {
    margin-left: 16px;
    .category-child-li:last-child {
      .category-child {
        border: none;
      }
    }
  }
  .btn-round {
    svg {

      transform: rotate(180deg);
      transition: .3s ease-in-out;
    }
  }
  &.accordion-custom {
    &.active {
      .btn-round {
        svg {
          transform: rotate(0deg);
        }
      }
      .accordion-body-custom {
        max-height: none;
      }
      &.opacity {
        .accordion-body-custom {
          max-height: none;
        }
      }
    }
    .accordion-body-custom {
      max-height: 0;
    }
  }
}
</style>
