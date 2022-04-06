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
    v-model="selected"
    :options="options"
    @onUpdate="$emit('input', selected)"
    @search="onWorkflowSearch"
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
    async onWorkflowSearch(q, loading) {
      try {
        this.options = [];
        loading(true);
        const { data: result } = await WorkflowRepository.search(q);
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