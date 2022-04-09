<template>
  <div class="">
    <div class="mb-2 text-2xl text-gray-500" v-if="q && !options.length">
      Didn't find what you looking for?
      <span
        class="ml-4 text-green-600 cursor-pointer"
        @click="modalState = true"
        >Create new technology</span
      >
    </div>
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
      ref="techselect"
      :options="options"
      v-on:update:modelValue="onUpdate"
      @search="onSearch"
      v-on:open="onSearch"
    />

    <AddNewTechnologyModal
      v-if="modalState"
      @close-modal="onDismiss"
      :query="q"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { TechnologyRepository } from "../repositories";
import AddNewTechnologyModal from "./Modals/AddNewTechnologyModal.vue";
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const options = ref([]);
    const debounce = ref([]);
    const q = ref("");
    const modalState = ref(false);
    return {
      options,
      debounce,
      q,
      modalState,
    };
  },
  methods: {
    async onSearch(q, loading) {
      this.q = q;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchResults(q, loading);
      }, 400);
    },
    async fetchResults(q, loading) {
      if (!loading) {
        loading = () => {};
      }
      try {
        loading(true);
        const { data: result } = await TechnologyRepository.search(q || "");
        loading(false);
        this.options = result;
      } catch (error) {
        this.options = [];
        loading(false);
        console.log(error);
      }
    },
    async onUpdate(v) {
      this.$emit("update:modelValue", v);
    },
    onDismiss(val) {
      this.$refs.techselect.search = "";
      if (val) {
        this.options.push(val);
        this.$emit("update:modelValue", [...this.modelValue, val.id]);
        this.q = "";
      }
      this.modalState = false;
    },
  },
  components: { AddNewTechnologyModal },
};
</script>

<style>
</style>