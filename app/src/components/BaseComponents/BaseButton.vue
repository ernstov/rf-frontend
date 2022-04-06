<template>
  <button
    id="u-button"
    class="
      py-4
      rounded-md
      text-3xl
      font-medium
      transition
      duration-300
      text-center
      inline-flex
      items-center
      justify-center
      flex-row
      cursor-pointer
      rounded-lg
      duration-300
    "
    :disabled="loading"
    :class="[
      loading ? 'bg-gray-900' : '',
      light ? 'text-black' : 'text-gray-50',
    ]"
  >
    <transition name="up">
      <img
        src="@/assets/images/three-dots.svg"
        alt="spinner"
        v-if="loading"
        class="absolute w-12"
      />
      <div v-else class="data absolute">
        <slot></slot>
      </div>
    </transition>
  </button>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ripple: false,
    };
  },
  components: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#u-button {
  .up-enter-active,
  .up-leave-active {
    transition: all 0.3s;
  }
  .up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-100%);
  }
  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
}
</style>