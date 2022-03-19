<template>
  <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <base-card></base-card>
    <div class="h-60 rounded-2xl flex items-center justify-center">
      <button
        class="
          bg-green-500
          hover:bg-green-700
          text-black text-center
          py-2
          px-4
          rounded-full
          h-40
          w-40
          inline-flex
          items-center
          justify-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4.5rem"
          viewBox="0 0 24 24"
          width="4.5rem"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseComponents/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
};
</script>