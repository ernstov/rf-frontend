<template>
  <div>
    <div class="px-60 py-32">
      <!-- <the-dashboard></the-dashboard> -->
      <h4
        class="text-4xl w-full text-center text-gray-500"
        v-if="!programs.length && !loading"
      >
        No programs found on the server.
      </h4>

      <div class="flex flex-wrap">
        <base-card v-for="program in programs" :key="program.id" class="card">
          <p class="text-xl text-green-600">Name</p>
          <h4 class="font-semibold">{{ program.name }}</h4>
          <p class="text-xl text-green-600 mt-6">Description</p>
          <p
            class="
              text-2xl
              overflow-hidden
              text-ellipsis
              max-h-40 max-w-full
              text-gray-700
            "
          >
            {{ program.description }}
          </p>
          <div
            class="absolute right-3 top-3 hidden edit"
            @click="programToEdit = program"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 p-2 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </base-card>
        <div class="h-60 rounded-2xl flex items-center justify-center">
          <button
            @click="showAddNewProgramModal = true"
            class="
              bg-green-500
              hover:bg-green-700
              text-black text-center
              py-2
              px-4
              rounded-full
              h-40
              w-40
              inline-flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="4.5rem"
              viewBox="0 0 24 24"
              width="4.5rem"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
        <add-new-program-modal
          v-if="showAddNewProgramModal"
          @close-modal="
            refreshPrograms();
            showAddNewProgramModal = false;
          "
        ></add-new-program-modal>
        <edit-program-modal
          v-if="programToEdit"
          :value="programToEdit"
          @close-modal="
            refreshPrograms();
            programToEdit = false;
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "@/components/BaseComponents/BaseCard.vue";
import AddNewProgramModal from "@/components/Modals/AddNewProgramModal.vue";
import { WorkflowRepository } from "../repositories";
import { useToast } from "vue-toastification";
import EditProgramModal from "./Modals/EditProgramModal.vue";

export default {
  components: {
    BaseCard,
    AddNewProgramModal,
    EditProgramModal,
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  data() {
    return {
      showAddNewProgramModal: false,
      programs: [],
      loading: true,
      programToEdit: false,
    };
  },
  mounted() {
    this.refreshPrograms();
  },
  methods: {
    async refreshPrograms() {
      try {
        this.loading = true;
        const { data } = await WorkflowRepository.getPrograms();
        this.programs = data;
        this.loading = false;
      } catch (error) {
        this.toast.error("Unable to fetch programs");
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  &:hover {
    .edit {
      display: block;
      cursor: pointer;
    }
  }
}
</style>