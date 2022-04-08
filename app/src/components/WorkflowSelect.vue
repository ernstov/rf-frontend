<template>
  <v-select
    searchable
    clearable
    name="workflows"
    :multiple="!single"
    label="name"
    class="search-select"
    close-on-select
    :reduce="(i) => i.id"
    v-model="selected"
    :options="options"
    @onUpdate="$emit('input', selected)"
    @search="onSearch"
    v-on:open="onSearch"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import { WorkflowRepository } from "../repositories";
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const options = ref([]);
    const selected = ref([]);

    onMounted(() => {
      selected.value = props.value;
    });

    return {
      options,
      selected,
    };
  },

  methods: {
    async onSearch(q, loading) {
      if (!loading) {
        loading = () => {};
      }
      try {
        this.options = [];
        loading(true);
        const { data: result } = await WorkflowRepository.search(q || "");
        loading(false);
        if (result && result.length) {
          this.options = result;
        }
      } catch (error) {
        loading(false);
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>