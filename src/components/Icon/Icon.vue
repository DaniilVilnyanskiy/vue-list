<template lang="pug">
svg(v-bind:class="concat")
  use(:xlink:href="concatXlink")
</template>
<script>
export default {
  props: ['icon'],
  computed: {
    concat: function () {
      return 'icon icon-' + this.icon;
    },
    concatXlink: function () {
      return '/vue-list/images/svg/sprite.svg#' + this.icon
    }
  },
}
</script>
<style lang="scss">

</style>
