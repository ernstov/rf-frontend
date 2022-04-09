<template>
  <div class="">
    <div class="mb-2 text-2xl text-gray-500" v-if="q && !options.length">
      Didn't find what you looking for?
      <span
        class="ml-4 text-green-600 cursor-pointer"
        @click="modalState = true"
        >Create new owner</span
      >
    </div>
    <v-select
      searchable
      clearable
      name="owners"
      multiple
      label="name"
      class="search-select"
      close-on-select
      :reduce="(i) => i.id"
      :modelValue="modelValue"
      ref="ownerselect"
      :options="options"
      v-on:update:modelValue="onUpdate"
      @search="onSearch"
      v-on:open="onSearch"
    />
    <AddNewOwnerModal v-if="modalState" @close-modal="onDismiss" :query="q" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { OwnerRepository } from "../repositories";
import AddNewOwnerModal from "./Modals/AddNewOwnerModal.vue";
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
    onUpdate(v) {
      this.$emit("update:modelValue", v);
    },
    async onSearch(q, loading) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchResults(q, loading);
      }, 400);
    },
    async fetchResults(q, loading) {
      this.q = q;
      if (!loading) {
        loading = () => {};
      }
      try {
        loading(true);
        const { data: result } = await OwnerRepository.search(q || "");
        loading(false);
        this.options = result;
      } catch (error) {
        this.options = [];
        console.log(error);
        loading(false);
      }
    },
    onDismiss(selectedOwner) {
      this.$refs.ownerselect.search = "";
      if (selectedOwner) {
        this.options.push(selectedOwner);
        this.$emit("update:modelValue", [...this.modelValue, selectedOwner.id]);
        this.q = "";
      }
      this.modalState = false;
    },
  },
  components: { AddNewOwnerModal },
};
</script>

<style>
</style>