<template>
  <div class="">
    <div class="mb-2 text-2xl text-gray-500" v-if="q && !options.length">
      Didn't find what you looking for?
      <span
        class="ml-4 text-green-600 cursor-pointer"
        @click="modalState = true"
        >Create new status</span
      >
    </div>
    <v-select
      searchable
      name="status"
      label="name"
      class="search-select"
      ref="statusselect"
      :reduce="(i) => i.id"
      :clearSearchOnBlur="false"
      :modelValue="modelValue"
      v-on:update:modelValue="onUpdate"
      :options="options"
      @search="onSearch"
      v-on:open="onSearch"
    />

    <AddNewStatusModal v-if="modalState" @close-modal="onDismiss" :query="q" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { StatusRepository } from "../repositories";
import AddNewStatusModal from "./Modals/AddNewStatusModal.vue";
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const options = ref([]);
    const debounce = ref(null);
    const modalState = ref(false);
    const q = ref("");
    return {
      options,
      debounce,
      modalState,
      q,
    };
  },
  methods: {
    async onUpdate(v) {
      this.$emit("update:modelValue", v);
    },
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
        const { data: result } = await StatusRepository.search(q || "");
        loading(false);
        this.options = result;
      } catch (error) {
        this.options = [];
        loading(false);
        console.log(error);
      }
    },

    onDismiss(val) {
      this.$refs.statusselect.search = "";
      if (val) {
        this.options.push(val);
        this.$emit("update:modelValue", val.id);
        this.q = "";
      }
      this.modalState = false;
    },
  },
  components: { AddNewStatusModal },
};
</script>

<style>
</style>