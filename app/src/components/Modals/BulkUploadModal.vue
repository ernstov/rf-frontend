<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-center
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          relative
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full
          p-12
        "
      >
        <h2 class="text-5xl mb-8">Bulk Upload</h2>
        <div class="bg-white">
          <form action="">
            <div class="grid grid-cols-2 gap-14 mt-14">
              <div>
                <p class="text-3xl mb-5">CSV File</p>
                <input
                  type="file"
                  ref="upload"
                  accept=".csv"
                  class="
                    placeholder-gray-500 placeholder-opacity-50
                    w-full
                    h-16
                    text-2xl
                    px-5
                    border border-gray-300
                    pt-2
                    rounded-md
                    outline-none
                    focus:outline-none
                  "
                  @change="handleFile"
                />
              </div>
              <div>
                <p class="text-3xl mb-5">Select Workflow</p>

                <WorkflowSelect v-model="selectedWorkflows" />
              </div>
            </div>
          </form>
        </div>
        <div class="py-3 flex justify-end mt-8">
          <BaseButton
            class="bg-green-600 w-60"
            @click="submit"
            :loading="loading"
            >Save</BaseButton
          >
          <button
            type="button"
            class="
              w-30
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-16
              py-4
              bg-gray-600
              font-medium
              text-white
              hover:bg-gray-700
              focus:outline-none
              sm:w-auto
              text-3xl
              ml-10
            "
            @click="$emit('close-modal')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkflowSelect from "@/components/WorkflowSelect.vue";
import { ref } from "@vue/reactivity";
import { AssetRepository } from "../../repositories/asset";
import { useToast } from "vue-toastification";
import BaseButton from "../BaseComponents/BaseButton.vue";

export default {
  setup() {
    const selectedWorkflows = ref([]);
    const loading = ref(false);
    const file = ref(null);
    const toast = useToast();
    return {
      file,
      selectedWorkflows,
      toast,
      loading,
    };
  },
  components: {
    WorkflowSelect,
    BaseButton,
  },
  methods: {
    async handleFile() {
      this.file = this.$refs.upload.files[0];
    },
    async submit() {
      const fd = new FormData();
      this.selectedWorkflows.forEach((id) => {
        fd.append("workflows", id);
      });
      fd.append("file", this.file);
      try {
        this.loading = true;
        await AssetRepository.createWithCSV(fd);
        this.toast.success("Bulk upload success.");
        this.$emit("close-modal");
      } catch (error) {
        this.loading = false;
        this.toast.error(error.message);
        console.log(error);
      }
    },
  },
};
</script>