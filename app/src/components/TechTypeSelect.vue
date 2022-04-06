<template>
  <v-select
    searchable
    clearable
    name="workflows"
    multiple
    label="name"
    class="search-select"
    close-on-select
    :reduce="(i) => i.id"
    :modelValue="modelValue"
    :options="options"
    v-on:update:modelValue="onUpdate"
    @search="onSearch"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import { TechnologyRepository } from "../repositories";
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const options = ref([]);
    return {
      options,
    };
  },

  methods: {
    async onSearch(q, loading) {
      try {
        this.options = [];
        loading(true);
        const { data: result } = await TechnologyRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.options = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },

    async onUpdate(v) {
      this.$emit("update:modelValue", v);
    },
  },
};
</script>

<style>
</style>