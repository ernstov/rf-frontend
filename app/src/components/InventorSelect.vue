<template>
  <div class="">
    <div class="mb-2 text-2xl text-gray-500" v-if="q && !options.length">
      Didn't find what you looking for?
      <span
        class="ml-4 text-green-600 cursor-pointer"
        @click="modalState = true"
        >Create new inventor</span
      >
    </div>

    <v-select
      searchable
      clearable
      name="inventors"
      multiple
      ref="inventorselect"
      label="name"
      class="search-select"
      close-on-select
      :reduce="(i) => i.id"
      :modelValue="modelValue"
      :options="options"
      v-on:update:modelValue="onUpdate"
      @search="onSearch"
      v-on:open="onSearch"
    />
    <AddNewInventorModal
      v-if="modalState"
      @close-modal="onDismiss"
      :query="q"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { InventorRepository } from "../repositories";
import AddNewInventorModal from "./Modals/AddNewInventorModal.vue";
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
      q,
      modalState,
    };
  },
  methods: {
    onUpdate(v) {
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
        const { data: result } = await InventorRepository.search(q || "");
        loading(false);
        this.options = result;
      } catch (error) {
        this.options = [];
        loading(false);
        console.log(error);
      }
    },

    onDismiss(val) {
      this.$refs.inventorselect.search = "";
      if (val) {
        this.options.push(val);
        this.$emit("update:modelValue", [...this.modelValue, val.id]);
        this.q = "";
      }
      this.modalState = false;
    },
  },
  components: { AddNewInventorModal },
};
</script>

<style>
</style>