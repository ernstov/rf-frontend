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
    @input="$emit('input', selected)"
    @search="onOwnerSearch"
  />
</template>

<script>
import { ref } from "@vue/reactivity";
import { OwnerRepository } from "../repositories";
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
    async onOwnerSearch(q, loading) {
      try {
        this.options = [];
        loading(true);
        const { data: result } = await OwnerRepository.search(q);
        loading(false);
        if (result && result.length) {
          this.options = result;
        }
      } catch (error) {
        console.log(error);
        loading(false);
      }
    },
  },
};
</script>

<style>
</style>