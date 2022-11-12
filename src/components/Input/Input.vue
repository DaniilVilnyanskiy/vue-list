<template lang="pug">
.input-component
  Icon(icon="search")
  input(@input="this.eventInput" placeholder="Введите название документа")
</template>
<script>
import Icon from "../Icon/Icon.vue";

export default {
  components: {
    Icon
  },
  methods: {
    eventInput(e) {
      this.$emit('eventInput', e)
    }
  }
}
</script>
<style lang="scss">
.input-component {
  border-bottom: 1px solid $blue;
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  input {
    border: none;
    margin-left: 12px;
    width: 100%;
    background-color: transparent;
  }
}
</style>
