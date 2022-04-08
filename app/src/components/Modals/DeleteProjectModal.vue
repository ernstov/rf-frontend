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
        items-end
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
          sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full
          p-12
        "
      >
        <div class="header flex justify-between">
          <h4 class="text-2xl mb-8 text-center flex-grow">
            Are you sure want to delete the project?
          </h4>
          <span class="icon cursor-pointer" @click="$emit('close-modal')">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 94.926 94.926"
              style="enable-background: new 0 0 94.926 94.926"
              xml:space="preserve"
            >
              <path
                d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
              c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
              c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
              c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
              s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
              />
            </svg>
          </span>
        </div>
        <div class="bg-white">
          <form @submit.prevent="onSubmit" class="mb-4">
            <p class="text-xl mb-1">Name</p>
            <p class="text-3xl font-semibold">{{ value.name }}</p>
            <p class="text-xl mb-1 mt-6">Description</p>
            <p class="text-3xl">{{ value.description }}</p>
          </form>

          <div class="flex items-center justify-end mt-12">
            <BaseButton
              :loading="deleteLoading"
              @click="deleteProject"
              class="bg-red-700 w-80 py-8 mt-8 mr-8"
            >
              Delete
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { WorkflowRepository } from "../../repositories";
import BaseButton from "../BaseComponents/BaseButton.vue";

export default {
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        type: "project",
      },
      deleteLoading: false,
      deleteConfirm: false,
    };
  },
  mounted() {
    const { name, description, type } = this.value;
    this.form = { name, description, type };
  },
  methods: {
    async deleteProject() {
      try {
        this.deleteLoading = true;
        await WorkflowRepository.delete(this.value.id);
        this.deleteLoading = false;
        this.toast.success("Project Deleted");
        this.$emit("close-modal");
      } catch (error) {
        this.deleteLoading = false;
        console.log(error);
      }
    },
  },
  components: { BaseButton },
};
</script>