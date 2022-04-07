<template>
  <div
    id="base-card"
    class="
      text-4xl
      font-sans
      rounded-2xl
      py-8
      px-8
      bg-white
      border-box
      mr-12
      mb-12
    "
  >
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#base-card {
  position: relative;
  width: 280px;
  height: 220px;
}
</style>