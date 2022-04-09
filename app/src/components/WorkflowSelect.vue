<template>
  <div class="">
    <div class="mb-2 text-2xl text-gray-500" v-if="q && !options.length">
      Didn't find what you looking for?
      <span
        class="ml-4 text-green-600 cursor-pointer"
        @click="modalState = true"
        >Create new workflow</span
      >
    </div>

    <v-select
      searchable
      clearable
      name="workflows"
      :multiple="!single"
      label="name"
      class="search-select"
      close-on-select
      :reduce="(i) => i.id"
      :modelValue="modelValue"
      :options="options"
      ref="wrkflw"
      v-on:update:modelValue="onUpdate"
      @search="onSearch"
      v-on:open="onSearch"
    />
    <AddNewWorkflowModal
      v-if="modalState"
      @close-modal="onDismiss"
      :query="q"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { WorkflowRepository } from "../repositories";
import AddNewWorkflowModal from "./Modals/AddNewWorkflowModal.vue";
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const options = ref([]);
    const debounce = ref(null);
    const modalState = ref(false);
    const q = ref("");
    return {
      modalState,
      options,
      debounce,
      q,
    };
  },
  methods: {
    onUpdate(v) {
      this.$emit("update:modelValue", v);
    },
    async onSearch(q, loading) {
      this.q = q;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(async () => {
        if (!loading) {
          loading = () => {};
        }
        try {
          loading(true);
          const { data: result } = await WorkflowRepository.search(q || "");
          loading(false);
          this.options = result;
        } catch (error) {
          this.options = [];
          loading(false);
          console.log(error);
        }
      }, 400);
    },

    onDismiss(selectedWorkflow) {
      this.$refs.wrkflw.search = "";
      if (selectedWorkflow) {
        this.options.push(selectedWorkflow);
        this.$emit("update:modelValue", [
          ...this.modelValue,
          selectedWorkflow.id,
        ]);
        this.q = "";
      }
      this.modalState = false;
    },
  },
  components: { AddNewWorkflowModal },
};
</script>

<style>
</style>